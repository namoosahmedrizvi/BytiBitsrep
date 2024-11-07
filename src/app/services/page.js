"use client"
import react from 'react';

import Link from 'next/link';


import '@/app/services/serStyle.css'
import Image from 'next/image';

const Services = () => {
  




  return (

<div className='containe-fluid serBan1' id='Services'>
<div className='BanImgDiv'>
<Image src="/images/serBan.jpg" alt='bannerimg' className='BannerImg' width={1000} height={600} />
</div>

<div className='textSerBan1'>
<div className='row  textBanrow'>

<h1 className='HeadingBan'> Explore Limitless Possibilities</h1>
<p className='TextBan'>LET'S TURN YOUR IDEAS INTO DIGITAL BRILLIANCE!</p>
<Link href='mailto:bilaltariq6@gmail.com'><button className='brn-lg btnBan'>Reach Out To Us</button></Link>




</div>
</div>






<div className='Ban2Ser' style={{backgroundColor:'white'}}>
<div className='row bStM'>
<div className='col-lg-2 col-md-1 col-12'></div>
<div className='col-lg-2 col-md-2 col-12'>
  
  <Image src="/images/ideaImge.png" alt='ideaImge' className='ideaImge' width={1000} height={600} />
</div>

<div className='col-lg-1 col-md-2 col-12 '></div>
<div className='col-lg-4 col-md-4 col-12 '>
<div className='textDiv1'>

<h1 className='BSM'>

Building Solutions That <span className='matter'> 'Matter'</span>


</h1>

<p className='BSMtext text-secondary'>We champion your vision, build custom software solutions, and fuel your business growth every step of the way.</p>

<div className='mainta'>
<div className="clDiv cldiv1">

<h3 className='headinNum'>30+</h3>
<p className='satis'>Satisfied Client</p>


<h3 className='headinNum headNumb'>70+</h3>
<p className='satis'>Tech Professionals</p>



</div>

<div className="clDiv">


<h3 className='headinNum headingNum90'>90%</h3>
<p className='satis'> Client Rentation Rate</p>

<h3 className='headinNum headNumb headingNum5'>5</h3>
<p className='satis'> Days to Hire Talent</p>





</div>
</div>


</div>

</div>

<div className='col-lg-2 col-md-2 col-12'>
<Image src="/images/BriilenceImg.png" alt='BriilenceImg' className='BriilenceImg' width={1000} height={600} />


</div>


</div>
</div>


<div className='row p-5 wOrOw' >
  <div className='col-lg-2 col-md-3 '></div>
  <div className='col-lg-8 col-md-12 col-12'>
<Image src="/images/WoToprect.png" alt='WoToprect' className='WoToprect img-fluid' width={200} height={200} />
<Image src="/images/WeWork.png" alt='WeWork' className='WeWork img-fluid' width={500} height={100} />
</div>
<div className='col-lg-2 col-md-3 '></div>

</div>

<div  className='row service' style={{width:'89%'}}>
<div className='col-lg-4 col-md-6 col-12'>

<div className='container'>
<div className="card card1" >
  <Image className="card-img card-img-o" src="/images/Web Development.png" alt="Card "  width={100} height={100}/>
  
  <div className="card-body">
    <h5 className="card-title">Web Design & Development</h5>
    {/* <p className="card-text">We specialize in web design & development, creating impactful websites
       for online success with functional and user-friendly design..</p>
    */}
  </div>
  </div>
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={WebDevelopmentW} alt="Card " /> */}
  
  <div className="card-body">
    <h5 className="card-title">Web Design & Development</h5>
    <p className="card-text">We specialize in web design & development,
      creating impactful websites for online success with functional and user-friendly design.</p>
   
  </div>
  </div>


  </div>








</div>

<div className='col-lg-4 col-md-6 col-12'>

<div className='container'>
<div className="card card1">
  <Image className="card-img card-img-o" src="/images/MobileApp.png" alt="Card " width={100} height={100}  />
  <div className="card-body">
    <h5 className="card-title">
    Mobile App Develoment  
    </h5>
    {/* <p className="card-text">We focus on Mobile App Development,
       creating smooth and user-friendly mobile applications using
       the latest technology to drive your digital success.</p> */}
   
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={MobileAppW} alt="Card "  /> */}
  <div className="card-body">
    <h5 className="card-title">
     Mobile App Development
    </h5>
    <p className="card-text">We focus on Mobile App Development,
      creating smooth and user-friendly mobile 
       using the latest technology to drive your digital success.</p>
   
  </div>
  </div>
  </div>

