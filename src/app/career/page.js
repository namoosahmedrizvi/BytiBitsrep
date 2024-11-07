"use client"
import react from 'react';

import React, { useState,useEffect } from 'react';


import '@/app/career/careerStyle.css'
import Image from 'next/image';
import Link from 'next/link';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons';









const Career = () => {
  useEffect(() => {
    const options = {}; 
    const backdropValue = options.backdrop || false; 
    
    const modalElement = document.getElementById('exampleModal1');
    if (modalElement) {
      require('bootstrap/dist/js/bootstrap.bundle.min.js'); }
}, []); // Empty dependency array to run once after mount

  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Handle drag events
  const handleDragEnter = () => setDragging(true);
  const handleDragLeave = () => setDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };




  return (

<div className='container-fluid careerCon '>

<div className='row careerBan1'>
<Image src="/images/CareerBan.png" className='CareerBanImg' alt='CareerBanImg' width={1000} height={540} />
<div className=' BannerSet'>

<p className='headBan1'>
Explore Limitless Possibilities


</p>

<p className='textBan1'>

LET'S TURN YOUR IDEAS INTO DIGITAL BRILLIANCE!

</p>

<Link href="mailto:bilaltariq6@gmail.com"><button className='btn btn-lg btnBan1'>Reach Out To Us</button></Link>


</div>


</div>



<div className='careerBan2'>
  <div className='row'>
<h1 className='CarBAnHeading'>Work With <span className='us'> Us </span></h1>

<div className='col-lg-4 col-md-6 col-12'>
<div className=' cardBan2 shadow-lg'>
<h3 className=' cardTBan2'>BackEnd Developer</h3>
<hr />

<h5 className='sub-title subTBan2'>Tech & Develop</h5>
<div className='card-body cardBBan2'>


<p className='card-text cardTexBan2'>
Join us if you are an expert in crafting powerful server-side solutions for our client's experience


</p>


 <button  className=" btn btn-lg btnCBan2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Apply Now
</button>


</div>



</div>



</div>

<div className='col-lg-4 col-md-6 col-12'>
<div className=' cardBan2 shadow-lg'>
<h3 className=' cardTBan2'>Full Stack Developer</h3>
<hr />

<h5 className='sub-title subTBan2'>Tech & Develop</h5>
<div className='card-body cardBBan2'>


<p className='card-text cardTexBan2'>
Versatile Full Stack Developer creating seamless digital experiences are encouraged to apply.


</p>

<button type="button" className="btn btn-primary btn btn-lg btnCBan2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Apply Now
</button>


</div>



</div>



</div>


<div className='col-lg-4 col-md-12 col-12'>
<div className=' cardBan2 shadow-lg'>
<h3 className=' cardTBan2'>Front End Developer</h3>
<hr />

<h5 className='sub-title subTBan2'>Tech & Develop</h5>
<div className='card-body cardBBan2'>


<p className='card-text cardTexBan2'>
Join our team of digital innovators, shaping dynamic and responsive web designs to elevate user experiences.


</p>
<button type="button" className="btn btn-primary btn btn-lg btnCBan2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Apply Now
</button>


</div>



</div>



</div>

<div className='col-lg-2 col-md-12 col-12'></div>
<div className='col-lg-4 col-md-6 col-12'>
<div className=' cardBan2 cardBan2a shadow-lg'>
<h3 className=' cardTBan2'>Business Development Assoc</h3>
<hr />

<h5 className='sub-title subTBan2'>Sales & Market</h5>
<div className='card-body cardBBan2'>


<p className='card-text cardTexBan2'>
Be a growth catalyst! Join our team, shape success through business partnerships, and be part of greatness.




</p>

<button type="button" className=" btn btn-lg btnCBan2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Apply Now
</button>


</div>



</div>



</div>


<div className='col-lg-4 col-md-6 col-12'>
<div className=' cardBan2 cardBan2a shadow-lg'>
<h3 className=' cardTBan2'>Lead Generation Executive
</h3>
<hr />

<h5 className='sub-title subTBan2'>Sales & Market
</h5>
<div className='card-body cardBBan2'>


<p className='card-text cardTexBan2'>
Fuel our success by driving strategic lead generation efforts. Join the BytiBits team for your growth and excellence.


</p>
 <button type="button" className="btn btn-lg btnCBan2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Apply Now
</button>


</div>



</div>



</div>



<div className='col-lg-2 col-md-12 col-12'></div>




  </div>
  
  </div>
  


<div  className='row carBan3' >
  <div className='headTextCarBan3'>
  <h1 className='headingCarBan3'>Reach Your Professional Goals
  with <span className='bb'> <br />BytiBits </span> </h1>
<p className='textCarBan3'>
BytiBits focuses on practical growth within a supportive environment. Our developers and tech experts are always<br />
improving their skills, from learning to implementation.




</p>
</div>

<div className='col-lg-4 col-md-6 col-12'>

<div className='container'>
<div className="card card1" >
  <Image className="card-img CarCardimg1" src="/images/CarCardimg1.png" alt="Card " width={100} height={100}  />
  
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
  <Image className="card-img card-img-o" src="/images/CarCardimg2.png" alt="Card " width={100} height={100}   />
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
  <Image className="card-img card-img-o" src="/images/CarCardimg3.png" alt="Card " width={100} height={100}  />
  
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
  <Image className="card-img card-img-o" src="/images/CarCardimg4.png" alt="Card " width={100} height={100}  />
  
  
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
  <Image className="card-img card-img-o" src="/images/CarCardimg5.png" alt="Card " width={100} height={100}  />
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
  <Image className="card-img card-img-o" src="/images/CarCardimg6.png" alt="Card " width={100} height={100}  />
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


<div  className='row carBan4' style={{width:"80%"}} >
  <div className='headTextCarBan4'>
  <h1 className='headingCarBan3'>Experience Our Supportive
  
  <br /> <span className='bb'>Environment </span> </h1>
<p className='textCarBan3'>
BytiBits focuses on practical growth within a supportive environment. Our developers and tech experts are always<br />
improving their skills, from learning to implementation.




</p>
</div>

<div className='col-lg-6 col-md-6 col-12'>

<div className='container '>
<div className="cardM card1 CardBan3" >
  <Image className="card-img CarCardimg1" src="/images/CarCardimg7.png" alt="Card " width={100} height={100}   />
  
  <div className="card-body">
    <h5 className="card-title">Inclusive Environment</h5>
    {/* <p className="card-text">We specialize in web design & development, creating impactful websites
       for online success with functional and user-friendly design..</p>
    */}
  </div>
  </div>
<div className="card card2 CardBan3a " >
  {/* <Image className="card-img card-img-w" src={WebDevelopmentW} alt="Card " /> */}
  
  <div className="card-body">
    <h5 className="card-title">Inclusive Environment</h5>
    <p className="card-text">Our culture embraces different perspectives and values each person's growth. We believe in creating opportunities for everyone while appreciating each individual's unique contributions.</p>
   
  </div>
  </div>


  </div>








</div>

<div className='col-lg-6 col-md-6 col-12'>

<div className='container '>
<div className="cardM card1 CardBan3 ">
  <Image className="card-img card-img-o" src="/images/CarCardimg8.png" alt="Card " width={100} height={100}  />
  <div className="card-body">
    <h5 className="card-title">
    Core Values 
    </h5>
    {/* <p className="card-text">We focus on Mobile App Development,
       creating smooth and user-friendly mobile applications using
       the latest technology to drive your digital success.</p> */}
   
  </div>
  </div>
  
<div className="card card2 CardBan3z" >
  {/* <Image className="card-img card-img-w" src={MobileAppW} alt="Card "  /> */}
  <div className="card-body">
    <h5 className="card-title">
    Core Values
    </h5>
    <p className="card-text">We prioritize accountability, empathy, dedication to success, transparency, recognizing effort, and adaptability in every department.</p>
   
  </div>
  </div>
  </div>

</div>



</div>





`
<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Apply for Position</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <Image src="/images/formLogo.png" height={100} width={100} alt='formLogo.png' className='formLogo' />


<h3 className='LTS'>Lead To Success</h3>
<p className='Growth'>Are you an aspiring Marketing <strong>Growth Hacker</strong>  
  looking for an opportunity to take on new challenges
   and advance your career?</p>

              <form>


            
                <h5 className='hModal'>Tell us a bit more about yourself
                </h5>
                <div className="mb-3">
                  
                  <input type="text" className="form-control" id="fName" placeholder='First Name' required />
                </div>

                <div className="mb-3">
                  
                  <input type="text" className="form-control" id="LName" placeholder='Last Name' required />
                </div>
                <div className="mb-3">
                  
                  <input type="email" className="form-control" id="eMail" placeholder='E-Mail' required />
                </div>

                <div className="mb-3">
                  
                  <input type="tel" className="form-control" id="phoneNum" placeholder='Phone' required />
                </div>

            <h5 className='hModal'>Anything else we should know?
            </h5>
                <div className="mb-3">
                 
                  <textarea type="text" cols={50} rows={3} className="form-control" id="phone" required />
                </div>
<div className='my-3'>

<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />



Compamny Website
</div>
<div className='my-3'>
<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Compamny Employee
</div>
<div className='my-3'>
<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Linkdin
</div>
<div className='my-3'>
<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Facebook
</div>
<div className='my-3'>

<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Twitter  
</div>
 
<div className='my-3'>
<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Instagram 
</div>
 
<div className='my-3'>
<input type="checkBox" className="CheckBox" id="phoneNum mt-3" />
Others
</div>
 






                
                
                
                <div className="my-3">

                  <h5 className='hModal'>If a current employee at (company) referred you, please list his/her name
                  </h5>

                  <input type="text" className="form-control" id="empName" placeholder='Employee Name' required />
                </div>

                {/* File Drag-and-Drop and Upload */}
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  style={{
                    border: dragging ? '2px dashed #007bff' : '2px dashed #ddd',
                    borderRadius: '10px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    marginBottom: '15px',
                    backgroundColor: dragging ? '#f0f8ff' : '#ffffff',
                  }}
                >
                  {file ? (
                    <p>{file.name} uploaded</p>
                  ) : (
                    <p>Drag and drop a file here, or click to upload</p>
                  )}
                  <input
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="fileUpload"
                  />
                  <label htmlFor="fileUpload" style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>
                    Select a file from your device
                  </label>
                </div>

               
                <button type="submit" className="btn btn-lg btn-dark w-100 mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>`




</div>





  );
}

export default Career;








