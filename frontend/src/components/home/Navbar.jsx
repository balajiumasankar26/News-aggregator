import { IoMdSearch } from "react-icons/io";
import "./style.css";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
const Navbar = ({setNewsData}) => {
    const [search, setSearch] = useState('');
    
    const newsData = JSON.parse(localStorage.getItem('news'));
    const handleSearch =  () => {
        
        if(newsData){
            const filteredNews = newsData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
            setNewsData(filteredNews);
            if(!search){
                setNewsData(newsData)
            }
            setSearch('')
        } 
    }
    return (
        <>
            <section className="navbar justify-content-between align-items-center d-flex p-3">
                <h4 className="fw-bold navbar-header">News Aggregator</h4>
                <section className="d-flex align-items-center w-50 justify-content-end">
                    <div className="d-flex navbar-search align-items-center w-100 justify-content-end">
                        <input  value={search} type="text" placeholder="Search News Article"className="w-100 d-none d-md-block navbar-search-input" onChange={(e)=>setSearch(e.target.value)}/>
                        <button className="navbar-search-icon" onClick={handleSearch}>
                            <IoMdSearch size={20} color="white"/>
                        </button>
                    </div>
                    <div className="navbar-profile">
                        <FaUser size={20} color="white"/>
                        <span>Profile</span>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Navbar;