</div>


<div className='col-lg-4 col-md-6 col-12'>

<div className='container'>
<div className="card card1" >
  <Image className="card-img card-img-o" src="/images/setting.png" width={100} height={100} alt="Card " />
  
  <div className="card-body">
    <h5 className="card-title">DevOps as Services</h5>
    {/* <p className="card-text">Efficient DevOps solutions for streamlined development, 
      integration, and deployment. Boost your operational excellence with us.</p>
    */}
  </div>
  
</div>
<div className="card card2 " >
  
  {/* <Image className="card-img card-img-w" src={settingW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">DevOps as Services</h5>
    <p className="card-text">Efficient DevOps solutions for streamlined development, integration,
       and deployment. Boost your operational excellence with us.</p>
   
  </div>
  
</div>


</div>



</div>




<div className='col-lg-4 col-md-6 col-12'>
<div className='container'>
<div className="card card1" >
<Image className="card-img card-img-o" src="/images/quality-control.png" width={100} height={100} alt="Card " />


  
  
  <div className="card-body">
    <h5 className="card-title">Software Quality Assurance</h5>
    {/* <p className="card-text">We ensure high-quality software through thorough testing,
      elevating your product's excellence with our SQA expertise.</p> */}
   
  </div>
 
  
</div>
<div className="card card2 " >
{/* <Image className="card-img card-img-w" src={qualityControlw} alt="Card " /> */}
  
  
  <div className="card-body">
    <h5 className="card-title">Software Quality Assurance</h5>
    <p className="card-text">We ensure high-quality software through thorough testing,
      elevating your product's excellence with our SQA expertise.</p>
   
  </div>
 
  
</div>



</div>



</div>


<div className='col-lg-4 col-md-6 col-12'>
<div className='container'>
<div className="card card1" >
<Image className="card-img card-img-o" src="/images/graphic-design.png" width={100} height={100} alt="Card " />


  <div className="card-body">
    <h5 className="card-title">Branding & Design</h5>
    {/* <p className="card-text">We transform ideas into captivating experiences, elevating your brand with our expertise
       in creative design solutions.</p>
    */}
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={graphicW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">Branding & Design</h5>
    <p className="card-text">We transform ideas into captivating experiences, 
      elevating your brand with our expertise in creative design solutions.</p>
   
  </div>
  </div>
  
</div>



</div>


<div className='col-lg-4 col-md-6 col-12'>



<div className='container'>
<div className="card card1" >
<Image className="card-img card-img-o" src="/images/brading-design.png" width={100} height={100} alt="Card " />
  <div className="card-body">
    <h5 className="card-title">Branding & Design</h5>
    {/* <p className="card-text">We transform ideas into captivating experiences, elevating your brand with our expertise
       in creative design solutions.</p>
    */}
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={graphicW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">Branding & Design</h5>
    <p className="card-text">We transform ideas into captivating experiences, 
      elevating your brand with our expertise in creative design solutions.</p>
   
  </div>
  </div>
  
</div>


</div>


</div>

<div className='' style={{backgroundColor:'#F8F9FA',  margin:'10rem auto 5rem auto', padding:'0 0 8rem 0'}}>
  <div className="" style={{width:'92%', margin:'0 auto'}}>
ٍ<div className='row p-5 wOrOw '  >
  <div className='col-lg-2 col-md-3 '></div>
  <div className='col-lg-8 col-md-12 col-12' >
<h1 className='WBB' style={{fontSize:'4rem', fontWeight:'600', textAlign:'center'}}>With BytiBits <span className='YouGet' style={{color:'#ec6608'}}>You Get</span></h1>

<p className='peragraph'style={{fontSize:'1rem', fontWeight:'200', textAlign:'center'}}>We are dedicated to delivering high-quality software solutions that support businesses of all sizes in reaching their
objectives. Experience our commitment to excellence:</p>
</div>
<div className='col-lg-2 col-md-3 '></div>

</div>

<div  className='row service'>
<div className='col-lg-3 col-md-6 col-12'>

<div className='container'>
<div className="card card1" >
 
  <Image src="/images/FBO.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  
  <div className="card-body">
    <h5 className="card-title">Budget-Friendly Optionst</h5>
    {/* <p className="card-text">We specialize in web design & development, creating impactful websites
       for online success with functional and user-friendly design..</p>
    */}
  </div>
  </div>
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={WebDevelopmentW} alt="Card " /> */}
  
  <div className="card-body">
    <h5 className="card-title">Budget-Friendly Optionst</h5>
    <p className="card-text">Get software solutions that fit your budget without compromising quality.</p>
   
  </div>
  </div>


  </div>








</div>

<div className='col-lg-3 col-md-6 col-12'>

<div className='container'>
<div className="card card1">
 
  <Image src="/images/SDT.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  <div className="card-body">
    <h5 className="card-title">
    Skilled Dev Teams  
    </h5>
    {/* <p className="card-text">We focus on Mobile App Development,
       creating smooth and user-friendly mobile applications using
       the latest technology to drive your digital success.</p> */}
   
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={MobileAppW} alt="Card "  /> */}
  <div className="card-body">
    <h5 className="card-title">
    Skilled Dev Teams
    </h5>
    <p className="card-text">We have reliable teams of experts in software development.</p>
   
  </div>
  </div>
  </div>

