import React from 'react'
import ProfPic from './profile pic.jpg'
import pic from './Digital Cell--V.jpg'
import classes from './style.module.css'
import neelamMam from './neelam.jpg'
import vivek from '../../images/vivek.jpg'
import neesham from '../../images/neesham.jpg'
import prajwal from '../../images/prajwal_2.jpg'
import Background from '../../images/digitalcell.jpg'
import Err from '../../images/error.png'
import image from '../../images/UCCDA_wb (1).png'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import MainFooter from '../../components/footer/MainFooter'
const AboutPage = () => {
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
    subHeading: 'About University Computer Center Digital Affairs Cell',
    heading: 'UCC & DA',
    error: Err,
  }
    return (
        <React.Fragment>
             {/* <MainNav_2 /> */}
             <Navbar name={navitem} logo={image}/>
             <Banner
                bg={bgimg}
                text={bannerText}
             />
        <div   >
            
             <div>
    {/* <div className={classes.wrapper}>
        <input type="checkbox" id="btnn" className={classes.btnn} hidden />
        <label for="btnn" className={classes.menu_btn}>
          <i className="fa fa-bars"></i>
        
        </label>
      
    </div> */}
    {/* <section className={classes.start}>
        <div className={classes.logo}></div>
        <div className={classes.title}>
            <h1>UCC & DA</h1>
            <h2><span className={classes.change_content} ></span></h2>
        </div>
        <div className={classes.button}>
            <a href="#" className={classes.btn}>ABOUT US</a>
            <a href="#" className={classes.btn}>CONTACT US</a>
        </div>
    </section> */}
    <section className={classes.about}>
        <div  className={classes.about_section}>
       
            {/* <div className="grp_image"  >
                <img src={pic} alt="grpimg" height="50%" width="100%"  />
            </div> */}
            <div className={classes.inner_container}>
                <h1>About Us</h1>
                <p className={classes.text}>

Digital India Cell was incepted in July 2015 which aims to conduct Digital India Events at the University level and works as a link between Govt. initiatives and the University. It also works to aware students and staff about the Govt. Digital Payment systems, Apps and other Digital Initiatives is also the task of this cell.<br/>

The objective of digital India cell are :<br/>

To implement Nine Pillars of Digital India To enhance Digital Learning by using Govt. Platforms.<br/>

To implement NAD (National Academic

Depository)<br/>

To implement Digital locker scheme for students/staff.<br/>

To familiarize students/staff about Digital

Payment systems<br/>

To conduct Digital Literacy Programs To consult services provided by Common service centre-delivery arm Skills initiatives and employment

opportunities<br/>

To implement various schemes/facilities provided by UGC/AICTE/MHRD/other Govt. bodies in the University.<br/>

To implement AICTE Mandate <br/>

<br/>


We at UCC&DA actively organize many technical events, workshops and- competitions like Digifiesta, Digiweek, chess tournament, Coding contests, workshops on Designing, loT, ML, AI etc that provide students with the opportunity to polish their skills and enhance their knowledge apart from what they normally get in the curriculum, especially in the current situation of Covid where we are undergoing the transition from offline to online mode and Students have plently of time to enhance their skills. Along with this we also organise awareness drives for students of our university regarding Govt. Digital Payment systems, Apps and other Digital initiatives of our Government.



                </p>
                
            </div>
        </div>
    </section>
    <section className={classes.teacher_coordinators}>
        <div className={classes.team_section}>
            <h1>Cell Coordinator</h1>
            <span className={classes.border}></span>
        <div className={classes.ps}>
            <a href="#1"><img src={neelamMam} alt="" /></a>
            {/* <a href="#p2"><img src={ProfPic} alt="" /></a>
            <a href="#p3"><img src={ProfPic} alt="" /></a> */}
        </div>
        <div className={classes.section} id="p1">
            <span className={classes.name}  > Dr. Neelam Duhan</span>
            <span className={classes.name} style={{fontSize:'15px',fontWeight:'lighter'}} > Director UCC & DA</span>
            <span className={classes.border}></span>
            <p>- work experience of 16 years <br/>  
- published more than 80 research papers in reputed journals and conferences. <br/>
- efficiently handling the responsibilities of Nodal Officer Academics in TEQIP-III and Nodal Officer, National Test Centre at University level. <br/>
- awarded three times by NPTEL-SWAYAM for her contribution as efficient SPOC of the University <br/>
- successfully establishED 13 Digital Classrooms in the University through MHRD funding <br/>
- She with her team has  successfully developed  DLMS  Portal during this COVID time .
</p>
        </div>
        {/* <div className={classes.section} id="p2">
            <span className={classes.name}> professor b</span>
            <span className={classes.border}></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className={classes.section} id="p3">
            <span className={classes.name}> professor c</span>
            <span className={classes.border}></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div> */}
        </div>
    </section>
    <section className={classes.developers}>
        <div className={classes.team_title}> <h1>Developing Team</h1></div>
        <div className={classes.card_container}>
            <div className={classes.card}>
                <img src={vivek} alt="John" style={{width:'100%',height:'230px'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >1</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>Vivek Aggarwal</p>
                <p style={{color:'black',marginBottom:'0'}} >JC Bose University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={prajwal} alt="John" style={{width:'100%',height:'230px'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >2</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>Prajwal Batra</p>
                <p style={{color:'black',marginBottom:'0'}} >JC Bose University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
            <div className={classes.card}>
                <img src={neesham} alt="John" style={{width:'100%',height:'230px'}} />
                <h1 style={{color:'black',marginBottom:'0'}} >3</h1>
                <p style={{color:'black',marginBottom:'0'}} className={classes.title_card}>Neesham</p>
                <p style={{color:'black',marginBottom:'0'}} >JC Bose University</p>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <p><button className={classes.btncard} >Contact</button></p>
            </div>
          
           
        </div>
    </section>
    <MainFooter />
   </div>
        </div>
        </React.Fragment>
    )
}

export default AboutPage
