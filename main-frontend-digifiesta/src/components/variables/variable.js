import logo from '../../assets/images/logo.png';
import Background from '../../assets/images/banner.png';
import Festiveimg from '../../assets/images/festive-img.png';
import Festiveimg2 from '../../assets/images/fetive-img1.png';
import Festivelocation from '../../assets/images/locationimg.png';
import Festivephone from '../../assets/images/address.png'
import Speakerimg from '../../assets/images/speaker-img.png'
import Speakerimg1 from '../../assets/images/speaker-img1.png'
import Speakerimg2 from '../../assets/images/speaker-img2.png'
import Speakerimg3 from '../../assets/images/speaker-img3.png'
import Speakerimg4 from '../../assets/images/speaker-img4.png'
import Speakerimg5 from '../../assets/images/speaker-img5.png'
import Speakerbg from '../../assets/images/shedulebanner.png'
import Event1 from '../../assets/images/event1.png'
import Event2 from '../../assets/images/event2.png'
import Event3 from '../../assets/images/event3.png'
import Event4 from '../../assets/images/event4.png'
import Gallery1 from '../../assets/images/gallery1.png'
import Gallery2 from '../../assets/images/gallery2.png'
import Gallery3 from '../../assets/images/gallery3.png'
import Gallery4 from '../../assets/images/gallery4.png'
import Gallery5 from '../../assets/images/gallery5.png'
import Gallery6 from '../../assets/images/gallery6.png'
import Gallery7 from '../../assets/images/gallery8.png'
import Gallery8 from '../../assets/images/gallery9.png'
import Gallery9 from '../../assets/images/gallery10.png'
import Gallery10 from '../../assets/images/gallery11.png'
import Gallery11 from '../../assets/images/gallery12.png'
import Gallery12 from '../../assets/images/gallery13.png'
import Feedback1 from '../../assets/images/feedback1.png'
import Feedback2 from '../../assets/images/feedback2.png'
import Sponsor1 from '../../assets/images/sponsor1.png'
import Sponsor2 from '../../assets/images/sponsor2.png'
import Sponsor3 from '../../assets/images/sponsor3.png'
import Sponsor4 from '../../assets/images/sponsor4.png'
import Sponsor5 from '../../assets/images/sponsor5.png'
import Sponsor6 from '../../assets/images/sponsor6.png'
import Sponsor7 from '../../assets/images/sponsor7.png'
import Sponsor8 from '../../assets/images/sponsor8.png'
import Sponsor9 from '../../assets/images/sponsor9.png'
import Sponsorname from '../../assets/images/sponsorname1.png'
import Sponsorname2 from '../../assets/images/sponsorname2.png'
import Sponsorname3 from '../../assets/images/sponsorname3.png'
import Sponsorname4 from '../../assets/images/sponsorname4.png'
import Aboutbanner from '../../assets/images/aboutbanner.png'
import Err from '../../assets/images/error.png'
import Footerbg from '../../assets/images/footerbg.png'
  // nav Item variable start
  const navitem = [
    {
      id: 1,
      name: "Home",
      link: "#Home"
    }, {
      id: 2,
      name: "Speakers",
      link: "#speakers"
    }, {
      id: 3,
      name: "Event",
      link: "#event"
    }, {
      id: 4,
      name: "Testimonial",
      link: "#testimonial"
    }, {
      id: 5,
      name: "Contact",
      link: "#contact"
    }
  ]
  // nav Item variable end 
  // logo variable start
  const image = logo
  // logo variable end 
  // banner image variable start
  let bgimg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  }
  // banner image variable end 
  // banner text variable start
  let bannerText = {
    subHeading: 'Don’t Miss it',
    heading: 'World Biggest UI/UX Meetup V-1.0',
    error: Err,
  }
  // banner text variable end 
  // banner countdown variable start
  let bannerCountdown = {
    date: "Jan 5, 2021 10:37:25"
  }
  // banner countdown variable end 
  // banner video button part start
  let videobtn = {
    iconClassName: "fa fa-play",
    text: "Watch Full Video"
  }
  // banner video button part end 
  // festive left part image variable start
  let festiveimg = [
    {
      id: 1,
      img: Festiveimg
    }, {
      id: 2,
      img: Festiveimg2
    }, {
      id: 3,
      img: Festiveimg2
    }
  ]
  // festive left part image variable end 
  // festive date variable end
  let festivedate = [
    {
      year: "2020"
    }, {
      day: "20 octobar"
    }
  ]
  // festive date variable end 
  //  festive text variable start

  let festivetext = {
    heading: "Biggest UI/UX Festival in your country v:1.0",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr ud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aut e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis ist e natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  }
  //  festive text variable end

  // festive loaction variabl start
  let location = [
    {
      locationimg:Festivelocation,
      text: "7382 Shirley Garden Avenue North-South Ozone Park,NewYork 11420"
    },
    {
      addimg:Festivephone,
      addtext: "+880 1678965412 +880 1632145678 +880 1996321478"
    }
  ]
  // festive loaction variabl end

  // shedule variable start
  let shedulebg = {
    backgroundImage: `url(${Speakerbg})`,
    backgroundSize: "cover",
    
  }

  let title={
    subheading:"Time Table & Speaking People",
    heading:"Schedule & Speakers"
  }
  let speaker = [
    {
        id:1,
        img:Speakerimg,
        time:"09:00 A.M - 11:00 A.M",
        name:"Austin Richard",
        designation:"Lead UI Designer - InfoTech LTD.",
        facebook:"fa fa-facebook",
        twiter:"fa fa-twitter",
        pinterest:"fa fa-pinterest-p",
        linkdin:"fa fa-linkedin",
    },
    {
        id:2,
        img:Speakerimg1,
        time:"11:00 A.M - 01:00 P.M",
        name:"Susanson Linda",
        designation:"UI/UX Designer - InfoTech LTD.",
        facebook:"fa fa-facebook",
      twiter:"fa fa-twitter",
      pinterest:"fa fa-pinterest-p",
      linkdin:"fa fa-linkedin",
  },
    {
        id:3,
        img:Speakerimg2,
        time:"02:00 P.M - 04:00 P.M",
        name:"Muhammad Thomas",
        designation:"Managing Director - Web Sloution",
        facebook:"fa fa-facebook",
      twiter:"fa fa-twitter",
      pinterest:"fa fa-pinterest-p",
      linkdin:"fa fa-linkedin",
  },
    {
        id:4,
        img:Speakerimg3,
        time:"04:00 P.M - 06:00 P.M",
        name:"Samuel Max",
        designation:"Product Designer - Creative IT",
        facebook:"fa fa-facebook",
      twiter:"fa fa-twitter",
      pinterest:"fa fa-pinterest-p",
      linkdin:"fa fa-linkedin",
  },
  {
    id:5,
    img:Speakerimg4,
    time:"06:00 P.M - 08:00 P.M",
    name:"Abaegayle Abbi",
    designation:"Business Dev. - InfoTech LTD.",
    facebook:"fa fa-facebook",
  twiter:"fa fa-twitter",
  pinterest:"fa fa-pinterest-p",
  linkdin:"fa fa-linkedin",
},
{
    id:6,
    img:Speakerimg5,
    time:"08:00 P.M - 10:00 P.M",
    name:"George Hary",
    designation:"Graphic Designer - InfoTech LTD.",
    facebook:"fa fa-facebook",
  twiter:"fa fa-twitter",
  pinterest:"fa fa-pinterest-p",
  linkdin:"fa fa-linkedin",
},
  ]

  // shedule variable end

  // upcoming variable start
  let upcomingtitle = {
    subheading:"fututure events",
    heading:"UPCOMING  EVENTS"
  }
  
  let event = [
    {
      id:1,
      img:Event1,
      title:"Wordpress Day Long Bootcamp",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:2,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:3,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:4,
      img:Event4,
      title:"UI/UX Bootcamp - 2020",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:5,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:6,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:7,
      img:Event1,
      title:"Wordpress Day Long Bootcamp",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:8,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:9,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:10,
      img:Event4,
      title:"UI/UX Bootcamp - 2020",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:11,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:12,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:13,
      img:Event1,
      title:"Wordpress Day Long Bootcamp",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:14,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:15,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:16,
      img:Event4,
      title:"UI/UX Bootcamp - 2020",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:17,
      img:Event2,
      title:"Graphic Design Seminar for 3 Days",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    {
      id:18,
      img:Event3,
      title:"laravel Framework Workshop (Day Long)",
      locationIcon:Festivelocation,
      address: "7382 Shirley Garden Avenue North-South Ozone Park,",
      phone:Festivephone,
      number:"+880 1678965412 +880 1632145678"
    },
    
  ]

  // upcoming variable end


  // gallery variable start
  let galleryTitle = {
      subheading: "photos of event",
      heading: "Event Gallery"
  }

  let galleryImg = [
    { id:1,
      img:Gallery1
    },
    { id:2,
      img:Gallery2
    },
    { id:3,
      img:Gallery3
    },
    { id:4,
      img:Gallery4
    },
    { id:5,
      img:Gallery5
    },
    { id:6,
      img:Gallery6
    },
    { id:7,
      img:Gallery7
    },
    { id:8,
      img:Gallery8
    },
    { id:9,
      img:Gallery9
    },
    { id:10,
      img:Gallery10
    },
    { id:11,
      img:Gallery11
    },
    { id:12,
      img:Gallery12
    },

  ]
  // gallery variable end

  // event variable start

  let feedbackTitle={
    subheading:"positive reviews",
    heading: "Events Feedback"
  }

  let feedback= [
    {
      id:1,
      details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dosmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img:Feedback1,
      icon:"fa fa-star",
      name:"Jonathon Reverse",
      designation: "Event Sponsor",

    },
    {
      id:2,
      details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dosmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img:Feedback2,
      icon:"fa fa-star",
      name:"Jerinno Lopez",
      designation: "Event Sponsor",

    },
    {
      id:3,
      details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dosmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img:Feedback1,
      icon:"fa fa-star",
      name:"Jonathon Reverse",
      designation: "Event Sponsor",
    },
  ]


  // event variable end


  // pricing part variable start


  let pricingTitle = {
    subheading:"entry pass",
    heading: "Pricing & Get Ticket"
  }

  let pricingPlane = [
    {
      id:1,
      name:"Regular Plan",
      price:"$29.99",
      facility: ["A+ Class Seat","Free WiFi","Unlimited Coffee","Lunch","Workshop","Stationary","X","X"]
    },
    {
      id:2,
      name:"Premium Plan",
      price:"$59.99",
      facility: ["A+ Class Seat","Free WiFi","Unlimited Coffee","Lunch","Workshop","Stationary","X","X"]
    },
    {
      id:3,
      name:"Platinum Plan",
      price:"$99.99",
      facility: ["A+ Class Seat","Free WiFi","Unlimited Coffee","Lunch","Workshop","Stationary","X","X"]
    }
  ]

  let selectplan = [  
    {
      id:1,
      plan:"Plan1"
    },
    {
      id:2,
      plan:"Plan2"
    },
    {
      id:3,
      plan:"Plan3"
    },
    {
      id:4,
      plan:"Plan4"
    },
    {
      id:5,
      plan:"Plan5"
    },
    {
      id:6,
      plan:"Plan6"
    },
  ]

  // pricing part variable end

  // sponsor part variable start
  let sponsorTitle = {
    subheading:"supporters",
    heading: "Our Sponsors"
  }

  let sponsorimg = [
    {
      id:1,
      img:Sponsor1
    },
    {
      id:2,
      img:Sponsor2
    },
    {
      id:3,
      img:Sponsor3
    },
    {
      id:4,
      img:Sponsor4
    },
    {
      id:5,
      img:Sponsor5
    },
    {
      id:6,
      img:Sponsor6
    },
    {
      id:7,
      img:Sponsor7
    },
    {
      id:8,
      img:Sponsor8
    },
    {
      id:9,
      img:Sponsor9
    },
  ]
  // sponsor part variable end


  // footer part variable start

  let footerbg = {
    backgroundImage: `url(${Footerbg})`,
    backgroundSize: "cover"
  }

  // footer part variable end


  // about page variable start
  let aboutbgimg = {
    backgroundImage: `url(${Aboutbanner})`,
    backgroundSize: "cover"
  }

  // about page variable end


  // sponsor page variable start

  let sponsorname = [
    {
      id:1,
      level: "most precious",
      title:"Title Sponsor",
      img: Sponsorname,
    },
    {
      id:2,
      level: "2nd precious",
      title:"Signature Sponsor",
      img: Sponsorname2,
    },
    {
      id:3,
      level: "micro supporter",
      title:"Golden Sponsorr",
      img: Sponsorname3,
    },
    {
      id:4,
      level: "micro supporter",
      title:"Silver Sponsor",
      img: Sponsorname4,
    },
  ]

  // sponsor page variable end
 

  export{navitem,image,bgimg,bannerText,bannerCountdown,videobtn,festiveimg,festivedate,festivetext,location,shedulebg,speaker,title,upcomingtitle,event,galleryTitle,galleryImg,feedback,feedbackTitle,pricingTitle,pricingPlane,selectplan,sponsorTitle,sponsorimg,footerbg,aboutbgimg,sponsorname}