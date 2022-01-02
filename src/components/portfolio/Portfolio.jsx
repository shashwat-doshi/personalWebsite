import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio, } from "../../data";
import { useEffect } from "react";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured"); //this means that whnenever selected matches any id inside the const list, it will become the active class
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ]

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;

        }
    }, [selected]) // run this use effect whenever selected is changed

    return (
        <div className="portfolio" id="portfolio">
            <h1>My projects</h1>
            <ul>
                {list.map((item) => ( // for each item in list, return a portfolioList
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} // active is assigned to whichever selected variable contains
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>

            <div className="container">
                { data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}    
            </div>
        </div>
    )
}