</div>
<div className='col-lg-3 col-md-6 col-12'>

<div className='container'>
<div className="card card1">
  <Image className="card-img card-img-o" src="/images/FTS.png" alt="Card "  width={100} height={100} />
  <div className="card-body">
    <h5 className="card-title">
    Flexibility to Scale
    </h5>
    {/* <p className="card-text">We focus on Mobile App Development,
       creating smooth and user-friendly mobile applications using
       the latest technology to drive your digital success.</p> */}
   
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={MobileAppW} alt="Card "  /> */}
  <div className="card-body">
    <h5 className="card-title">
    Flexibility to Scale
    </h5>
    <p className="card-text">Efficient team & resource allocation based on project requirements, allowing for flexible scaling of services.</p>
   
  </div>
  </div>
  </div>

</div>


<div className='col-lg-3 col-md-6 col-12'>

<div className='container'>
<div className="card card1" >
  
  <Image src="/images/II.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  
  <div className="card-body">
    <h5 className="card-title">Industry Insight</h5>
    {/* <p className="card-text">Efficient DevOps solutions for streamlined development, 
      integration, and deployment. Boost your operational excellence with us.</p>
    */}
  </div>
  
</div>
<div className="card card2 " >
  
  {/* <Image className="card-img card-img-w" src={settingW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">Industry Insight</h5>
    <p className="card-text">Our experts understand various industries to provide the right solutions.</p>
   
  </div>
  
</div>


</div>



</div>




<div className='col-lg-3 col-md-6 col-12'>
<div className='container'>
<div className="card card1" >
 
  <Image src="/images/ITS.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  
  
  <div className="card-body">
    <h5 className="card-title">Innovative Tech Solutions</h5>
    {/* <p className="card-text">We ensure high-quality software through thorough testing,
      elevating your product's excellence with our SQA expertise.</p> */}
   
  </div>
 
  
</div>
<div className="card card2 " >
{/* <Image className="card-img card-img-w" src={qualityControlw} alt="Card " /> */}
  
  
  <div className="card-body">
    <h5 className="card-title">Innovative Tech Solutions</h5>
    <p className="card-text">Experience modern software solutions using the latest technologies.</p>
   
  </div>
 
  
</div>



</div>



</div>


