import axios from 'axios';

const URL="http://localhost:3000/api/news";
export const getAllNews=async()=>{
    try{
        const response=await axios.get(URL);
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}
