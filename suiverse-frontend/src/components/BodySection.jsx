import backgroundImage from "../assets/background-image.jpg"; // Import the image


const BodySection = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={backgroundImage} 
        alt="background" 
        className="w-full h-full object-cover" 
      />

      {/* Overlay to improve text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text on top of the image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl ">The Simple, Safer Way To Loan Money Online</h1>
        <button className="border-2 border-blue-600  text-white p-3 rounded-2xl text-xl mt-7 mb-4  bg-blue-600 hover:bg-blue-50 hover:text-blue-600 ">Sign Up For Free</button>
        <p className="">Need Capital To Start A Business? Open An Account Now</p>
      </div>
      
    </div>
  );
}

export default BodySection;