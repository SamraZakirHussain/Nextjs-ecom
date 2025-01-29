import { Product } from "@/types/products";
import { json } from "stream/consumers";

export const addToCart = (product : Product) => {
    const cart : Product[] =JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItemIndex = cart.findIndex(item => item._id === product._id)

    if(existingItemIndex>-1){
        cart[existingItemIndex].stocklevel +=1
    }
    else{
        cart.push({
            ...product, stocklevel: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeItem = (itemId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== itemId)

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateQty = (itemId :string, quantity:number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const itemIndex = cart.findIndex(item => item._id === itemId)

    if(itemIndex > -1){
        cart[itemIndex].stocklevel = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItem = () : Product[] =>{
    return JSON.parse(localStorage.getItem('cart') || '[]')
}