import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabToysCard from "./TabToysCard";

const CategoriesTabs = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    let [categories] = useState({
        "LEGO City": [
            {
                id: 1,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte840fb67809da48b/60384_alt1.png",
                name: "Lego city water car",
                price: "59.99 USD",
                rating: "4.8",
            },
            {
                id: 2,
                picture:
                    "https://m.media-amazon.com/images/I/91y3vfp7DdL._AC_SL1500_.jpg",
                name: "LEGO City Police Station",
                price: "49.99 USD",
                rating: "4.7",
            },
            {
                id: 3,
                picture:
                    "https://ideascdn.lego.com/media/generate/entity/lego_ci/project/c7c02ecd-25ce-4f25-b915-17b99edc6273/4/resize:1600:900/legacy",
                name: "LEGO City Fire Truck",
                price: "29.99 USD",
                rating: "4.5",
            },
            {
                id: 4,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt78771675276f157f/60197_alt1.png",
                name: "LEGO City Passenger Train",
                price: "129.99 USD",
                rating: "4.8",
            },
            {
                id: 5,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt0f105cb8b0fc2e2a/60222_alt1.png",
                name: "LEGO City Construction Site",
                price: "59.99 USD",
                rating: "4.6",
            },
            {
                id: 6,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte56a23dc5ed35142/60167_alt1.png",
                name: "LEGO City Coast Guard Headquarters",
                price: "79.99 USD",
                rating: "4.9",
            },
            {
                id: 7,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/bltc4e3f46bfc2e0117/60262_alt1.png",
                name: "LEGO City Airport Passenger Airplane",
                price: "89.99 USD",
                rating: "4.6",
            },
        ],
        "LEGO Marvel Super Heroes": [
            {
                id: 8,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte18d9a098c7a5fd4/76166_alt1.png",
                name: "LEGO Marvel Super Heroes Avengers Tower Battle",
                price: "79.99 USD",
                rating: "4.8",
            },

            {
                id: 9,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt2a4e1a2e0170efc0/76114_alt1.png",
                name: "LEGO Marvel Super Heroes Spider-Man's Spider Crawler",
                price: "39.99 USD",
                rating: "4.6",
            },
            {
                id: 10,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blte7c2fc23bc6b8e4c/76125_alt1.png",
                name: "LEGO Marvel Super Heroes Iron Man Hall of Armor",
                price: "59.99 USD",
                rating: "4.7",
            },
            {
                id: 11,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt36f3d447716d4a49/76107_alt1.png",
                name: "LEGO Marvel Super Heroes Thanos: Ultimate Battle",
                price: "69.99 USD",
                rating: "4.7",
            },
            {
                id: 12,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt8621347af57759db/76131_alt1.png",
                name: "LEGO Marvel Super Heroes Avengers Compound Battle",
                price: "99.99 USD",
                rating: "4.9",
            },
            {
                id: 13,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/bltf4d2c757fe117c1b/76146_alt1.png",
                name: "LEGO Marvel Super Heroes Spider-Man Mech",
                price: "9.99 USD",
                rating: "4.5",
            },
        ],
        "LEGO Star Wars": [
            {
                id: 14,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt697aef9a9ae85884/75257_alt1.png",
                name: "LEGO Star Wars Millennium Falcon",
                price: "159.99 USD",
                rating: "4.8",
            },

            {
                id: 15,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt190c127fa2a7a54c/75093_alt1.png",
                name: "LEGO Star Wars Death Star Final Duel",
                price: "99.99 USD",
                rating: "4.7",
            },
            {
                id: 16,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt57d349c1569e91ff/75218_alt1.png",
                name: "LEGO Star Wars X-wing Starfighter",
                price: "79.99 USD",
                rating: "4.6",
            },
            {
                id: 17,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt9f4e5d03b9a7af0f/75288_alt1.png",
                name: "LEGO Star Wars AT-AT Walker",
                price: "159.99 USD",
                rating: "4.7",
            },
            {
                id: 18,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt37ef7c4ed53db7d3/75256_alt1.png",
                name: "LEGO Star Wars Kylo Ren's Shuttle",
                price: "129.99 USD",
                rating: "4.6",
            },
        ],
        "LEGO Speed Champions": [
            {
                id: 22,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt22e8fffcdfcc9dbd/76895_alt1.png",
                name: "LEGO Speed Champions Ferrari F8 Tributo",
                price: "19.99 USD",
                rating: "4.7",
            },
            {
                id: 23,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/bltc4689cf8e2cfafe8/76899_alt1.png",
                name: "LEGO Speed Champions Lamborghini Urus ST-X & Lamborghini Huracán Super Trofeo EVO",
                price: "49.99 USD",
                rating: "4.9",
            },
            {
                id: 24,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt4e0d6c9bfc9aef74/75892_alt1.png",
                name: "LEGO Speed Champions McLaren Senna",
                price: "14.99 USD",
                rating: "4.6",
            },
            {
                id: 25,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt6b8e774fcac97037/75891_alt1.png",
                name: "LEGO Speed Champions Chevrolet Camaro ZL1 Race Car",
                price: "14.99 USD",
                rating: "4.5",
            },
            {
                id: 26,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt4c1019d7692a53f7/75893_alt1.png",
                name: "LEGO Speed Champions Dodge Challenger SRT Demon and 1970 Dodge Charger R/T",
                price: "29.99 USD",
                rating: "4.8",
            },
            {
                id: 27,
                picture:
                    "https://www.lego.com/cdn/cs/set/assets/blt5a7da46d0ef0b68b/76896_alt1.png",
                name: "LEGO Speed Champions Nissan GT-R NISMO",
                price: "19.99 USD",
                rating: "4.7",
            },
        ],
    });
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
