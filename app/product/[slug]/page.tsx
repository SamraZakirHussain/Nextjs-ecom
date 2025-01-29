
// import { addToCart } from "@/app/cartfunc"
import dynamic from "next/dynamic"
// import AddToCartButton from "@/app/components/AddToCartButton"
import Navbar from "@/app/components/navbar"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "@/types/products"
import { groq } from "next-sanity"
import Image from "next/image"
import { CiStar } from "react-icons/ci"
import Furniture from "@/app/components/prac-mainpg-items";
import Link from "next/link"


interface ProductPageProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq` *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description
      }` , { slug }
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    // const [quantity, setQuantity] = useState(1);

    // const handleCartButton = (e: React.MouseEvent, product: Product) => {
    //     e.preventDefault()
    //     Swal.fire({
    //         position: "top-right",
    //         icon: "success",
    //         title: `${product.name} Added to Card`,
    //         showConfirmButton: false,
    //         timer: 1000
    //     })
    //     addToCart(product)

    // }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row p-6 gap-10  ">

                {/* <div className="flex flex-col gap-4 w-full md:w-1/2"> */}
                <div className="w-full md:w-1/2">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={500}
                            height={800}
                            className="w-full object-cover"
                        />
                    )}
                </div>


                <div className="flex-1 p-6 w-full md:w-1/2 border rounded-xl shadow-lg bg-white">
                    <h1 className="text-3xl font-bold ">{product.name}</h1>
                    <p className="text-xl mt-3 text-gray-600">${product.price}</p>


                    {/* Ratings */}
                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(4)].map((_, i) => (
                            <CiStar key={i} className="text-yellow-400" fill="yellow" size={20} />
                        ))}
                        <CiStar className="text-yellow-400" size={20} />
                        <span className="text-gray-500 text-sm">5 Customer Reviews</span>
                    </div>

                    <p className="text-gray-500 mt-4">{product.description}</p>
                    {/* </div> */}
                    <button className="px-20 py-10 text-black border-2 rounded-lg w-full sm:w-auto
                    hover:bg-gradient-to-r mt-6
                       from-orange-200 to-gray-300 font-semibold  shadow-md hover:shadow-lg
                        hover:text-gray-600 hover:scale-100 transition-transform duration-300 
                        ease-in-out"
               
                    >
                        Add To Cart
                    </button>
                        {/* <AddToCartButton product={product} /> */}


                        <div>
          <p className="font-semibold text-gray-700 mt-8">SKU: 
            <span className="font-normal text-gray-500">S5001</span></p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Category: <span className="font-normal text-gray-500">Sofas</span></p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Tags: <span className="font-normal text-gray-500">Sofa, Chair, Home, Shop</span></p>
        </div>
        <div> {/* Share icons container */}
          <p className="font-semibold text-gray-700">Share: 
            <span className="inline-flex ml-2"> {/* Flex for aligning icons */}
              <a href="#" className="text-gray-500 hover:text-gray-700 mr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M20 10c0-5.547-4.453-10-10-10S0 4.453 0 10c0 4.991 3.689 9.03 8.438 9.878v-6.987h-2.538V10h2.538V7.375c0-2.511 1.523-3.908 3.777-3.908 1.094 0 2.238.058 2.559.128v2.812h-1.778c-.816 0-1.958-.393-1.958-.942V10h3.3v3.099c0 .469-.12 1.02-.32 1.485a10.024 10.024 0 01-1.559.642l.002.005V20h-2.01c.003-.125.006-.249.008-.374C17.997 19.625 20 15.617 20 10z" clipRule="evenodd" />
                </svg>
              </a>
               {/* Add more share icons here */}
            </span>
          </p>
        </div>
                </div>     
            
            
            </div>

          


            {/* Description */}
            <div className="border-t-2 border-gray-200 mt-8">
                <div className="flex  items-center justify-center gap-28 mt-10 text-3xl ">
                <h1>Description</h1>
                <h1 className="text-gray-500">Additional Information</h1>
                <h1 className="text-gray-500">Reviews</h1>
                </div>

                <div>
                    <p className="text-gray-500 mt-10 px-40 text-xl">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes
                    the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p className="text-gray-500 mt-4 px-40 text-xl ">
                    Weighing in at a taut 3kg, The Kilburn is a lightweight piece of vintage styled engineering. Setting
                    the bar as one of the loudest speakers in its class.
                    </p>
                </div>
            </div>

            {/*Related Products*/}
            <div className="border-t-2 border-gray-200 mt-10">
                <div>
                    <h1 className="flex text-4xl mt-8 font-bold justify-center">Related Products</h1>
                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <Furniture/>
                    </div>
                    
                </div>
                

            </div>
            <div className="font-semibold justify-center text-center hover:text-gray-500
                     hover:border-gray-500 p-4 border-b border-black mt-10" style={{fontSize:"30px"}}>
                <Link href="/components/Shop" >View More</Link> 
                        </div>
        </div>
    )
}