import React,{useContext,useState,useEffect} from 'react'
import Loader from "react-loader-spinner"
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import NavBar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import CardsContainer from './CardsContainer'
import MainFooter from '../../components/footer/MainFooter'
import image from '../../images/UCCDA_wb (1).png'
import Background from '../../images/Events.jpg'
import Err from '../../images/error.png'
import { AuthContext } from '../../context/auth-context'
import ConfirmRegsiterEventModal from './ConfirmRegsiterEventModal'

const MainEventsPage = (props) => {
    const auth=useContext(AuthContext)
    const [events,setEvents]=useState([])
    const [isrequest,setIsRequest]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    console.log(auth)
    const navitem = [
        {
          id: 1,
          name: "Home",
          link: "/"
        }, {
          id: 3,
          name: "Event",
          link: "/eventpage"
        },
         {
          id: 3,
          name: "About",
          link: "/about"
        },
      ]
      
       useEffect(() => {
        const fetchEvents=async()=>{
           setIsLoading(true)
           const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}event/list-events`,{
               method:'GET',
               headers:{
                   'Content-Type':'application/json',
                   'Authorization':'Bearer '+auth.token
               },
           })
       
          let array
          if(response.status==200){
            array= await response.json();
        
            setEvents(array);
            setIsLoading(false)
          }
        
          else{
            console.log('wait....')
            setIsLoading(false)
          }
            console.log('get all events');
           // console.log(auth);

       
        }
       // if(auth.token){
         fetchEvents()
        //}
     }, [isrequest])


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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

    return (
         <React.Fragment>
           {modal && <ConfirmRegsiterEventModal  modal={modal} toggle={toggle} /> }
          { isLoading &&<div style={{backgroundColor:'rgba(42, 42, 44, 0.85)',height:'100vh'}}><Loader
              type="Bars"
              color="#00BFFF"
              height={500}
              width={300}
             visible={isLoading}
            /></div> }
          { !isLoading &&  <React.Fragment> 
            <NavBar name={navitem} logo={image} />
           <Banner
           bg={bgimg}
           text={bannerText}
          />
           <CardsContainer  events={events} isLoading={isLoading} 
           setIsLoading={setIsLoading} isrequest={isrequest} setIsRequest={setIsRequest}
            modal={modal} toggle={toggle} />
           <MainFooter />
            </React.Fragment>}
        </React.Fragment>
    )
}

export default MainEventsPage
