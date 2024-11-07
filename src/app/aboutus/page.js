"use client"
import react from 'react';

import Link from 'next/link';


import '@/app/aboutus/AbouUsStyle.css'
import Image from 'next/image';


import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const AboutUs = () => {
  




  return (


<div className=' Welcome-Con ' id='About'>
  <div className="BanImgDiv">
<Image src="/images/AboutBanner.jpg" className="AboutBanner" alt="AboutBanner" height={300} width={1000} />

<div className='row aboutBanText'>

<h1 className='HeadingBan'> Explore Limitless Possibilities</h1>
<p className='TextBan'>LET'S TURN YOUR IDEAS INTO DIGITAL BRILLIANCE!</p>
<Link href='mailto:bilaltariq6@gmail.com'><button className='btn-lg btnBan'>Reach Out To Us</button></Link>




</div>



  </div>



<div className='color p-5'> 
<div className='row about1' style={{width:'80%',margin:'0 auto'}}> 
{/* <div className='col-lg-2 col-md-2 col-12'></div> */}
<div className='col-lg-7 col-md-6 col-12'>
<div className='helpText'>
<p className='textsm'>TO HELP YOUR COMPANY SCALE</p>
<h2 className='TextHead'>We enable businesses to reach<span className='goal'> their goals</span></h2>
</div>
<Image src="/images/aboutimg1.jpeg" alt='aboutimg1' className='aboutimg1' width={500} height={400} />

</div>
<div className='col-lg-5 col-md-6 col-12'>

<h3 className='subHead'>BytiBits Mission</h3>
<p className='subText'>At BytiBits, our mission is to simplify complex IT solutions and empower innovation for businesses of all sizes and industries. We offer customer-centric digital services and consultations, helping our clients navigate the fast-paced world of emerging challenges and adaptability.</p>

<h3 className='subHead'>BytiBits Core Values</h3>
<p className='subText'>At BytiBits, we believe in being innovative, embracing digital advancements, and adopting a forward-thinking approach. This helps our clients stay ahead in the game and succeed in a constantly evolving landscape.</p>

<h3 className='subHead'>BytiBits Vision</h3>
<p className='subText'>At BytiBits, our goal as a software company is to use smart technology to make data work for you. This saves resources and helps you make better decisions easily.
</p>


</div>



</div>
</div>


<div className='color2 bg-white'>


<div className="row" style={{width:'100%', margin:'0 auto'}}>



<div className="col-lg-6 col-md-7 col-12">
  
<div className='writing'>
<h1 className='ourStory'>Our <span className='St'>Story</span></h1>
<p className='story'>BytiBits began in 2018 with a mission
   to help both big companies and startups develop great products. We value building
    strong relationships with our clients and always aim to deliver timely and high-quality services.
     With the efficiency of a big company and the flexibility of a startup, we offer a one-of-a-kind service.
   We're committed to exceeding our client's expectations and leaving a lasting impression as a success story to remember.</p>


   <Link href='mailto:bilaltariq6@gmail.com'><button className='btn-lg btnBan'>Get in Touch</button></Link>
</div>


</div>
<div className="col-lg-5 col-md-5 col-12">
 
<Image src="/images/aboutimg3.png" alt='aboutimg3' className='aboutimg3' width={200} height={300} />

<Image src="/images/aboutimg2.png" alt='aboutimg3' className='aboutimg2' height={300} width={400} />



</div>


</div>

</div>


ِ<div className='color3'>



<div className='row ban3' style={{ padding: '4rem 2rem 4rem 2rem' }}>

  <div className='col-lg-6 col-md-6 col-12'>
    <Image src="/images/AboutBanner2.png" className='AboutBanner2' alt='AboutBanner2' width={400} height={300} />
  </div>

  <div className='col-lg-6 col-md-6 col-12'>
    <div className='TextBox'>
      <p className='dev'>OUR DEVELOPMENT PROCESS</p>
      <h3 className='pp'>BytiBits, Your Partner in Product <span className='suc'>Success</span></h3>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="collapsed"   style={{border:'none'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h5 className="tabHead"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",fontSize:'1.5rem',backgroundColor:'#000000', border:'none',borderRadius:'50%',}} />   <span className='setT'>Ideation & Evaluation</span></h5>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: 'transparent', border: 'none' }}>
              We specialize in delivering scoping requirements and identifying the ideal resources for your project. Our goal is to give your product a strong foundation by planning, evaluating, and assessing essential features that align with your objectives.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="collapsed"   style={{border:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h5 className="tabHead"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",fontSize:'1.5rem',backgroundColor:'#000000', border:'none',borderRadius:'50%',}} /> <span className='setT'>Product Design</span></h5>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: 'transparent', border: 'none' }}>
              Our team excels in brainstorming engaging user experiences for digital products, addressing real-world problems, and enhancing crucial business metrics through intuitive interfaces.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="collapsed"   style={{border:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <h5 className="tabHead"><FontAwesomeIcon icon={faCircleCheck}  style={{color: "#ffffff",fontSize:'1.5rem',backgroundColor:'#000000', border:'none',borderRadius:'50%',}} /> <span className='setT'>Quality Assurance</span></h5>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: 'transparent', border: 'none' }}>
              BytiBits offers exceptional Quality Assurance services to prevent delays and bugs. Our aim is to help innovators reach their goals by maintaining superior product standards and delivering an outstanding customer experience.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="collapsed"   style={{border:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <h5 className="tabHead"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",fontSize:'1.5rem',backgroundColor:'#000000', border:'none',borderRadius:'50%',}} /><span className='setT'>Support & Maintenance</span></h5>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: 'transparent', border: 'none' }}>
              You can reach our support teams 24/7 for help with any issues. We're here to fix problems quickly and keep your business running smoothly, allowing you to concentrate on growing.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="collapsed"   style={{border:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <h5 className="tabHead"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",fontSize:'1.5rem',backgroundColor:'#000000', border:'none',borderRadius:'50%',}} /><span className='setT'>Scale & Automate</span></h5>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: 'transparent', border: 'none' }}>
              As your business grows, BytiBits is here to refine your existing products with automated solutions. We help you scale your operations to new heights, adapting to the evolving needs of your enterprise.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>
</div>

<div className="ban4 bg-white p-5">
  <div className="container ban4Con">
    <div className="row ban4">

<div className='textBan4'>


<h1 className='headBan4'>


Our Core <span className='val'> Values</span>




</h1>
<p className='textSm4'>

At BytiBits, our core values are the foundation of everything we do.
 They drive our commitment to business development, organizational excellence,
  and personal and professional growth. Let's delve into these values:






</p>



</div>




      <div className="col-12 col-md-6 col-lg-3 ">
      <h2 className='head'>01</h2>
<div className="AboutCard cardban4 shadow-md"  >
  <div className=" card-title">
  <h5 className='card-h'>
  Transparency
    </h5>  
    </div>
  <hr />
  <div className='card-body'>

  We believe in 100% transparency with our clients. 
  This commitment motivates us to deliver incredible
   results, ensuring trust and clarity every step
    of the way.

  </div>
</div>

      </div>
      <div className="col-12 col-md-6 col-lg-3 ">
       
      <h2 className='head'>02</h2>
<div className="AboutCard cardban4 shadow-md"  >
  <div className=" card-title">
  <h5 className='card-h'>
  Open Feedback

    </h5>  
    </div>
  <hr />
  <div className='card-body'>
  This approach boosts workplace productivity and enhances job satisfaction.
   Your feedback is not just welcomed; it's essential to our continuous improvement.

  </div>
</div>


      </div>
      <div className="col-12 col-md-6 col-lg-3 ">

      <h2 className='head'>03</h2>
<div className="AboutCard cardban4 shadow-md"  >
  <div className=" card-title">
  <h5 className='card-h'>
  Customer Satisfaction
    </h5>  
    </div>
  <hr />
  <div className='card-body'>
  We strive for excellence through the continuous delivery of high-quality services.
   Your satisfaction drives us to constantly raise the bar and exceed expectations.
  </div>
</div>


             </div>
      <div className="col-12 col-md-6 col-lg-3">
      <h2 className='head'>04</h2>
<div className="AboutCard cardban4 shadow-md"  >
  <div className=" card-title">
  <h5 className='card-h'>
  Innovation
    </h5>  
    </div>
  <hr />
  <div className='card-body'>
  We encourage new ideas and provide a safe space for their exploration.
  We uplift those who think outside the box, fostering a culture of creativity
   and progress.

  </div>
</div>


      </div>
    </div>
  </div>
</div>






</div>







  );
}

export default AboutUs;












