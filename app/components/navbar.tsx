import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import Link from "next/link";
// import Shop from "./Shop/page";
export default function Navbar() {
  return (
    <div style={{ font: "Poppins" }}>
      <nav className="grid grid-cols-1 md:grid-cols-12 items-center p-3"
        style={{ background: "#FBEBB5" }}>
        {/* Navigation Links Section */}
        <ul className="col-span-8 flex justify-end gap-x-16  text-lg" >
          <li className="hover:text-gray-600 cursor-pointer ">Home</li>
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/components/Shop">Shop</Link></li>
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>

        {/* Icons Section */}
        <div className="col-span-4 flex justify-end space-x-11 text-right text-3xl">
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineBellAlert /></span>
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineSearch /></span>
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineHeart /></span>
          <span className="hover:text-gray-600 cursor-pointer"><Link href="/Cart"><IoCartOutline  /></Link>
          </span>
        </div>
      </nav>
    </div>
  );
}
