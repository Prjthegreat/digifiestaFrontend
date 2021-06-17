import React,{useState,useEffect} from 'react'
import './PrevEvent.css'
import ImageZoom from 'react-medium-image-zoom'
const PrevEvents = () => {
    // const [arbarray,setArbArray]=useState([])
    const [PageNo,setPageNo]=useState(1)
    const [imagePerPage,setImagePerPage]=useState(3)
    // var pagearray=[]
    const images=[
        { key:'0', link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/01.jpg'},
        {key:'1',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'2',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'3',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'4',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'5',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'6',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'7',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        {key:'8',link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/02.jpg'},
        { key:'9', link:'https://nordicgiant2.github.io/react-nice-resume-page/images/portfolio/01.jpg'},
       
    ]
     const indexofLastImage=PageNo*imagePerPage
     const indexofFirstImage=indexofLastImage-imagePerPage
     const currentImages=images.slice(indexofFirstImage,indexofLastImage)
    
    const nextPageHandler=()=>{
        setPageNo(prevno=>Math.min(prevno+1,Math.ceil(images.length/imagePerPage)))
    }
    const previousPageHandler=()=>{
        setPageNo(prevno=>Math.max(prevno-1,1))
    }
    

    return (
        <section id="gallery" className="main__gallerySection" >
             <h1>Previous year Photos of DigiFiesta : {PageNo} </h1>
          <div className="main_gallery" >
             
              { currentImages.map(image=>(
                 <div className="single_image_section" > 
                  <ImageZoom
                    image={{
                    src: image.link,
                    alt: 'Golden Gate Bridge',
                    className: 'img',
                    style: { width: '350px',height:'250px' }
                    }}
                    zoomImage={{
                    src: image.link,
                    alt: 'Golden Gate Bridge'
                    }}
                />
                   {/* <img src={image.link} alt="image_1" /> */}
                  </div>
              )) }
             
          </div>
          <button onClick={previousPageHandler} className="cstmbtn"  >Previous</button> <button className="cstmbtn" onClick={nextPageHandler}>Next</button>
        </section>
    )
}

export default PrevEvents
