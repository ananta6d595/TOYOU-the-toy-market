import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
    signInWithPopup,

    GoogleAuthProvider,
} from "firebase/auth";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    useTitle('Login');
    const [error, setError] = useState(null);
    const { auth, signInUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const HandelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                navigate(from, { replace: true });
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const HandelSignIn = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then((res) => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);

                if (error.message.includes("email-already-exists")) {
                    setError("Email already exists");
                }
                if (error.message.includes("wrong-password")) {
                    setError("Wrong password");
                }
                if (error.message.includes("auth/user-not-found")) {
                    setError("User not found");
                }
            });
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 w-full sm:max-w-xl sm:mx-auto md:mx-[24%] lg:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold mb-7 text-center">
                                    Login
                                </h1>
                            </div>
                            <Form onSubmit={HandelSignIn} className=" mb-4">
                                <div className="mb-4 relative">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>
                                <div className="mb-4 relative">
                                    <input
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Password
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                        type="submit">
                                        Sign In
                                    </button>
                                </div>
                            </Form>
                            <div className="text-center">
                                <span className="text-gray-700">
                                    Or login with:
                                </span>
                                <div className="flex justify-center mt-2">
                                    <button
                                        onClick={HandelGoogleLogin}
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        Google
                                    </button>
                                </div>
                                <p className="mt-4">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/registration"
                                        className="text-blue-500">
                                        Sign Up
                                    </Link>
                                </p>
                                <p className="text-rose-700">{error}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

// return (
//     <>
//         <div className="flex h-screen bg-gray-100">
//             <div className="m-auto w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8">
//                 <div className="text-center">
//                     <h1 className="text-3xl font-semibold text-gray-700 mb-2">
//                         Login
//                     </h1>
//                 </div>
//                 <Form onSubmit={HandelSignIn} className=" mb-4">
//                     <div className="mb-4">
//                         <label
//                             className="block text-gray-700 text-sm font-bold mb-2"
//                             htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="email"
//                             name="email"
//                             type="email"
//                             placeholder="Email"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label
//                             className="block text-gray-700 text-sm font-bold mb-2"
//                             htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             id="password"
//                             name="password"
//                             type="password"
//                             placeholder="Enter Password"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//                             type="submit">
//                             Sign In
//                         </button>
//                     </div>
//                 </Form>
//                 <div className="text-center">
//                     <span className="text-gray-700">Or login with:</span>
//                     <div className="flex justify-center mt-2">
//                         <button
//                             onClick={HandelGoogleLogin}
//                             className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                             Google
//                         </button>

//                     </div>
//                     <p className="mt-4">
//                         Don't have an account?{" "}
//                         <Link to="/registration" className="text-blue-500">
//                             Sign Up
//                         </Link>
//                     </p>
//                     <p className="text-rose-700">{error}</p>
//                 </div>
//             </div>
//             {/* another login page */}
//             <Login1></Login1>
//         </div>
//     </>
// );