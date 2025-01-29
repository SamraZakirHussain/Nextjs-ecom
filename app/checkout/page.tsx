"use client";
import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItem, } from "../cartfunc";
import Navbar from "../components/navbar";
import { GrFormNext } from "react-icons/gr";
import Footer from "../components/footer";
import Link from "next/link";
import PaymentOptions from "../components/paymentOption";


const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discout, setDiscount] = useState<number>(0)
  const [formValues, setFormValues] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    CountryRegion: "",
    StreetAddress: "",
    TownCity: "",
    Province: "",
    ZipCode: "",
    Phone: "",
    EmailAddress: "",

  });
  const [formErrors, setFormErrors] = useState({
    FirstName: false,
    LastName: false,
    CompanyName: false,
    CountryRegion: false,
    StreetAddress: false,
    TownCity: false,
    Province: false,
    ZipCode: false,
    Phone: false,
    EmailAddress: false,
  });

  useEffect(() => {
    setCartItems(getCartItem())
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, []);

  const SubTotal = cartItems.reduce((total, item) => total + item.price * item.stocklevel, 0);

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value, // Use e.target.name to update the correct field
    });
  };
  const formValidation = () => {
    const Error = {
      FirstName: !formValues.FirstName,
      LastName: !formValues.LastName,
      CompanyName: !formValues.CompanyName,
      CountryRegion: !formValues.CountryRegion,
      StreetAddress: !formValues.StreetAddress,
      TownCity: !formValues.TownCity,
      Province: !formValues.Province,
      ZipCode: !formValues.ZipCode,
      Phone: !formValues.Phone,
      EmailAddress: !formValues.EmailAddress
    };
    setFormErrors(Error);
    return Object.values(Error).every((error) => !error);
  };
  const orderHandle = () => {
    if (formValidation()) {
      localStorage.removeItem("appliedDiscount")
    }
    else {
       alert("Please fill in all the fields.");
      }
  }
 

  return (

    <div>
      <Navbar />

      {/* Header Section */}
      <div className="flex flex-col items-center mt-4 py-3 bg-[url('/images/img1.png')] bg-cover 
                bg-center w-full"
        style={{ height: "400px" }}>
        <div className="items-center mt-8">
          <img
               src="images/img2.png" alt="Logo" 
               className=" mx-auto"
               style={{ height: "100px", width: "100px" }}/>
          <p className="text-center text-3xl md:text-5xl justify-center font-semibold">Check Out</p>
        </div>
        <div className="flex  items-center gap-2 mt-2 text-lg  ">
                 <Link href={"/app"} >
                 <p className="text-sm hover:underline">Home</p></Link>
                  <span><GrFormNext/></span>
                  <span>Checkout</span>
                  
        </div>

      </div>

      {/* Main Section */}
      <div className=" mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Details */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6">Billing Details</h1>
          <form className="grid grid-cols-1 gap-6" >
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                placeholder="Enter Your First Name"
                value={formValues.FirstName}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.FirstName && ( <p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                placeholder="Enter Your Last Name"
                value={formValues.LastName}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.FirstName && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name (optional)
              </label>
              <input
                type="text"
                id="CompanyName"
                placeholder="Enter Company Name"
                value={formValues.CompanyName}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="CountryRegion" className="block text-sm font-medium text-gray-700">
                Country / Region
              </label>
              <input
                type="text"
                id="CountryRegion"
                placeholder="Enter Country / Region"
                value={formValues.CountryRegion}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.CountryRegion && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="StreetAddress" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                id="StreetAddress"
                placeholder="House number and street name"
                value={formValues.StreetAddress}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.StreetAddress && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="TownCity" className="block text-sm font-medium text-gray-700">
                Town / City
              </label>
              <input
                type="text"
                id="TownCity"
                placeholder="Enter Town / City"
                value={formValues.TownCity}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.TownCity && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="Province" className="block text-sm font-medium text-gray-700">
                Province
              </label>
              <select
                id="Province"
                value={formValues.Province}
                onChange={(e) =>
                  setFormValues({ ...formValues, Province: e.target.value })
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a province</option>
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
              </select>
              {formErrors.Province && <p className="text-red-600 text-sm">Required</p>}
            </div>
            <div>
              <label htmlFor="ZipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="ZipCode"
                placeholder="Enter Zip Code"
                value={formValues.ZipCode}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.ZipCode && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                placeholder="Enter Phone Number"
                value={formValues.Phone}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.Phone && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            <div>
              <label htmlFor="EmailAddress" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="EmailAddress"
                placeholder="Enter Email Address"
                value={formValues.EmailAddress}
                onChange={inputChangeHandle}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.EmailAddress && (<p className="text-red-600 text-sm">Required</p>)}
            </div>
            
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-6">Order Summary</h1>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id}>
                  <div className="flex justify-between items-center">
                    <p>{item.name}</p>
                    <p>$ {item.price * item.stocklevel}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>
                No item in cart.
              </p>
            )}</div>
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Subtotal:</p><span>$ {SubTotal}</span>

          </div>

          {discout > 0 && (
            <div className="flex justify-between items-center font-bold text-lg">
              <p>Discount:</p>
              <p>-$ {discout}%</p>
            </div>
          )}
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total:</p>
            <p>$ {SubTotal - discout}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Your personal data will be used to process your order, manage access
              to your account</p>
          </div>
          <div>
            <PaymentOptions/>
            </div>
          <button
              onClick={orderHandle}
           
              className="mt-4 px-12 border-spacing-2 justify-center border-2 border-black hover:bg-blue-600 font-bold py-7 rounded">
              Place Order
            </button>
        </div>
      </div>
      <div className= "py-20 mt-7" style={{background: "#FAF4F4"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Free Delivery */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800" style={{fontSize:"32px"}}>Free Delivery</h3>
            <p className="mt-2 text-sm text-gray-600 justify-start" style={{fontSize:"20px"}}>
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* 90 Days Return */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800" style={{fontSize:"32px"}}>90 Days Return</h3>
            <p className="mt-2 text-sm text-gray-600" style={{fontSize:"20px"}}>
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Secure Payment */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800" style={{fontSize:"32px"}}>Secure Payment</h3>
            <p className="mt-2 text-sm text-gray-600" style={{fontSize:"20px"}}>
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </div>

  );

};




export default CheckOut;