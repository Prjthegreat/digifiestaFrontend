import React from 'react'
import NavBar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import CardsContainer from './CardsContainer'
import MainFooter from '../../components/footer/MainFooter'
import image from '../../images/UCCDA_wb (1).png'
import Background from '../../images/Events.jpg'
import Err from '../../images/error.png'
const MainEventsPage = () => {

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
           <CardsContainer />
           <MainFooter />
        </React.Fragment>
    )
}

export default MainEventsPage
