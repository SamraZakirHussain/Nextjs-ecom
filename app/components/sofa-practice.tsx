// "use client"
// import { client } from "@/sanity/lib/client";
// import { allproducts } from "@/sanity/lib/queries";
// import { Product } from "@/types/products";
// import Image from "next/image"
// import React, {useEffect, useState} from "react";
// const Sofa = ()=>{
//     const [product, setproduct] = useState<Product[]>([])

//     useEffect(()=>{
//         async function getproducts() {
//             const fetchedProduct : Product[] = await client.fetch(allproducts)
//             setproduct(fetchedProduct)
//         }
//         getproducts()
//     },[])
// }