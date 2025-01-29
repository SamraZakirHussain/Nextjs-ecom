"use client"
import { addToCart } from "@/app/cartfunc";
import Navbar from "../navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allproducts, four } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image"
import Link from "next/link";
import Swal from 'sweetalert2'

import React, { useEffect, useState } from "react";
// import Footer from "../components/footer";
export default function Shop() {
    const [product, setproduct] = useState<Product[]>([])

    useEffect(() => {
        async function getproducts() {
            const fetchedProduct: Product[] = await client.fetch(allproducts)
            setproduct(fetchedProduct)
        }
        getproducts()
    }, []);

    const handleCartButton = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.name} Added to Card`,
            showConfirmButton: false,
            timer: 1000
            })
        addToCart(product)

    }

    return (
        <div>
            <Navbar />

            {/*1st Section */}
            <div className="flex flex-col items-center space-y-4 py-20
 bg-[url('/images/img1.png')] bg-cover bg-center w-full" style={{ height: "400px" }}>
                <div>
                    <img src="images/img2.png" alt="" />
                </div>
                <p className="text-center justify-center pt-7  md:text-6xl">Shop</p>
            </div>

            {/*Section 2*/}
            <div style={{ background: "#FAF4F4" }} className="flex flex-col items-center mt-4">
                <div className="">

                </div>
            </div>

            {/* {all products} */}
            <div className=" m-8">
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
                    {product.length > 0 ? (
                        product.map((product) => (
                            <div key={product._id}
                                className="border rounded-lg shadow-md p-3 hover:shadow transition duration-200"
                             >
                                <Link href={`/product/${product.slug.current}`}>
                            <div className="">
                            {product.image && (
                                        <Image
                                            src={urlFor(product.image).url()}
                                            alt="image"
                                            width={200}
                                            height={200}
                                            className="w-full h-60 object-cover rounded-lg  " />
                                    )}
                            </div>
                                   
                                    <h1 className="font-semibold m-2" style={{ fontSize: "20px" }}>
                                        {product.name}</h1>
                                    <div className="text-lg font-semibold p-2">
                                        {product.price ? `$${product.price}` : "price not available"}</div>
                                        <div className="p-2">
                                        <button className="bg-gradient-to-r from-blue-200 to-gray-300 text-black font-semibold
                                        py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:text-gray-600 hover:scale-100 
                                        transition-transform duration-300 ease-in-out"
                                        onClick={(e) => handleCartButton(e, product)}
                                    >
                                        Add To Cart
                                    </button>
                                        </div>

                                </Link>
                            </div>

                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </div>

        </div>
    );
}
