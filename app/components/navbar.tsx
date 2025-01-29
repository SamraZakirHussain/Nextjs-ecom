import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import Link from "next/link";
// import Shop from "./Shop/page";
export default function Navbar() {
  return (
    <div style={{ font: "Poppins" }}>
      <nav className="grid grid-cols-1 md:grid-cols-12 items-center pt-8"
        style={{ background: "#FBEBB5" }}>
        {/* Navigation Links Section */}
        <ul className="col-span-7 flex justify-end gap-x-20  text-3xl" style={{ fontSize: "28px" }}>
          <li className="hover:text-gray-600 cursor-pointer ">Home</li>
          <li className="hover:text-gray-600 cursor-pointer"><Link href="/components/Shop">Shop</Link></li>
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>

        {/* Icons Section */}
        <div className="col-span-4 flex justify-end space-x-20 text-2xl">
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineBellAlert className="w-10 h-10" /></span>
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineSearch className="w-10 h-10" /></span>
          <span className="hover:text-gray-600 cursor-pointer"><HiOutlineHeart className="w-10 h-10" /></span>
          <span className="hover:text-gray-600 cursor-pointer"><Link href="/Cart"><IoCartOutline className="w-10 h-10" /></Link>
          </span>
        </div>
      </nav>
    </div>
  );
}
