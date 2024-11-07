
"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '/public/style/CraeerStyle.css';
 import Image from 'next/image';

const Career = () => {
  
    useEffect(() => {
      const options = {}; 
      const backdropValue = options.backdrop || false; 
      
      const modalElement = document.getElementById('exampleModal1');
      if (modalElement) {
        require('bootstrap/dist/js/bootstrap.bundle.min.js'); }
  }, []);
  
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);
  
  
    const handleDragEnter = () => setDragging(true);
    const handleDragLeave = () => setDragging(false);
    const handleDrop = (e) => {
      e.preventDefault();
      setDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        setFile(e.dataTransfer.files[0]);
      }
    };
  

    const handleFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
    };
  
  
  
  
  return(

<div className='container fluid CarCon '>
<div className='row CarRow1'>
<div className='col-lg-3 col-md-3 col-3'></div>
<div className='col-lg-6 col-md-6 col-12'>

<Image src="/images/Rectangle.png" className="CarHeRect" alt='none' width={100} height={100} />

<h1 className='Carheading' >Work With Us</h1>


</div>
<div className='col-lg-3 col-md-3 col-3'></div>




</div>

<div className='row CarRow2 '>
  
<div className='col-lg-4 col-md-6 col-12'>

  <div className="ImgDiv ImgDiv1a">
  <Image src="/images/WorkWithUsImg.png" className="image" alt="Image" width={364} height={537} />
    
    <div className="EditCont">
    <p className='Headings'>  Backend Developer     <span className='tech'><Image src="/images/Web Development.png" className="wD" alt="none"  width={16} height={16}/> Tech & Develop
    </span></p>
 <p className='textCont' > 
 Join us if you are an expert in crafting powerful server-side solutions for our client's experiences.
 </p>

 
 <button type="button" className="btn btn-md btnappl" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Apply Now
</button>

 
    </div>

    </div>




    </div>


    <div className='col-lg-4 col-md-6 col-12'>
    <Image src="/images/Vector7.png" className='Vector7' alt='none' height={64} width={64} />
<div className="ImgDiv ImgDiv1b">
<Image src="/images/WorkWithUsImg2.png" className="image" alt="Image" width={364} height={537} />
  
  <div className="EditCont">
  <p className='Headings'>  Full Stack Developer     <span className='tech'><Image src="/images/Web Development.png" className="wD" alt="none"  width={16} height={16}/> Tech & Develop
  </span></p>
<p className='textCont' > 
Versatile Full Stack Developer creating seamless digital experiences are encouraged to apply.
</p>


<button type="button" className="btn btn-md btnappl" data-bs-toggle="modal" data-bs-target="#exampleModal1">
Apply Now
</button>


  </div>

  </div>




  </div>





  <div className='col-lg-4 col-md-6 col-12'>
  <Image src="/images/Group33.png" className='StyRec' alt='kkk' width={150} height={150} />
<div className="ImgDiv ImgDiv1c">
<Image src="/images/WorkWithUsImg3.png" className="image" alt="Image" width={364} height={537} />
  
  <div className="EditCont">
  <p className='Headings'>  Front-End Developer     <span className='tech'><Image src="/images/Web Development.png" className="wD" alt="none"  width={16} height={16}/> Tech & Develop
  </span></p>
<p className='textCont' > 
Join our team of digital innovators, shaping dynamic and responsive web designs to elevate user experiences.

</p>


<button type="button" className="btn btn-md btnappl" data-bs-toggle="modal" data-bs-target="#exampleModal1">
Apply Now
</button>


  </div>

  </div>




  </div>







    

<div className='col-lg-g-2 md-2 col-2'></div>





<div className='col-lg-4 col-md-6 col-12'>

  <div className="ImgDiv ImgDiv2">
  <Image src="/images/WorkWithUsImg4.png" className="image" alt="Image" width={364} height={537} />
    
    <div className="EditCont">
    <p className='Headings'>  Business<br />  Development Assoc       <span className='tech tech2'><Image src="/images/Web Development.png" className="wD" alt="none"  width={16} height={16}/> Sales & Market  </span></p>
 <p className='textCont textCont2' > 
 Jour team of digital innovators,
 shaping dynamic and responsive web designs to elevate user experiences.
 
 </p>

 
 <button type="button" className="btn btn-md btnappl btnappl1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Apply Now
</button>

 
    </div>

    </div>




    </div>







    <div className='col-lg-4 col-md-6 col-12'>

<div className="ImgDiv ImgDiv2 ">
<Image src="/images/WorkWithUsImg5.png" className="image" alt="Image" width={364} height={537} />
  
  <div className="EditCont">
  <p className='Headings'>  Lead Generation <br /> Executive   <span className='tech tech2'><Image src="/images/Web Development.png" className="wD" alt="none"  width={16} height={16}/> Sales & Market  </span></p>
<p className='textCont textCont2' > 
Fuel our success by driving strategic lead generation efforts. Join the BytiBits team for your growth and excellence.
</p>

<button type="button" className="btn btn-md btnappl btnappl1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Apply Now
</button>

  </div>


  </div>




  </div>


<div className='col-lg-2 md-2 col-2'></div>


    </div>


    <div className="modal fade SideModel" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Apply for Position</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

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
      </div>






    </div>


  )
  ;
}

export default Career;




