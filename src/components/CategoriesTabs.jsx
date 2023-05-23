import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Aos from "aos";
import "aos/dist/aos.css";

import TabToysCard from "./TabToysCard";

const CategoriesTabs = () => {
    const [toys, setToys] = useState([]);

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
            <Tab.Group>
                <Tab.List className="w-full max-w-2xl mx-auto flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-cyan-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }>
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {categories.map((category, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 "
                            )}>
                            <div className="grid md:grid-cols-2">
                                {toys.map((toy) => (
                                    <TabToysCard toy={toy} key={toy._id}></TabToysCard>
                                ))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default CategoriesTabs;
