import { useEffect, useRef, useState } from "react";

import { useSignin } from "hooks/useSignin";

import { Link, useNavigate } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signin, error, isLoading] = useSignin();

    const navigation = useNavigate();
    const refButton = useRef();

    useEffect(() => {
        refButton.current.disabled = isLoading;
    }, [isLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("All field must be full ");
        } else {
            const x = await signin(email, password);

            if (Object.keys(x).includes("token")) {
                navigation("/");
            }
        }
    };
    const handleGuestAuth = async () => {
        const e = "boldwood@boldwood.com";
        const p = "CBKV1DTHEEC2DHx@";

        const x = await signin(e, p);

        if (Object.keys(x).includes("token")) {
            navigation("/");
        }
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 h-screen w-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 md:space-y-6"
                        >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </div>

                            <button
                                ref={refButton}
                                type="submit"
                                className="w-full text-black bg-sky-600 hover:text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm text-center   text-gray-500 dark:text-gray-400">
                                Don’t have an account yet ?
                                <Link
                                    to={"/auth/signup"}
                                    className={`font-medium text-primary-600 hover:underline dark:text-primary-500  ${
                                        isLoading ? "opacity-60" : ""
                                    }`}
                                >
                                    Sign up
                                </Link>
                                <span
                                    onClick={handleGuestAuth}
                                    className="block text-black font-medium cursor-pointer  my-2"
                                >
                                    or login as a guest
                                </span>
                            </p>
                            {error && (
                                <div className="text-center text-red-600 text-sm  py-2 px-4 bg-red-100">
                                    Error : {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signin;
