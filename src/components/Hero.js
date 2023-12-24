import logo from "../images/logo.jpg";

const Hero = () => {
    return (
        <div className=" flex justify-center w-full mt-20 bg-green-100  ">
            <div className=" flex justify-between justify-center items-center w-3/4 ">
                <div>
                    <h3 className="text-2xl font-bold uppercase">All what you nedd </h3>
                    <h4 className="text-xl font-semibold uppercase">new posts in our store</h4>
                    <h1 className="text-4xl font-bold uppercase">amazing prices</h1>
                </div>
                <img className=" hidden sm:block " src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={{ width: 400, height: 400  }} />
            </div>
        </div>
    );
};

export default Hero;
