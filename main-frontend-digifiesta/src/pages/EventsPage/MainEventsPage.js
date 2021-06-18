import React,{useContext,useState,useEffect} from 'react'
import NavBar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import CardsContainer from './CardsContainer'
import MainFooter from '../../components/footer/MainFooter'
import image from '../../images/UCCDA_wb (1).png'
import Background from '../../images/Events.jpg'
import Err from '../../images/error.png'
import { AuthContext } from '../../context/auth-context'
const MainEventsPage = (props) => {
    const auth=useContext(AuthContext)
    const [events,setEvents]=useState([])
    console.log(auth)
    const navitem = [
        {
          id: 1,
          name: "Home",
          link: "/"
        }, {
          id: 2,
          name: "Speakers",
          link: "#speakers"
        }, {
          id: 3,
          name: "Event",
          link: "/eventpage"
        }, {
          id: 5,
          name: "Contact",
          link: "#contact"
        }
      ]
      
       useEffect(() => {
        const fetchEvents=async()=>{
        
           const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}event/list-events`,{
               method:'GET',
               headers:{
                   'Content-Type':'application/json',
                   'Authorization':`Bearer ${auth.token}`
     
               },
           })
          //  if(!response.ok){
          //      console.log('response.message')
          //  }
          let array
          if(response.status==200){
            array= await response.json();
          
            setEvents(array);
          }
          // if(response.status==403){
          //   fetchEvents();
          // }
          else{
            console.log('wait....')
          }
          //  const responseData=await response.json();
          //  console.log(responseData);
          //  setEvents(responseData)
           // setLoading(false);
            console.log('get all events');
           // console.log(auth);
       
        }
         fetchEvents()
     }, [])


        // banner image variable start
  let bgimg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  }
  // banner image variable end 
  // banner text variable start
  let bannerText = {
    subHeading: 'Get Ready to Compete',
    heading: 'DigiFiesta Events 2021',
    error: Err,
  }
    return (
         <React.Fragment>
           <NavBar name={navitem} logo={image} />
           <Banner
           bg={bgimg}
           text={bannerText}
          />
           <CardsContainer token={auth.token} events={events} />
           <MainFooter />
        </React.Fragment>
    )
}

export default MainEventsPage
