// export default function Footer() {
//     return (
//       <div className="font-Poppins">
//         <footer className="grid grid-cols-12 sm:grid-cols-1 gap-4 items-start bg-white px-10 py-10">
//           {/* Address Section */}
//           <div className="col-span-3 py-16 text-gray-500 text-sm">
//             400 University Drive Suite 200 Coral <br />
//             Gables, <br />FL 33134 USA
//           </div>
  
//           {/* Links Section */}
//           <div className="col-span-2 sm:grid-cols-12">
//             <ul className="space-y-4">
//               <li className="text-gray-500 font-semibold">Links</li>
//               <li className="hover:text-gray-800 cursor-pointer">Home</li>
//               <li className="hover:text-gray-800 cursor-pointer">Shop</li>
//               <li className="hover:text-gray-800 cursor-pointer">About</li>
//               <li className="hover:text-gray-800 cursor-pointer">Contact</li>
//             </ul>
//           </div>
  
//           {/* Help Section */}
//           <div className="col-span-3 sm:grid-cols-12">
//             <ul className="space-y-4">
//               <li className="text-gray-500 font-semibold">Help</li>
//               <li className="hover:text-gray-800 cursor-pointer">Payment Options</li>
//               <li className="hover:text-gray-800 cursor-pointer">Returns</li>
//               <li className="hover:text-gray-800 cursor-pointer">Privacy Policies</li>
//             </ul>
//           </div>
  
//           {/* Newsletter Section */}
//           <div className="col-span-4 sm:grid-cols-12">
//             <ul className="space-y-4">
//               <li className="text-gray-500 font-semibold">Newsletter</li>
//               <li>
//                 <div className="flex items-center border-b border-gray-400">
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email Address"
//                     className="w-full text-sm py-2 px-3 focus:outline-none"
//                   />
//                   <button className="text-sm font-medium hover:text-gray-800">SUBSCRIBE</button>
//                 </div>
//               </li>
//             </ul>
//           </div>
  
//           {/* Footer Bottom */}
//           <div></div>
//           <div className="col-span-12 mt-8 text-gray-500 text-sm text-Left">
//             2022 Meubel House. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     );
//   }
export default function Footer() {
    return (
      <div className="font-Poppins m-4 p-2">
        <footer className="grid grid-cols-1 md:grid-cols-12 gap-4 text-lg items-start bg-white px-6 md:px-10 py-10">
          {/* Address Section */}
          <div className="col-span-12 md:col-span-3 text-center md:text-left align-middle p-6 text-gray-500 text-medium">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </div>
  
          {/* Links Section */}
          <div className="col-span-12 md:col-span-2 text-center md:text-left">
            <ul className="space-y-10">
              <li className="text-gray-500 font-semibold">Links</li>
              <li className="hover:text-gray-800 cursor-pointer">Home</li>
              <li className="hover:text-gray-800 cursor-pointer">Shop</li>
              <li className="hover:text-gray-800 cursor-pointer">About</li>
              <li className="hover:text-gray-800 cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div className="col-span-12 md:col-span-3 text-center md:text-left">
            <ul className="space-y-12">
              <li className="text-gray-500 font-semibold">Help</li>
              <li className="hover:text-gray-800 cursor-pointer">Payment Options</li>
              <li className="hover:text-gray-800 cursor-pointer">Returns</li>
              <li className="hover:text-gray-800 cursor-pointer">Privacy Policies</li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="col-span-12 md:col-span-4 text-center md:text-left">
            <ul className="space-y-4">
              <li className="text-gray-500 font-semibold">Newsletter</li>
              <li>
                <div className="flex flex-col md:flex-row items-center md:items-stretch  pb-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full text-sm py-2 px-3 focus:outline-none mb-2 md:mb-0 md:mr-2 border-b border-gray-400"
                  />
                  <button className="text-sm font-medium hover:text-gray-800 border-b border-gray-400">SUBSCRIBE</button>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Footer Bottom */}
          
         
        </footer>
        <div className=" text-center md:text-left  text-lg">
          <div className="mb-10">
            <img  src="/images/line.png" className="w-full"alt="" style={{color:"#D9D9D9", border:"1px"}}/>
          </div>
            2022 Meubel House. All rights reserved.
          </div>
      </div>
    );
}  