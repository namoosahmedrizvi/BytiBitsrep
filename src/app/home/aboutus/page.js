"use client"
import react from 'react';




import '/public/style/AbouUsStyle.css'
import Image from 'next/image';

import Rectangle from '/public/images/Rectangle.png'
import WtPattren from '/public/images/WtPattren.png'
import Girl from '/public/images/Girl.png'
import Vector6 from '/public/images/Vector6.png'





const AboutUs = () => {
  




  return (


<div className='container-fluid Welcome-Con ' id='About'>

<div className='row  '>

<Image src="/images/Rectangle.png" className='RectangleWt img-fluid' alt='Rectangle 'width={0} height={0}/>
<h1 className='WelcHeading'>Welcome To</h1>
<p className='pioneering'>Pioneering. Digitizing . Visionary</p>
</div>

<div className='row dflex Settings'>

<Image src="/images/WtPattren.png" className='img-fluid  WtPattren' alt='WtPattren' width={200} height={300}/>
<Image src="/images/Rectangle.png" className='img-fluid  Rectangle2' alt='Rectangle' width={0} height={0} />
<Image src={Vector6} className='img-fluid  Vector6' alt='Vector6' />





<div className='teXt'>
<Image src="/images/Girl.png" className='img-fluid  Girl' alt='Girl' width={400} height={1000} />
<div className='texting '>
<p className='headingAll'>

ALL ABOUT

</p>

<p className='peraGraph'>

At BytiBits, we deliver custom client-centric software
 development services, focusing on innovation and timely
  project completion.
  </p>
  <p className='peraGraph peraGraph1'>

Our guiding principle, steeped in excellence, fuels the ,
exponential growth of businesses across diverse sectors.

</p>
<p className='peraGraph peraGraph2'>
Our team crafts IT solutions for improved performance
 and ROI across diverse sectors.
</p>
</div>
</div>



</div>





</div>



  );
}

export default AboutUs;












