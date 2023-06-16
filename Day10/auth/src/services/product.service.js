import axios from "axios"

export const products=async()=>{
    const val=await axios.get("https://dummyjson.com/products")
    return val;
}