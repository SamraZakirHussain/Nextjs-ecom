"use client";
import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItem, removeItem, updateQty, } from "../cartfunc";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Link from "next/link";
import { GrFormNext } from "react-icons/gr";

const CartPage = () => {
    
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItem())
    }, []);

    const handleRemoveItem = (Id: string) => {
        Swal.fire({
            title: "Order Confirmation",
             text: "Are you sure to remove this item?",
             icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D20109",
            cancelButtonColor: "#8EFFC1",
            confirmButtonText: "Confirm",
        }).then((Result) =>{
            if(Result.isConfirmed){
                removeItem(Id)
                setCartItems(getCartItem())
                Swal.fire("Item Removed", "Success")
            }
        });
    };
        // {quantity Change Handle}
    const handleQtyChange = (Id: string, Quantity: number) =>{
        updateQty(Id, Quantity);
        setCartItems(getCartItem())
    }

    // {quantity Increase Handle}
    const handleQtyIncrease = (Id: string) => {
        const product = cartItems.find((item) => item._id === Id);
        if (product) handleQtyChange(Id, product.stocklevel + 1);
      };

    // {quantity Decrease Handle}
    const handleQtyDecrease = (Id: string) =>{
        const product = cartItems.find((item) => item._id === Id);
        if(product && product.stocklevel >1)
            handleQtyChange(Id, product.stocklevel -1 )
            
    }
    // {quantity calculated}
    const TotalQty = () => {
        return cartItems.reduce((total, item) => total +item.price * item.stocklevel,0)
    }
    
    // {Checkout Proceed}
    const router = useRouter();
    const handleProceed = () => {
    Swal.fire({
        title: "Proceed to checkout?",
        text: "Please Review Your Cart",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#8EFFC1",
        cancelButtonColor: "##D20109",
        confirmButtonText: "Proceed"
    }).then((Result) =>{
        if(Result.isConfirmed){
            Swal.fire("success", "Your Order has been successfully proceed", "success");
            router.push("/checkout");
            setCartItems([]) 
        }
    })
    
    }

    return(
        <div>
            <Navbar/>
            <div className="flex flex-col items-center mt-4  mb-7 py-3 bg-[url('/images/img1.png')] bg-cover 
                bg-center w-full "
        style={{ height: "400px" }}>
        <div className="items-center mt-8 mb-7">
          <img
               src="images/img2.png" alt="Logo" 
               className=" mx-auto"
               style={{ height: "100px", width: "100px" }}/>
          <p className="text-center text-3xl md:text-5xl justify-center font-semibold">Cart</p>
        </div>
        <div className="flex text-xl items-center gap-2 mt-2">
                 <Link href={"/app"} >
                 <p className=" hover:underline">Home</p></Link>
                  <span><GrFormNext/></span>
                  <span>Cart</span>
                  
        </div>
        
    <div className="container w-full  mt-40">
        
        {cartItems.length === 0 ?(
            <p className="text-center text-blue-600"> Empty Cart!</p>
        ): (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                {cartItems.map((item) =>(
                    <div key={item._id}
                     className="flex text-black items-center shadow-md rounded-lg p-4 mb-4">
                        {item.image &&(
                            <Image
                            src={urlFor(item.image).url()}
                            className="w-16 h-16 object-cover rounded-lg"
                            alt= "Image"
                            width={80}
                            height={580}/>
                            
                        )}
                     <div className="flex-1 ml-4">
                     <h2 className="text-l font-semibold">{item.name}</h2>
                     <p className="text-gray-600">Price ${item.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <button
                            onClick={()=> handleQtyDecrease(item._id)}
                            className="px-2 py-2 text-black bg-yellow-200 hover:bg-gray-300 rounded"
                            >-
                            </button>
                            <span>{item.stocklevel}</span>
                            <button
                            onClick={()=> handleQtyIncrease(item._id)}
                            className="px-2 py-2 text-black bg-yellow-200 hover:bg-gray-300 rounded"
                            >+
                            </button>
                        </div>
                     </div>  
                      <button
                      onClick={()=> handleRemoveItem(item._id)}
                      className="ml-4 text-red-600 hover:text-red-800">
                            Remove
                      </button>
                    </div>
                ))}      
                </div>

               <div className="bg-yellow-100 shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">SubTotal:</span>
                    <span className="font-semibold">${TotalQty().toFixed(2)}</span>
                </div>
                <button
                onClick={handleProceed}
                className="w-full border-2 border-black py-6 mt-4 rounded hover:bg-blue-400">
                        Proceed to Check Out
                </button>
                </div> 
                
            </div>
        )}
        </div>

        </div>
    </div>
    );
};

export default CartPage;