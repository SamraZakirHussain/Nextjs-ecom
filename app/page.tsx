import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Furniture from "./components/prac-mainpg-items";
import Shop from "./components/Shop/page";
export default function Home(){
  return(
    <div>
    <Navbar />
    <div
  className="grid grid-cols-1 md:grid-cols-12 "
  style={{ background: "#FBEBB5" }}>
    <div className="md:col-span-1 flex flex-col"></div>
  {/* Left Section: Text */}
  <div className="md:col-span-3 flex flex-col justify-center">
    <div>
    <h1 className=" font-poppins md:text-8xl font-semibold mb-7" style={{fontSize:"64px"}} >
      Rocket single 
    </h1>
    <h1 className="text-left font-poppins md:text-7xl font-semibold mb-10" style={{fontSize:"64px"}}> 
      seater
    </h1>
    <button className="text-left font-semibold border-b border-black " style={{fontSize:"34px"}}>
      Shop Now
    </button>
    </div>
  
  </div>

  {/* Right Section: Image */}
  <div className="md:col-span-8 flex justify-end">
    <img
      src="/images/mainsofa.png"
      alt="Rocket Single Seater Sofa"
      style={{width:"1200px", height:"1220px"}}
    />
  </div>
</div>
{/* 2nd card
{/*Item 1*/}
<div style={{background:"#FAF4F4"}}>
  <div className="grid grid-cols-1 md:grid-cols-2 font-poppins">
    {/* <!-- Side Table Item --> */}
    <div className="col-span-1 text-left " >
      <img src="/images/table1.png" className="items-center"alt="Side Table" style={{width:"800px", height:"570px"}}/>
      <h1 className="text-2xl font-semibold " style={{fontSize:"36px"}}>Side Table</h1>
      <button className=" font-light border-b-2 border-black 
       hover:text-gray-500 hover:border-gray-500 mt-3" style={{fontSize:"24px"}}>View More</button>
    </div>
  {/*Item 2*/}
{/* <!-- Side Table Item --> */}
<div className="col-span-1 ">
      <img src="/images/sofa2.png" alt="Cloud Sofa" style={{width:"800px", height:"540px"}}/>
      <div className="p-3 text-center">
      <h1 className="text-2xl font-semibold " style={{fontSize:"36px"}}>Side Table</h1>
      <button className="font-light border-b-2 border-black mt-3 hover:text-gray-500
       hover:border-gray-500" style={{fontSize:"24px"}}>View More</button>
      </div>

   </div> 
  
  </div>
</div>
   {/*/3rd Card */}
  <div className=" text-center font-semibold item-center justify-center py-10">
      <h1 style={{fontSize:"45px", textIndent:"50"}}>
      Top Picks For You
      </h1>
      <h1 style={{color:"#9F9F9F", fontSize:"20px"}}>
      Find a bright ideal to suit your taste with our great selection of suspension, 
      floor and table lights.
      </h1>
    </div>

<div className=" grid grid-cols-1 md:grid-cols-4 gap-6 font-black font-poppins">
  
    
  {/* <!-- sofa 3 --> */}
   <div className="flex flex-col items-center mt-12" >
      <img src="/images/sofa3.png" alt="Side Table" style={{width:"400px", height:"400px"}}/>
      <h1 className="text-2xl font-normal text-left" style={{fontSize:"24px"}}>
        Trenton modular sofa_3
      <br />Rs. 25,000.00
        </h1>
        
    </div> 
   {/* <!-- Table 2 --> */}
    <div className="flex flex-col items-center mt-12" >
      <img src="/images/table2.png" alt="Side Table" style={{width:"400px", height:"400px"}}/>
      <h1 className="text-2xl font-normal text-left" style={{fontSize:"24px"}}>
      Granite dining table with 
      <br/>dining chair
      <br />Rs. 25,000.00
        </h1>
        
    </div>
    {/* <!-- Table 3 --> */}
   <div className="flex flex-col items-center mt-12" >
      <img src="/images/table3.png" alt="Side Table" style={{width:"400px", height:"400px"}}/>
      <h1 className="text-2xl font-normal text-cleft" style={{fontSize:"24px"}}>
      Outdoor bar table and
      <br/>stool
      <br />Rs. 25,000.00
        </h1>
    </div> 

{/* <!-- mirror --> */}
<div className="flex flex-col items-center mt-12" >
      <img src="/images/mirror.png" alt="Side Table" style={{width:"400px", height:"400px"}}/>
      <h1 className="text-2xl font-normal left" style={{fontSize:"24px"}}>
      Plain console with teak
        <br/>mirror
      <br />Rs. 25,000.00
        </h1>
    </div>

  </div>
  <div className=" text-center items-center py-20">
    <a href="" className="font-semibold justify-center text-center   hover:text-gray-500
       hover:border-gray-500 border-b-2 border-black" style={{fontSize:"24px"}}>View More</a>
       
       
    </div>



{/*4th Card*/}

  <div style={{background:"#FFF9E5"}} className="grid grid-cols-1 md:grid-cols-12 items-center 
  ">
  <div className="md:col-span-8 flex">
    <img src="images/sofa4.png" alt="Asgaard Sofa" style={{width:"1200px", height:999}}/>
    </div>
    <div className="md:col-span-4 text-center p-3">
    <h1 className=" font-poppins font-semibold" style={{fontSize:"30px"}}>
      New Arrivals</h1>
      <h1 style={{fontSize:"60px"}} className="font-bold mb-9">Asgaard sofa
      </h1>
      <a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border border-black p-2 px-6" style={{fontSize:"30px"}}>Order Now</a>
    </div>
  </div>


{/*5th Section */}
<div>
  <div className="text-center justify-start p-7 ">
<h1 className="font-semibold " style={{fontSize:"46px"}}>
Our Blogs
</h1>
<h1 style={{fontSize:"24px", color:"#9F9F9F"}}>Find a bright ideal to suit your taste with our great 
  selection</h1>

   <div className="grid grid-cols-1 md:grid-cols-12 justify-center gap-4 mt-10 px-7 ">

{/*blog1*/}
    <div className="md:col-span-4 text-center ">
<img src="images/blog1.png" alt="" style={{width:"500px", height:"500px"}} className="p-4 "/>
<h1 style={{fontSize:"28px"}} className="p-6">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 px-6" style={{fontSize:"30px"}}>Read More
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
<img src="images/blog2.png" alt="" style={{width:"500px", height:"500px"}} className="p-4"/>
<h1 style={{fontSize:"28px"}} className="p-5">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 px-6" style={{fontSize:"30px"}}>Read More
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
<img src="images/blog3.png" alt="" style={{width:"500px", height:"500px"}} className="p-4"/>
<h1 style={{fontSize:"28px"}} className="p-5">
Going all-in with millennial design
</h1>
<a href="" className="font-semibold justify-center text-center hover:text-gray-500
       hover:border-gray-500 border-b border-black p-2 px-6" style={{fontSize:"30px"}}>Read More
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

<div className=" text-center items-center py-20">
    <a href="" className="font-semibold justify-center text-center   hover:text-gray-500
       hover:border-gray-500 border-b-2 p-6 border-black" style={{fontSize:"28px"}}>View All Post</a>
    </div>
{/*5th section */}
<div className="flex flex-col items-center space-y-4 py-20
bg-[url('/images/cover1.png')] bg-cover bg-center w-full" style={{height:"490px"}}>
  <p className="text-center justify-center pt-20 font-extrabold md:text-8xl">Our Instagram</p>
  <h1 className="text-center font-light md:text-3xl">Follow our store on Instagram</h1>
  <button className="text-center font-medium md:text-2xl px-20 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
  Follow Us
  </button>
</div>

    <Footer/>
    
    </div>
   
  )}
