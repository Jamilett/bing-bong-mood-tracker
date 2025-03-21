import { useNavigate } from "react-router-dom";
import BingBongImage from "../assets/bingbongimage.png";
import BingBongLogo from "../assets/BingBongLogo.svg";

//import Auth from '../utils/auth.js';

import { User } from '../models/User.js';
import { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

/**
  return (
    <section className="bg-purple-50 h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6">
        
        
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <a href="#" onClick={() => navigate('/landing')} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-10 h-10 mr-2" src={BingBongLogo} alt="logo" />
            BingBong
          </a>
          
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-8 p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Sign in to your account
            </h1>
            
            <form className="space-y-4 md:space-y-6 mt-4" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
*/
//      if (!response.ok) {
//        throw new Error('something went wrong!');
//      }

    const { token } = data.login;
    console.log("Token:", token);
 //     Auth.login(token);   // Currently We do not have this code (function)
      // we need to store the token in local storage
      localStorage.setItem('id_token', token);
      // we need to redirect the user to the home page
      window.location.assign('/');
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
                    <Link to="/signup" className="font-medium text-purple-600 hover:underline ">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:cursor-pointer"
              >
                Log in!
              </button>
              
              <p className="text-sm font-light text-gray-500 text-center">
                Don’t have an account?{" "}
                <a href="#" onClick={() => navigate('/signup')} className="font-medium text-purple-600 hover:underline hover:cursor-pointer">
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Imagen del personaje - Solo en desktop */}
        <div className="hidden md:flex md:w-1/2 justify-center hover:animate-bounce">
          <img src={BingBongImage} alt="Bing Bong" className="w-3/4 max-w-lg" />
        </div>
      </div>
    </section>
  );
}

export default Login;
