'use client'
import { useState } from 'react';
import { useSession, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import BackgroundImage from "@/app/addons/homeBackground"

const Signup = () => {
  const [isTrader, setIsTrader] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = {
        ...data,
        userType: isTrader ? 'trader' : 'rider'
      };
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-form min-h-screen relative ">
      <div className="w-full h-screen">
        <BackgroundImage/>
      </div>
      <div className="absolute inset-0 flex justify-center items-center mt-16">
        <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg p-6 w-[500px]">
          <h2 className="text-center text-2xl font-bold text-white mb-4">Sign Up</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex justify-center mb-4">
              <div className="flex p-1 bg-white/20 rounded-lg">
                <button
                  type="button"
                  onClick={() => setIsTrader(true)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isTrader 
                      ? 'bg-white text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Trader
                </button>
                <button
                  type="button"
                  onClick={() => setIsTrader(false)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    !isTrader 
                      ? 'bg-white text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Rider
                </button>
              </div>
            </div>

            <div>
              <input 
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Full Name"
              />
              {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
            </div>

            <div>
              <input 
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Email address"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
            </div>

            <div>
              <input 
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number"
                  }
                })}
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Phone Number"
              />
              {errors.phone && <span className="text-red-400 text-sm">{errors.phone.message}</span>}
            </div>

            <div>
              <input 
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Password"
              />
              {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold p-2 rounded-lg border border-white/30 transition duration-200
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-white/20 hover:bg-white/30 text-white'}`}
            >
              {isSubmitting ? 'Signing up...' : `Sign Up as ${isTrader ? 'Trader' : 'Rider'}`}
            </button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/70">Or continue with</span>
              </div>
            </div>

            <button
              onClick={() => signIn('google')}
              className="mt-3 w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-white/20 hover:bg-white/30 border border-white/30 text-white transition duration-200"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;