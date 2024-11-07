"use client"
import react from 'react';


import Link from 'next/link';

import '/public/style/contactUsStyle.css';
import Image from 'next/image';
const ContactUs = () => {
  




  return (


<div className='container-fluid connctWithUsCf' id='Contact' >
<div className=' row areyouready'>
<div className='col-12'>
  <div  className='Vector8'>
  <Image src="/images/Vector8.png" className="Vector8" alt='Vector8' width={300} height={300} />

  </div>
<div className='row maindiv'>
<div className='col-lg-6 col-md-6 col-12'>

<Image src="/images/PatternAYR.png" className="patternAYR" alt='patternAYR' width={500} height={700} />
 
</div>

<div className='col-lg-6 col-md-6 col-12'>
<div className='text  setlled'>
<h1 className='ReadyHead'>
ARE YOU READY?
</h1>
<p className='ayrgraph'>
Connect With Us ToBuild Or Improve Your  <span className='digitspan'>  Digital Product</span>

<Link href="mailto:bilaltariq06@gmail.com"  aria-current="page"><button className='btn btn-lg btn-dark d-flex ReBtn2'>Reach Out</button></Link>

</p>

</div>
</div>
  
</div>

</div>


-
</div>
<div className='row grouprow'>


<Image src="/images/DoubleRect.png" className="DoubleRect1" alt='DoubleRect' width={400} height={400} />
</div>

</div>
  );
}

export default ContactUs;
