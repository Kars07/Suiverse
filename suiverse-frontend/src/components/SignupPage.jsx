import  {useState} from "react"

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);        
};
     return(
        <div className= "flex flex col items-center justify-center min-h-screen bg-gray-100">
            <form
              className = "bg-white p-6 rounded-lg shadow-lg"
              onSubmit = {handleSubmit} 
            >
                <h2 className = "text-2x1 font-bold mb-4 text-center">SIGN UP</h2>
                <input 
                  type ="text"
                  name = "name"
                  placeholder ="FULLNAME"
                  value = {formData.name}
                  onChange = {handleInputChange}
                  className = "block w-full p-2 mb-4 border rounded"
                />
                <input 
                  type ="email"
                  name ="email"
                  placeholder ="Email"
                  value ={formData.email}
                  className = "block w-full p-2 mb-4 border rounded"
                />
                <input
                  type ="password"
                  name ="password"
                  placeholder = "Password"
                  value = {formData.password}
                  onChange = {handleInputChange}
                  className = "block w-full p-2 mb-4 border rounded"
                />
                <button
                 type ="submit"
                 className = "w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    SIGN UP
                </button>
             </form>
             </div> 
     );
};

export default SignupPage;