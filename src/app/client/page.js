"use client";
import React from 'react';
import Image from 'next/image';
import '/public/style/logoBarStyle.css'
import Link from 'next/link';

import SocialBu from '/public/images/SocialBu.png';
import ChatFai from '/public/images/ChatFai.png';
import LinkMngr from '/public/images/LinkMngr.png';
import teacheasy from '/public/images/teacheasy.png';
import FPC from '/public/images/FPC.png';

const Client = () => {
  return (
<div className='container-fluid LogoMain' id='Client'>


<Link href="https://socialbu.com/"> <Image src="/images/SocialBu.png" alt='SocialBu' className='img-fluid LogoDe  SocialBu' width={100} height={100} /></Link>


<Link href="https://chatfai.com/"><Image src="/images/ChatFai.png" alt='ChatFai' className='img-fluid LogoDe set ChatFai' width={100} height={100} /></Link>

  <Link href="https://app.linkmngr.com/"> <Image src="/images/LinkMngr.png" alt='LinkMngr' className='img-fluid LogoDe set LinkMngr' width={100} height={100} /></Link>

  <Link href="https://teacheasy.ai/"  > <Image src="/images/teacheasy.png" alt='teacheasy' className='img-fluid LogoDe set te' width={100} height={100} /></Link>

<Link href="https://fpc.punjab.gov.pk/"> <Image src="/images/FPC.png" alt='FPC' className='img-fluid LogoDe set FPC' width={100} height={100} /></Link>












</div>

  );}

export default Client;
