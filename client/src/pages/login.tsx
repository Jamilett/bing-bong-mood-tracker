import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations.js';
//import Auth from '../utils/auth.js';
import { User } from '../models/User.js';
import { ChangeEvent, FormEvent } from 'react';

function Login() {
  const [userFormData, setUserFormData] = useState<User>({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    /*
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    //  event.stopPropagation();
    }
    */

    try {
    //  const response = await login(userFormData);  // Currently We do not have this code (function)

    const { data } = await login({
        variables: { ...userFormData }
      });

      console.log("Data: ", data);


//      if (!response.ok) {
//        throw new Error('something went wrong!');
//      }

    const { token } = data.login;
    console.log("Token:", token);
 //     Auth.login(token);   // Currently We do not have this code (function)
    } catch (err) {
      console.error(err);
    //  setShowAlert(true);
    }
/*
    setUserFormData({
      email: '',
      password: ''
    });
    */
  };

    if(error) {
      console.log("Error: ", error);
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
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-8" onSubmit={handleFormSubmit}>
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
                    Don’t have an account yet?{" "}
                    <a href="#" className="font-medium text-purple-600 hover:underline ">
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Login;