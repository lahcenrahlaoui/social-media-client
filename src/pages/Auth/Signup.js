import { useEffect, useRef, useState } from "react";
import { useSignup } from "hooks/useSignup";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage64] = useState("");
    const [password, setPassword] = useState("");
    const [signup, error, isLoading] = useSignup();

 
    const navigation = useNavigate();

    const refButton = useRef();

    useEffect(() => {
        refButton.current.disabled = isLoading;
    }, [isLoading]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (!email || !name || !image || !password) {
            alert("all fields must be filled ");
        } else {
            formData.append("image", image);
            formData.append("email", email);
            formData.append("name", name);
            formData.append("password", password);

            const x = await await signup(formData);

            if (Object.keys(x).includes("token")) {
                navigation("/");
                navigation("/");

                setEmail("");
                setName("");
                setPassword("");
                setImage64("");
            }
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen w-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create new account
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 md:space-y-6"
                    >
                        <div>
                            <label className=" capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                name
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="deo"
                                required=""
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        <div className="relative flex items-center justify-between px-4 py-3 transition duration-150 ease-in-out group ">
                            <input
                                type="file"
                                id="fileAttachment"
                                name="fileAttachment"
                                className="absolute inset-0 w-16 h-16 opacity-0 cursor-pointer "
                                onChange={(e) => setImage64(e.target.files[0])}
                                accept="image/*"
                            />

                            <div
                                className="flex items-center p-2 border border-2 group-hover:border-[#c5ddec] rounded-md cursor-pointer 
                          transition duration-150 "
                            >
                                <svg
                                    className="w-6 h-6 text-gray-400 "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    ></path>
                                </svg>
                            </div>
                            {image && "xxx"}
                        </div>

                        <button
                            ref={refButton}
                            type="submit"
                            className={`w-full  text-black bg-sky-600 hover:text-white 
                            hover:bg-primary-700 focus:ring-4 focus:outline-none ${
                                isLoading ? "opacity-60" : ""
                            }
                            focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                            text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                        >
                            Sign up
                        </button>

                        <p className="text-sm text-center text-gray-800 ">
                            Already have an account ?{" "}
                            <Link
                                to={"/auth/signin"}
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Sign in
                            </Link>
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
    );
}

export default Signup;
