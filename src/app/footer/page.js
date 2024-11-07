"use client";
import React from 'react';
import '/public/style/footerStyle.css'
import Image from 'next/image';
import Link from 'next/link';



const footer = () => {
  return (
<div className="container-fluid " id='ContactUs' >
<div className='row'>

<div className='col-lg-1 col-md-12 col-12'></div>
<div className='col-lg-3 col-md-12 col-12'>
<div className='mainLogo'>
<Link href="/#Home"  aria-current="page"> <Image src='/images/logoFooter.png' alt='Logobb' className='Logobb' width={200} height={200} /></Link>

<div className='textF'>
<li className='pF'>
BytiBits focuses on value-based upscaling, ensuring clients' 
success from learning to implementation.

</li>

</div>
</div>

</div>
<ul className='col-lg-2 col-md-6 col-12  Set'>

<li className=' heads'>Quick Links</li> <br />
 <Link href="/#Home"  aria-current="page" className='links'> <li className='p p2'>Home</li> </Link>
 <Link href="/#About"  aria-current="page" className='links'> <li className='p p2'>About</li> </Link>
 <Link href="/#Portfolio" aria-current="page" className='links'> <li className='p p2'>Portfolio</li> </Link>
 <Link href="/#Career"  aria-current="page" className='links'> <li className='p p2'>Career</li></Link>
 <Link href="/#Services"  aria-current="page" className='links'> <li className='p p2'>Servies</li> </Link>



</ul>
<ul className='col-lg-2 col-md-6 col-6  Set' >

<li className='heads'> Head Office</li><br />

<li className='p loc'>337G- Rehmanpure</li>
<li className='p loc'> Lahore 54000,</li>
<li className='p loc'> Pakistan </li>
<li className='p loc'> Phone Number </li>
<Link href="https://wa.me/+923224846656 //"  className='links'><li className='p loc'> 0322-4846656 </li></Link>
<li className='p loc'> Email </li>
<Link href="mailto:bilaltariq@gmail.com" className='links'><li className='p loc'> bilaltariq6@gmail.com</li></Link>


</ul>
<ul className='col-lg-2 col-md-12 col-12  Set'>
<li className='heads'>Our Socials</li><br />
<div className='SocDiv'>

 <Link href="//facebook.com/Bytibits" className='links'><Image src="/images/facebook.png" className="socialL" alt='socialL' width={100} height={100} /></Link>
 <Link href="//instagram.com/bytibits" className='links'><Image src="/images/instagram.png" className="socialL" alt='socialL' width={100} height={100} /></Link>
 <Link href="https://www.linkedin.com/company/bytibits" className='links'> <Image src="/images/LinkedIn.png" className="socialL" alt='socialL' width={100} height={100} /></Link>

</div>


</ul>
<div className='col-lg-2 col-md-2 col-12'></div>




</div>









</div>

  
  );
};
export default footer;
