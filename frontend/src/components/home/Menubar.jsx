import "./style.css";
const Menubar=({setNewsData})=>{
    const handleNewsData=(category)=>{
        const newsData = JSON.parse(localStorage.getItem('news'));
        const filteredNews = newsData.filter((item) => item.category === category);
        setNewsData(filteredNews);
    }
    return(
        <>
            <section className="d-flex justify-content-around menubar">
                {
                    MenuData.map(item=>(
                        <div className="menubar-items" onClick={()=>handleNewsData(item.name)}>
                            {item.name}
                        </div>
                    ))
                }
            </section>
        </>
    )
}
export default Menubar;

const MenuData=[
    {
        name:"india",
        Link:""
    },
    {
        name:"world",
        Link:""
    },
    {
        name:"local",
        Link:""
    },
    {
        name:"business",
        Link:""
    },
    {
        name:"sports",
        Link:""
    },
    {
        name:"technology",
        Link:""
    },
    
    {
        name:"nature",
        Link:""
    }
]