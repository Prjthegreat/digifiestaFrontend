import React from 'react'
import image from '../images/UCCDA_wb (1).png'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import ContentSection from '../components/ContentSection/ContentSection'
import PrevEvents from '../components/previousEvent/PrevEvents' 
import MainFooter from '../components/footer/MainFooter'
//import Background from '../images/banner.png';
import Background from '../images/banner_2.jpg'
import Err from '../images/error.png'
import '../components/responsive.css'
const HomePage = () => {
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
        , {
          id: 3,
          name: "About",
          link: "/about"
        },
        
      ]
       // banner image variable start
  let bgimg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  }
  // banner image variable end 
  // banner text variable start
  let bannerText = {
    subHeading: 'Get Ready to Witness the Digital fest of YMCA',
    heading: 'DigiFiesta 2.0',
    error: Err,
  }
  // banner text variable end 
  // banner countdown variable start
  let bannerCountdown = {
    date: "July 15, 2021 10:37:25"
  }
  // banner countdown variable end 
  // banner video button part start
  let videobtn = {
    iconClassName: "fa fa-play",
    text: "Video"
  }
    return (
        <div>
        <Navbar name={navitem} logo={image}/>
        <Banner
          bg={bgimg}
          text={bannerText}
          countdown={bannerCountdown}
          videobtn={videobtn}/>
            <ContentSection />
          <PrevEvents />
        {/* <Festival img={festiveimg} year={festivedate} text={festivetext} location={location}/>
        <Shedule  speaker={speaker} bg={shedulebg} title={title}/>
        <Upcoming title={upcomingtitle} event={event}/>
        <Gallery title={galleryTitle} img={galleryImg}/>
        <Event feedback={feedback} title={feedbackTitle}/>
        <Pricing title={pricingTitle} plan={pricingPlane} selectplan={selectplan}/>
        <Sponsor title={sponsorTitle} sponsor={sponsorimg}/>
        <Footer bg={footerbg}/> */}
      
        <MainFooter />
        </div>
    )
}

export default HomePage





// import React from 'react'
// import Navbar from "../components/navbar/navbar";
// import Banner from '../components/banner/banner';
// import Festival from '../components/festival/festival';
// import Shedule from '../components/shedule/shedule';
// import Upcoming from '../components/upcoming/upcoming';
// import Gallery from '../components/gallery/gallery';
// import Event from '../components/event/event';
// import Pricing from '../components/pricing/pricing';
// import Sponsor from '../components/sponsor/sponsor'
// import Footer from '../components/footer/footer'
// import{navitem,image,bgimg,bannerText,bannerCountdown,videobtn,festiveimg,festivedate,festivetext,location,shedulebg,speaker,title,upcomingtitle,event,galleryTitle,galleryImg,feedback,feedbackTitle,pricingTitle,pricingPlane,selectplan,sponsorTitle,sponsorimg,footerbg} from '../components/variables/variable'
//  function home() {
//     return (
//         <div>
//         <Navbar name={navitem} logo={image}/>
//         <Banner
//           bg={bgimg}
//           text={bannerText}
//           countdown={bannerCountdown}
//           videobtn={videobtn}/>
//         <Festival img={festiveimg} year={festivedate} text={festivetext} location={location}/>
//         <Shedule  speaker={speaker} bg={shedulebg} title={title}/>
//         <Upcoming title={upcomingtitle} event={event}/>
//         <Gallery title={galleryTitle} img={galleryImg}/>
//         <Event feedback={feedback} title={feedbackTitle}/>
//         <Pricing title={pricingTitle} plan={pricingPlane} selectplan={selectplan}/>
//         <Sponsor title={sponsorTitle} sponsor={sponsorimg}/>
//         <Footer bg={footerbg}/>
//         </div>
//     )
// }


// export default home;