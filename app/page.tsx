import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Furniture from "./components/prac-mainpg-items";
import Shop from "./components/Shop/page";
export default function Home(){
  return(
    <div className="font-poppins ">
    <Navbar />
    <div
  className="grid grid-cols-1 md:grid-cols-12 "
  style={{ background: "#FBEBB5" }}>
    {/* <div className="md:col-span-1 flex flex-col"></div> */}
  {/* Left Section: Text */}
  <div className="md:col-span-4 flex flex-col justify-center">
    <div className=" md:text-6xl font-semibold ml-6 pl-8 ">
    <div className=" "  >
      Rocket single 
    
    </div>
    <div className=" md:text-6xl font-semibold mb-10 "> 
    seater
    </div>
    <button className="md:text-4xl font-semibold border-b border-black " >
      Shop Now
    </button>
    </div>
  
  </div>

  {/* Right Section: Image */}
  <div className="md:col-span-8 flex justify-end content-end ">
    <img className="content-end"
      src="/images/mainsofa.png"
      alt="Rocket Single Seater Sofa"
      style={{width:"860px", height:"850px"}}
    />
  </div>
</div>
{/* 2nd card
{/*Item 1*/}
<div style={{background:"#FAF4F4"}}>
  <div className="grid grid-cols-1 md:grid-cols-2 font-poppins p-5">
    {/* <!-- Side Table Item --> */}
    <div className="col-span-1 m-3 p-3 text-center" >
      <img src="/images/table1.png" className="items-center"alt="Side Table" style={{width:"590px", height:"340px"}}/>
     <div>
     <h1 className="text-3xl font-semibold text-center ">Side Table</h1>
     <button className=" font-light text-2xl border-b-2 border-black 
       hover:text-gray-500 hover:border-gray-500 mt-3" >View More</button>
      </div> 
     
    </div>
  {/*Item 2*/}
{/* <!-- Side Table Item --> */}
<div className="col-span-1  m-3 p-3">
      <img src="/images/sofa2.png" alt="Cloud Sofa" style={{width:"590px", height:"340px"}}/>
      <div className=" text-center">
      <h1 className="text-3xl font-semibold text-center ">Side Table</h1>
     <button className=" font-light text-2xl border-b-2 border-black 
       hover:text-gray-500 hover:border-gray-500 mt-2" >View More</button>
      </div> 

   </div> 
  
  </div>
</div>
   {/*/3rd Card */}
  <div className=" text-center font-semibold item-center justify-center p-8 m-5">
      <h1 className="text-4xl m-3">
      Top Picks For You
      </h1>
      <h1 className="text-lg m-3"style={{color:"#9F9F9F", }}>
      Find a bright ideal to suit your taste with our great selection of suspension, 
      floor and table lights.
      </h1>
    </div>

<div className="p-4 ">
  
    
<Furniture/>

  </div>
  <div className=" text-center items-center py-20">
    <a href="" className="font-semibold justify-center text-center   hover:text-gray-500
       hover:border-gray-500 border-b-2 border-black" style={{fontSize:"24px"}}>View More</a>
       
       
    </div>



{/*4th Card*/}

  <div style={{background:"#FFF9E5"}} className="grid grid-cols-1 md:grid-cols-12 items-center 
  ">
  <div className="md:col-span-8 flex">
    <img src="images/sofa4.png" alt="Asgaard Sofa" style={{width:"1000px", height:"999"}}/>
    </div>
    <div className="md:col-span-4 text-center p-3">
    <h1 className=" font-poppins font-semibold text-2xl mb-2">
      New Arrivals</h1>
      <h1  className="font-bold mb-9 text-5xl">Asgaard sofa
      </h1>
      <div className="mt-4 p-4">
        <a href="" className="font-semibold justify-center text-center  hover:text-gray-500
       hover:border-gray-500 border border-black p-6 px-16 text-lg" >Order Now</a></div>
      
    </div>
  </div>


{/*5th Section */}
<div>
  <div className="text-center justify-start p-8 m-8 ">
<h1 className="font-semibold md:text-4xl mb-3" >
Our Blogs
</h1>
<h1 className="text-lg" style={{ color:"#9F9F9F"}}>Find a bright ideal to suit your taste with our great 
  selection</h1>

   <div className="grid grid-cols-1 md:grid-cols-12 justify-center gap-4 mt-10 px-7 ">

{/*blog1*/}
    <div className="md:col-span-4 text-center ">
<img src="images/blog1.png" alt="" style={{width:"450px", height:"450px"}} className="p-4 "/>
<h1  className="p-3 text-xl">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 text-2xl" >Read More
       </a>
   

<div className="flex items-center justify-center p-7 space-x-6 text-lg">
  <span className="flex items-center space-x-2">
  <FaRegClock className="w-6 h-6" />
    <span>5 min</span>
    
  </span>
  <span className="flex items-center space-x-2">
    
    <CiCalendar className="w-6 h-6" />
    <span>12th Oct 2022</span>
  </span>
</div>


    </div>
{/*Blog */}
<div className="md:col-span-4 text-center ">
<img src="images/blog2.png" alt="" style={{width:"450px", height:"450px"}} className="p-4"/>
<h1  className="p-3 text-xl">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 text-2xl" >Read More
       </a>

<div className="flex items-center justify-center p-7 space-x-6 text-lg">
  <span className="flex items-center space-x-2">
  <FaRegClock className="w-6 h-6" />
    <span>5 min</span>
    
  </span>
  <span className="flex items-center space-x-2">
    
    <CiCalendar className="w-6 h-6" />
    <span>12th Oct 2022</span>
  </span>
</div>


    </div>

{/*Blog 3*/}
<div className="md:col-span-4 text-center ">
<img src="images/blog3.png" alt="" style={{width:"450px", height:"450px"}} className="p-4"/>
<h1  className="p-3 text-xl">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 text-2xl" >Read More
       </a>
   

<div className="flex items-center justify-center p-7 space-x-6 text-lg">
  <span className="flex items-center space-x-2">
  <FaRegClock className="w-6 h-6" />
    <span>5 min</span>
    
  </span>
  <span className="flex items-center space-x-2">
    
    <CiCalendar className="w-6 h-6" />
    <span>12th Oct 2022</span>
  </span>
</div>


    </div>

  </div>
  </div>

</div>

<div className=" text-center items-center p-4 m-3 mb-4">
    <a href="" className="font-semibold justify-center text-center   hover:text-gray-500
       hover:border-gray-500 border-b-2 border-spacing-8  text-xl border-black" >View All Post</a>
    </div>
{/*5th section */}
<div className="flex flex-col items-center space-y-4 justify-center
bg-[url('/images/cover1.png')] bg-cover bg-center w-full" style={{height:"390px"}}>
  <p className="text-center justify-center pt-20 font-extrabold md:text-6xl">Our Instagram</p>
  <h1 className="text-center font-light md:text-xl">Follow our store on Instagram</h1>
  <button className="text-center font-medium md:text-xl px-20 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
  Follow Us
  </button>
</div>

    <Footer/>
    
    </div>
   
  )}
