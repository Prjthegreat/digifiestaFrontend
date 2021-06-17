import React from 'react'
import ucclogo from '../../images/UCCDA_wb (1).png'
const ContentSection = () => {
    return (
        <div style={{backgroundColor:'#5F6A75'}}>
        <div className="container" style={{paddingTop:'50px',backgroundColor:'#5F6A75',color:'white'}} >
  <h1 className="text-center">What is DigiFiesta ?</h1>

  {/* <!--  image left  --> */}
  <div className="row" style={{textAlign:'justify'}} >
    <div className="col-md-6" style={{marginTop:'30px',marginBottom:'30px'}} >

      <img src="https://media.istockphoto.com/vectors/ebook-and-electronic-library-concept-with-small-characters-people-vector-id1164633841?k=6&m=1164633841&s=612x612&w=0&h=4JKlmevYwTk2vhFvVWGfRNHa5fbPggw57-AcytJxOzU=" alt="" className="w-100" />
    </div>
    {/* <!-- /.col-md-6 --> */}
    <div className="col-md-6">

      <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3">A Digital Fair</h1>
          <p className="lead">A Techno-Digital fair full, workshops, 8+ different exciting competitions and learning games
            <br /><br />
            <a href="" className="">Learn More</a>
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
  <div className="row" style={{textAlign:'justify'}}  >
    {/* <div className="col-md-6 ">

      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Imac_alu.png" alt="" className="w-100" />
    </div> */}
    {/* <!-- /.col-md-6 --> */}
    <div  id="about" className="col-md-6 ">

      <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3" >University Computer Center & Digital Affairs Cell</h1>
          <p className="lead"> DigiFiesta is Organized by UCCDAC, an Renowned cell of JC Bose University of Science and Technology, YMCA Faridabad
            <br /><br />
            <a href="" className="">Learn More</a>
          </p>

        </div>
      </div>

    </div>
    <div className="col-md-6 ">

     <img src={ucclogo} alt="" className="w-100"   />
     </div>
    
    {/* <!-- /.col-md-6 --> */}

  </div>
  {/* <!-- /.row --> */}

</div>
</div>
    )
}

export default ContentSection
