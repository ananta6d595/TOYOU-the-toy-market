import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TabToysCard from "./TabToysCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoriesTabs = () => {
    const [toys, setToys] = useState([]);
    let catToys = [];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const categories = [
        "LEGO City",
        "LEGO Marvel Super Heroes",
        "LEGO Star Wars",
        "LEGO Speed Champions",
    ];
    useEffect(() => {
        Aos.init();
        fetch("https://toy-market-place-server-two.vercel.app/toys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div
            className="container min-h-[400px] px-2 pb-16 sm:px-0"
            data-aos="fade-right">
            <Tabs>
                <TabList className="text-center">
                    {categories.map((cat, index) => (
                        <Tab key={index}>{cat}</Tab>
                    ))}
                </TabList>

                {categories.map((cat, index) => (
                    <TabPanel key={index}>
                        {toys
                            .filter((toy) => toy.seller_name == cat)
                            .map((toy) => (
                                <TabToysCard toy={toy} key={toy._id}></TabToysCard>
                            ))}
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default CategoriesTabs;
