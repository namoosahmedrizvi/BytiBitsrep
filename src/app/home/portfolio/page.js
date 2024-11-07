"use client"
import { Suspense, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import '/public/style/portfolioStyle.css';
import Image from 'next/image';






const Portfolio = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 720,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };





//   return (

// <div className='container-fluid'>
//  <div className='container port'>


// <div className='row portRow'>  









// </div>





// </div>

//     <div className="row slider-container PortFolio">
  
//       <h1 className='portHead text-start text-black text-xx-large'>
//         Our 
//         Portfolio
//       </h1>
//       <Image src={portSpring} alt='portSpring' className='portSpring '  />

//       <Slider {...settings}>

//         <div className='cardk'>
//         <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop} alt='...' className='SlImg img-top img-fluid' />
//           </div>
//           <div className='SlideText'>
          
//             <h3 className='EmpName'>
//             Socialbu</h3>
//             <p className='EmpAbout'>
//             SocialBu - An all-in-one social media management & and automation platform that allows
//              users to manage multiple social accounts from one place, respond to incoming messages & and
//               comments, analyze their social media presence, and set dynamic automation.
//             </p>
           
//           </div>
//         </div>
//         </div>

//         <div className='cardk'>
//         <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop3} alt='...' className='SlImg img-top img-fluid' />
//           </div>
//           <div className='SlideText'>
    
//             <h3 className='EmpName'>Lnk Manager</h3>
//             <p className='EmpAbout'>
           

// LinkMngr - A Simple and Easy-To-Use Link Management & Shortening Tool with Link Retargeting,
//  Custom Domain Branded Links, Team Collaboration, and Analytics. It is the quickest way to share
//   your links to increase traffic and brand awareness..
//             </p>
          
//           </div>

//         </div>
//         </div>
//         <div className='cardk'>
//                     <div className='Slide-container'>
//           <div className='Slide-img'>
//             <Image src={laptop2} alt='...' className='SlImg img-top img-fluid' />




//           </div>
//           <div className='SlideText'>
          // <Image src={Ai} alt='AI' className=' img-top img-fluid imgs' />
          //   <Image src={Ai} alt='AI' className=' img-top img-fluid imgs' />
          //   <Image src={chrome} alt='chrome' className=' img-top img-fluid imgs' />
          //   <Image src={Ma} alt='Ma' className=' img-top img-fluid imgs' />
            // <h3 className='EmpName'>ChatFAI</h3>
            // <p className='EmpAbout'>
            // ChatFAI - An AI-powered experience that allows you to chat with your favorite characters from movies,
            //  TV shows, books, history, and more. Whether you want to talk to a fictional character or a historical
            //   figure, ChatFAI makes it possible, and you ’ll feel like you're talking to them in real life.
             
            // </p>

            
          
//           </div>
//         </div>
      

//         </div>

       
//       </Slider>



     
//     </div>
//     <div className='row' style={{height:'5rem'}} ></div>
    
    
    
//     <Image src={lineSpr} alt='line' className='linespr img-fluid'  />
//     <Image src={line} alt='line' className='lineimg img-fluid'  />
  
//    </div>



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
return (

<div className='container-fluid' id='Portfolio'>
  <div className="container slider-container" >

    <h1 className='portHead'>Our <span className='port'>Portfolio </span></h1>

<Image src="/images/portSpring.png" alt='portSpring' className='portSpring' height={100} width={100} />


    <Slider {...settings}>
      <div className='slideGen'>
        <div className='row rowSet'>
        <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src="/images/laptop.png" alt='Img' className='SlImg img-top img-fluid' height={300} width={500} />  

</div>
</div>
<div className='col-lg-6 col md-12 col-12'>
  <div className='TextCont'>
<h3 className='EmpName'>
             Socialbu</h3>
             <p className='EmpAbout'>
             SocialBu - An all-in-one social media management & and automation platform that allows
              users to manage multiple social accounts from one place, respond to incoming messages & and
               comments, analyze their social media presence, and set dynamic automation.
             </p>
             </div>
           
<div className='logos'>
<Image src="/images/webApp.png" alt='webApp' className=' img-top img-fluid imgs' width={100} height={100}/>
<Image src='/images/Ai.png' alt='AI' className=' img-top img-fluid imgs imgSet' width={100} height={100}/>

  <Image src="/images/uiux.png" alt='uiux' className=' img-top img-fluid imgs imgSet ' width={100} height={100}/>
  <Image src='/images/Ma2.png' alt='Ma.png' className=' img-top img-fluid imgs imgSet' width={100} height={100}/>

            
            <Image src="/images/chrome.png" alt='chrome' className=' img-top img-fluid imgs imgSet 'width={100} height={100} />
</div>



</div>

        </div>

      </div>
      <div className='slideGen'>
      <div className='row rowSet'>
      <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src="/images/chatfailap.png" alt='chatFai' className='SlImg img-top img-fluid' width={300} height={500} />  

</div>
</div>

<div className='col-lg-6 col md-12 col-12'>
<div className='TextCont'>
<h3 className='EmpName'>ChatFAI</h3>
            <p className='EmpAbout'>
            ChatFAI - An AI-powered experience that allows you to chat with your favorite characters from movies,
             TV shows, books, history, and more. Whether you want to talk to a fictional character or a historical
              figure, ChatFAI makes it possible, and you ’ll feel like you're talking to them in real life.
             
            </p>



           </div>

<div className='logos'>
<Image src="/images/webApp.png" alt='webApp' className=' img-top img-fluid imgs' width={100} height={100} />
<Image src="/images/Ai.png" alt='AI' className=' img-top img-fluid imgs imgSet' width={100} height={100} />
  <Image src="/images/uiux.png" alt='uiux' className=' img-top img-fluid imgs imgSet ' width={100} height={100} />
  <Image src="/images/Ma2.png" alt='Ma2.png' className=' img-top img-fluid imgs imgSet ' width={100} height={100} />

<Image src="/images/chrome.png" alt='chrome' className=' img-top img-fluid imgs imgSet' width={100} height={100}  />
</div>



</div>

        </div>
      </div>
      <div className='slideGen'>
      <div className='row rowSet'>
      <div className='col-lg-6 col md-12 col-12'>
<div className='SldImg '>
<Image src="/images/lnkmngrlap.png" alt='lnkManger' className='SlImg img-top img-fluid' width={300} height={500} />  

</div>
</div>

<div className='col-lg-6 col md-12 col-12'>

<div className='TextCont'>
<h3 className='EmpName'>Lnk Manager</h3>
            <p className='EmpAbout'>
           

LinkMngr - A Simple and Easy-To-Use Link Management & Shortening Tool with Link Retargeting,
 Custom Domain Branded Links, Team Collaboration, and Analytics. It is the quickest way to share
  your links to increase traffic and brand awareness..
            </p>

</div>

<div className='logos'>
<Image src="/images/webApp.png" alt='webApp' className=' img-top img-fluid imgs' width={100} height={100} />
<Image src="/images/Ai.png" alt='AI' className=' img-top img-fluid imgs imgSet'  width={100} height={100}/>
  <Image src="/images/uiux.png" alt='uiux' className=' img-top img-fluid imgs imgSet ' width={100} height={100} />
  <Image src="/images/Ma2.png" alt='Ma.png' className=' img-top img-fluid imgs imgSet ' width={100} height={100} />
<Image src="/images/chrome.png" alt='chrome' className=' img-top img-fluid imgs imgSet ' width={100} height={100} />
</div>


</div>

        </div>
      </div>
     
    </Slider>
  </div>
  </div>
  
)
}

export default Portfolio;











