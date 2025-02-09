import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
const About = () => {
  return (
    <div>
      <Navbar/>
      <section className="text-gray-600 body-font">
      <div className="text-center h-[450px] bg-purple-500 text-white  p-16  bg-cover bg-center" style={{ backgroundImage: 'url(/image/aboutprofile.png)' }}>
      <h2 className="font-bold text-5xl p-16 pt-24 ">About</h2>
     </div>
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <h2 className='font-bold text-5xl text-gray-950 flex justify-center'>Learn More About Who We Are</h2>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold title-font mt-4 text-black text-lg">
              Neha Ayaz
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4" />
            <p className="text-base">
            A passionate traveler exploring the world and embracing diverse cultures.



 
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
         Neha Ayaz is a passionate world traveler who has explored over 40 countries. Her journey is fueled by a deep curiosity to experience diverse cultures and connect with people around the globe. Through her blogs and social media, Neha shares her travel stories, challenges, and cultural insights. Beyond sightseeing, she actively participates in volunteer work and promotes sustainable tourism. Her adventures inspire others to embrace travel with an open heart and explore the world beyond their comfort zones.   
          </p>
          
        </div>
      </div>
    </div>
  </div>

{/*Our team Section */}

  
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl font-bold title-font mb-4 text-gray-900">
        Our Team
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Meet the passionate explorers behind the journey. Each of us brings a unique skill set and perspective to our shared love of travel, creating unforgettable experiences around the world. Together, we embrace every adventure with curiosity, dedication, and a commitment to exploring new horizons.
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t1.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            James Anderson
            </h2>
            <p className="text-gray-500">Founder & Lead Explorer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t3.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            Emily Johnson
            </h2>
            <p className="text-gray-500">Expedition Planner</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t2.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            Michael Smith
            </h2>
            <p className="text-gray-500">Cultural Ambassador</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t2.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Olivia Davis
            </h2>
            <p className="text-gray-500">Travel Photographer
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t1.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            William Brown 
            </h2>
            <p className="text-gray-500">Digital Content Creator</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t3.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            Sophia Wilson

            </h2>
            <p className="text-gray-500">Logistics & Operations Coordinator
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t3.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            John Harris
            </h2>
            <p className="text-gray-500">Adventure Coordinator</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t2.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p className="text-gray-500">Social Media Strategist</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/t1.png"
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Rodrigo Monchi
            </h2>
            <p className="text-gray-500">Travel Writer</p>
          </div>
        </div>
      </div>
    </div>

</section>
<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-green-600">example@email.com</a>
          <p className="leading-normal my-5 text-green-600">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-green-600">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-green-600">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-green-600">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
<Footer/>
    </div>
  )
}

export default About
