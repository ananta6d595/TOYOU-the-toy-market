import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabToysCard from "./TabToysCard";

const CategoriesTabs = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    let [categories] = useState();
    return (
        <div className="container min-h-[400px] px-2 pb-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="w-full max-w-2xl mx-auto flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }>
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 "
                            )}>
                            <div className="grid md:grid-cols-2">
                                {posts.map((post) => (
                                    <TabToysCard post={post}></TabToysCard>
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
