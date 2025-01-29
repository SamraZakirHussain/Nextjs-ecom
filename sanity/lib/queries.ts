import { groq } from "next-sanity";

export const allproducts = groq`*[_type == "product"]`
export const one = groq`*[_type == "product"][0]`
export const two = groq`*[_type == "product"][0...1]`
export const four = groq`*[_type == "product"][0...4]`