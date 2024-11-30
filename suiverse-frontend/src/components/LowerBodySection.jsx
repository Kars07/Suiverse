import individual  from "../assets/individual.png";

const LowerBodySection = () => {
  return (
    <div>
      <div className="text-center text-black p-10 text-4xl  ">
         <p className="font-bold">Suiwise Is For Everyone, Get Loans With <br></br>Lower Interest At A Faster Rate</p>
         
         <img src={individual} alt=" individual" className=" mx-auto content-center p-14 m-14 w-1/4 border-2 border-black-200 shadow-2xl bg-white-600 rounded-3xl hover:border-2 hover:border-blue-500"></img>
         <p className="mb-10">Individuals</p>
         <p className="text-center font-thin text-2xl p-18 ">Find out more about Suiwise connecting Lenders and Borrowers across Africa</p>
         <button className="text-blue-600 p-4 pl-20 pr-20 border-2 border-blue-600 rounded-full m-10 w- text-xl hover:bg-blue-600 hover:text-white">Learn More</button>
      </div>
    </div>
  )
}

export default LowerBodySection