<div className='col-lg-3 col-md-6 col-12'>
<div className='container'>
<div className="card card1" >

  <Image src="/images/SR.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  <div className="card-body">
    <h5 className="card-title">Speedy Results</h5>
    {/* <p className="card-text">We transform ideas into captivating experiences, elevating your brand with our expertise
       in creative design solutions.</p>
    */}
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={graphicW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">Speedy Results</h5>
    <p className="card-text">We focus on fast engineering to deliver solutions quickly.</p>
   
  </div>
  </div>
  
</div>



</div>


<div className='col-lg-3 col-md-6 col-12'>



<div className='container'>
<div className="card card1" >
  
  <Image src="/images/RD.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  <div className="card-body">
    <h5 className="card-title">99% Reliable Delivery</h5>
    {/* <p className="card-text">We transform ideas into captivating experiences, elevating your brand with our expertise
       in creative design solutions.</p>
    */}
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={graphicW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">99% Reliable Delivery</h5>
    <p className="card-text">We deliver on time, with the flexibility to adjust your team as needed.</p>
   
  </div>
  </div>
  
</div>


</div>


<div className='col-lg-3 col-md-6 col-12'>



<div className='container'>
<div className="card card1" >
 
  <Image src="/images/EOB.png" alt='FBO' className='card-img card-img-o' width={100} height={100} />
  <div className="card-body">
    <h5 className="card-title">Effortless Onboarding</h5>
    {/* <p className="card-text">We transform ideas into captivating experiences, elevating your brand with our expertise
       in creative design solutions.</p>
    */}
  </div>
  </div>
  
<div className="card card2 " >
  {/* <Image className="card-img card-img-w" src={graphicW} alt="Card " /> */}
  <div className="card-body">
    <h5 className="card-title">Effortless Onboarding</h5>
    <p className="card-text">Our simple onboarding process ensures fast understanding and results delivery.</p>
   
  </div>
  </div>
  
</div>


</div>
<div className='row ' style={{ margin:'10rem auto 0 auto',textAlign:'center'}}>

<p className='comm'>Comments
</p>
<h1 className='What'>What Our Clients Says</h1>

</div>
<div className='row comR'>

<div className='col-lg-6 col-md-6 col-12'>
<div className=' comm-card'>
  <Image className="Idpic client" src="/images/Idpic.png" alt="Card "  width={100} height={100} />
  <Image src="/images/star.png" alt='FBO' className='star client' width={100} height={100} />

<h5 className=" client clientn">David M</h5><br />
<p className=' cliente'>@devidm</p> 


<p className='textCard'>Thank you so much for completing these deliverables for Artist Magnet!</p>
</div>


</div>


<div className='col-lg-6 col-md-6 col-12'>
<div className=' comm-card' >

<Image src="/images/Idpic.png" alt='Idpic' className='Idpic client' width={100} height={100} />
<Image src="/images/star.png" alt='star' className='star client ' width={100} height={100} />
<h5 className=" client clientn">Joe W</h5><br />
<p className=' cliente cliente2'>@joew</p> 


<p className='textCard'>Thank you for doing a great job! Looking forward to lots of future projects together!</p>
</div>


</div>


<div className='col-lg-6 col-md-6 col-12'>
<div className=' comm-card comm-carda comm-card-c' >

<Image src="/images/Idpic.png" alt='Idpic' className='Idpic client' width={100} height={100} />
<Image src="/images/star.png" alt='star' className='star client ' width={100} height={100} />
<h5 className=" client clientn">Creative P
</h5><br />
<p className=' cliente'>@creativep</p> 



<p className='textCard'>Very knowledgeable in NodeJS and Electron, will hire again!</p>
</div>


</div>


<div className='col-lg-6 col-md-6 col-12'>
<div className=' comm-card comm-carda'>

<Image src="/images/Idpic.png" alt='Idpic' className='Idpic client' width={100} height={100} />
<Image src="/images/star.png" alt='STar' className='star client' width={100} height={100} />
<h5 className=" client clientn">James W</h5><br />
<p className=' cliente'>@jamesw</p> 



<p className='textCard'>Well done - will work with again in the near future!</p>
</div>


</div>



</div>

</div>

</div>
</div>
<div className='row'>



</div>

</div>
  );
}

export default Services;








