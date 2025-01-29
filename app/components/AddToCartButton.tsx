// 'use client'
// import { Product } from '@/types/products';
// import React from 'react';
// import Swal from 'sweetalert2';
// import { addToCart } from "@/app/cartfunc";

// interface AddToCartButtonProps {
//     product: Product;
// }

// const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
//     const handleCartButton = (e: React.MouseEvent) => {
//         e.preventDefault();
//         console.log('Product:', product); // Debug log
//         Swal.fire({
//             position: "top-right",
//             icon: "success",
//             title: `${product.name} Added to Cart`,
//             showConfirmButton: false,
//             timer: 1000
//         });
//         addToCart(product);
//     };

//     return (
//         <button
//             onClick={handleCartButton}
//             className="px-20 py-10 text-black border-2 rounded-lg w-full sm:w-auto
//                 hover:bg-gradient-to-r from-orange-200 to-gray-300 font-semibold shadow-md hover:shadow-lg
//                 hover:text-gray-600 hover:scale-100 transition-transform duration-300 ease-in-out"
//         >
//             Add to Cart
//         </button>
//     );
// };

// export default AddToCartButton;