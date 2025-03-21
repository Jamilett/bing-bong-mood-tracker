import { useState } from "react";
import { UserInput } from "../models/User.js";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations.js";
import { Link } from "react-router-dom";

function CreateAccount() {
  // If we are dealing with a FORM, we need to keep track of the form data
  // We can use the useState hook to do this
  const [userFormData, setUserFormData] = useState<UserInput>({ username: '', email: '', password: '' });

  // We need to use the useMutation hook to send data to the server
  const [addUser, { error }] = useMutation(ADD_USER);
  // This function will update the form data when the user types
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the form from refreshing the page  

    // Check if the form has everything it needs
    if (e.currentTarget.checkValidity() === false) {
      // If the form is valid, we can send the data to the server
      console.log("All fields need to be filled out"); 
      return;
    }
    //  we have to SEND the data to the server
    try {
      // how are we sending data in GRAPHQL (apollo client)?
      // we use a MUTATION
      const { data } = await addUser({
        variables: { input: userFormData }
      });
      console.log("Data: ", data);	

      // we need to pull out the TOKEN data from the response
      const { token } = data.addUser;
      console.log("Token: ", token);

      // we need to store the token in local storage
      localStorage.setItem('id_token', token);
      // we need to redirect the user to the home page
      window.location.assign('/');
    } catch(err) {
      console.error(err);
    }
  }


  if(error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

    return (
      <div>
        <section className="bg-purple-50 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              BingBong
            </a>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign up for an account
                </h1>
                <form className="space-y-4 md:space-y-8" onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="enter username"
                      required
                      />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="name@email.com"
                      required
                      />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-purple-600 hover:underline ">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default CreateAccount;