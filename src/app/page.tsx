import CommentSection from '@/app/component/CommentSection';
import Footer from '@/app/component/Footer';
import Navbar from '@/app/component/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function Home() {
  
  return (
    <>
    <Navbar/>
     {/*} Hero Section=================================*/}
    {/**hero section */}
  <div className="text-center h-[450px] bg-purple-500 text-white p-8 md:p-16 bg-cover bg-center" style={{ backgroundImage: 'url(/image/heropic1.png)' }}>
  <h3 className="font-sans text-[18px] sm:text-[20px] md:text-[22px] text-white p-4">
    This is a travel blog about beautiful hidden destinations around the world.
  </h3>
  <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl p-4 pt-5">
    Explore, Dream, Discover:
  </h2>
  <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl p-4 pt-3">
    A Traveller's Journey
  </h2>
  <Link href="/Destination">
    <div className="pt-6 md:pt-10">
      <button className="h-[45px] sm:h-[50px] w-[130px] sm:w-[150px] bg-green-500 text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold shadow-md hover:bg-green-700">
        See Blogs
      </button>
    </div>
  </Link>
</div>

{/*commentsection */}
<CommentSection/>
  {/*Footer*/}
<Footer/>
   </>    
  );
  }