"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allproducts, four } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image"
import React, { useEffect, useState } from "react";

const Furniture = () => {
    const [product, setproduct] = useState<Product[]>([])

    useEffect(() => {
        async function getproducts() {
            const fetchedProduct: Product[] = await client.fetch(four)
            setproduct(fetchedProduct)
        }
        getproducts()
    }, [])

    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 m-6 justify-center gap-8">
            {product.map((product) => (
                    <div key={product._id}
                        className=" p-2 hover:shadow transition h-40 duration-200" 
                        style={{ height: "400px" }}>

                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt="image"
                                width={200}
                                height={200}
                                 className="w-full h-60 object-cover rounded-lg" 
                                />
                        )}
                        <div><h1 className="font-semibold mt-10" style={{ fontSize: "20px" }}>{product.name}</h1></div>
                        <p className="text-lg font-semibold mt-4">
                            {product.price ? `$${product.price}` : "price not available"}</p>
                </div>
            )
            )}

        </div>
    )
}
export default Furniture