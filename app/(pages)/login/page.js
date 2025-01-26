'use client'
import { useState } from 'react';
import { useSession, signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import BackgroundImage from "@/app/addons/homeBackground"

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: session } = useSession();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Prevent default OAuth redirect
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false, // Prevent redirect
        // callbackUrl: '/dashboard' // Optional: redirect after success
      });

      console.log('Form submitted:', data);

      if (result?.error) {
        console.error('Login error:', result.error);
      } else {
        console.log('Login successful:', result);
        reset(); // Clear form after successful submission
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form min-h-screen relative">
      <div className="w-full h-screen">
        <BackgroundImage/>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg p-8 w-[400px]">
          <h2 className="text-center text-3xl font-bold text-white mb-6">Sign In</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Email address"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
            </div>
            
            <div>
              <input 
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                type="password"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
                placeholder="Password"
              />
              {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-white/80 hover:text-white text-sm">Forgot Password?</a>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold p-2 rounded-lg border border-white/30 transition duration-200
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-white/20 hover:bg-white/30 text-white'}`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/70">Or continue with</span>
              </div>
            </div>

            <button
              onClick={() => signIn('google', { redirect: false })}
              className="mt-3 w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-white/20 hover:bg-white/30 border border-white/30 text-white transition duration-200"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;