import React from 'react'
import ucclogo from '../../images/UCCDA_wb (1).png'
import univlogo from '../../images/logo2.png'
const ContentSection = () => {
    return (
        <div style={{backgroundColor:'#5F6A75'}}>
        <div className="container" style={{paddingTop:'50px',backgroundColor:'#5F6A75',color:'white'}} >
  <h1 className="text-center">What is DigiFiesta ?</h1>

  {/* <!--  image left  --> */}
  <div className="row" style={{padding:'30px'}} >
    <div className="col-md-6" style={{marginTop:'30px',marginBottom:'30px'}} >

      <img src="https://media.istockphoto.com/vectors/ebook-and-electronic-library-concept-with-small-characters-people-vector-id1164633841?k=6&m=1164633841&s=612x612&w=0&h=4JKlmevYwTk2vhFvVWGfRNHa5fbPggw57-AcytJxOzU=" alt="" className="w-100" />
    </div>
    {/* <!-- /.col-md-6 --> */}
    <div className="col-md-6">

      <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3"  style={{textAlign:'justify'}}>A Digital Fair</h1>
          <p className="lead"  style={{textAlign:'justify'}}>A Techno-Digital fair full, workshops, 8+ different exciting competitions and learning games
            <br /><br />
            <a href="https://fb.watch/6hCKJqvm88/" target="_blank" className="">Learn More</a>
          </p>

        </div>
      </div>

    </div>
    {/* <!-- /.col-md-6 --> */}

  </div>
  {/* <!-- /.row --> */}
  <hr/>
  <br/><br/>
  <h1 className="text-center">Who Organises this Fest ?</h1>
  {/* <!--  image right  --> */}
   <br/> 
  <div className="row" style={{padding:'30px'}}  >
    {/* <div className="col-md-6 ">

      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Imac_alu.png" alt="" className="w-100" />
    </div> */}
    {/* <!-- /.col-md-6 --> */}
    <div  id="about" className="col-md-6 ">

      <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3" style={{textAlign:'justify'}} >University Computer Center & Digital Affairs Cell</h1>
          <p className="lead" style={{textAlign:'justify'}}> DigiFiesta is Organized by UCCDAC, an Renowned cell of JC Bose University of Science and Technology, YMCA Faridabad
            <br /><br />
            <a href="" className="">Learn More</a>
          </p>

        </div>
      </div>

    </div>
    <div className="col-md-6 ">

     <img src={ucclogo}  alt="" className="w-50"   />
     </div>
    
    {/* <!-- /.col-md-6 --> */}

  </div>
  {/* <!-- /.row --> */}
  {/* <!--  image left  --> */}
  <div className="row" style={{padding:'30px',backgroundColor:'#7D7C7F'}} >
    <h1>About The University</h1><br/><br/><br/><br/>
    <div className="col-md-5" style={{marginTop:'30px',marginBottom:'30px'}} >

      <img src={univlogo} alt="" className="w-50" />
    </div>
    {/* <!-- /.col-md-6 --> */}
    <div className="col-md-7">

      <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3"  style={{textAlign:'justify'}}>JC Bose University of Science and Technology YMCA, Faridabad</h1>
          <p className="lead"  style={{textAlign:'justify'}}>JC BOSE University of Science and Technology (YMCA UST) is earlier known as YMCA University of Science and Technology. JC BOSE University of Science and Technology (YMCA UST) was established in 1969. YMCA UST has been recognized by the University Grants Commission. It is located in Faridabad, Haryana. YMCA UST has been approved by AICTE. It has been accredited by NAAC.  YMCA UST as a joint venture of the National Council Of YMCAs of India, Govt. of Haryana, and the Central Agencies for Development Aid, Bonn, Germany. It started as an Indo-German project aiming to impart technical education to India on a German pattern. YMCA UST offers various undergraduate and post-graduate programmes. The Admissions at YMCA UST to those courses are conducted every year.  “J. C. Bose University of Science and Technology, YMCA, Faridabad aspires to be a nationally and internationally acclaimed leader in technical and higher education in all spheres which transforms the life of students through the integration of teaching, research and character building.”
            <br /><br />
            <a href="https://jcboseust.ac.in/" target="_blank" className="">Learn More</a>
          </p>

        </div>
      </div>

    </div>
    {/* <!-- /.col-md-6 --> */}

  </div>
  {/* <!-- /.row --> */}

</div>
</div>
    )
}

export default ContentSection
