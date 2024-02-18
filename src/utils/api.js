import axios from "axios";
const BASE_URL = "https://blog-rg2y.onrender.com";

export const fetchDataFromApi =async(url,method,params,data)=>{
    try{
        const options = {method,params,data}
        const response = await axios(BASE_URL+url,options)
        return response.data;
    }catch(err){
        console.log(err);
        return err.response;
    }
}