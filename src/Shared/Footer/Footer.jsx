const Footer = () => {
    return (
        <div className=" bg-image  bg-cover md:bg-contain">
            <div className="bg-cyan-800 bg-opacity-50">

                    <div className="relative md:flex md:container  px-4 py-5 md:px-14">
                        <img
                            className=" ms-8 md:ms-0 md:absolute h-32 md:bottom-[2px] md:left-[40px]"
                            src="https://ouch-cdn2.icons8.com/V39WdbzUyJ5ivtk_K8zfSRYINH_yZdQsOttGgVOJ2vE/rs:fit:256:281/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI4/LzUzN2ZhNTM2LTgz/Y2QtNDBmZC1iMjRi/LWEyMDFkNmVlOTVl/Yi5wbmc.png"
                        />{" "}
                        
                        <div className="ms-8 md:ms-28 md:flex md:flex-1 justify-between gap-6">
                            <div className="text-slate-100 w-9/12 pb-10 " >
                                <h2 className="font-bold text-2xl text-violet-900">
                                    Are you a seller ?
                                </h2>
                                <p className="text-lg text-slate-600">
                                    Share your toys with us we will trade your
                                    toy with best price in return.
                                </p>{" "}
                            </div>

                            <button className="btn bg-cyan-700 border-none hover:bg-sky-500 w-24">
                                Sell
                            </button>
                        </div>
                    </div>

                    <footer className="  footer container p-10  text-slate-200">
                        <div>
                            <div className=" bg-cyan-900 rounded-3xl px-4 py-6 border-8 border-white">
                                <h1 className="font-semibold text-5xl text-white ">
                                    TO<span className="text-orange-400">Y</span>
                                    OU
                                </h1>
                            </div>
                            <p className="font-medium text-base text-slate-200 ms-4">
                                Making toys since 2000
                            </p>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Product
                            </span>
                            <a className="link link-hover">Prototype</a>
                            <a className="link link-hover">Plans & Pricing</a>
                            <a className="link link-hover">Customers</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Company
                            </span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Latest News</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Legal
                            </span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                        <div>
                            <span className="font-extrabold text-lg text-white">
                                Support & Contact
                            </span>
                            <a className="link link-hover">Help Desk</a>
                            <a className="link link-hover">
                                Become a Partner
                            </a>{" "}
                            <a className="link link-hover">
                                524 Broadway ,
                                <br /> NYC <br />
                                +1 777 - 978 - 5570
                            </a>
                        </div>
                    </footer>

                <div className="divide-y sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto bg-slate-200 h-[0.5px]  mb-9" />
                <div className=" md:flex md:justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-10 md:px-14 text-gray-300 font-thin">
                    <div>
                        @2023 <span className="font-semibold">A6d5</span>. All
                        Rights Reserved
                    </div>
                    <div>
                        Powered by <span className="font-semibold">A6d5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
