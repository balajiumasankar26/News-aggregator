import { useState } from "react";
import Menubar from "../components/home/Menubar";
import Navbar from "../components/home/Navbar"
import NewsPage from "../components/home/NewsPage";

const Home=()=>{
    const [newsData,setNewsData]=useState();
    console.log(newsData)
    return(
        <>
            <Navbar setNewsData={setNewsData}/>
            <div className="d-none d-md-block">
            <Menubar setNewsData={setNewsData} />
            </div>
            <NewsPage newsData={newsData} setNewsData={setNewsData}/>
        </>
    )
}
export default Home;