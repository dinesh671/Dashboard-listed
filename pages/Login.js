import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import googleLogo from '../public/google.svg';
import appleLogo from '../public/apple.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

async function handleGoogleSignin() {
  signIn('google')
}

export default function Login() {
  const { data: session } = useSession()
  
  return (
    <div className="flex">
      <section className="left bg-black text-white h-screen w-1/3 text-7xl font-bold flex justify-center items-center">
        Board.
      </section>
      <section className="right h-screen w-2/3 flex flex-col justify-center items-center">
        <div className="heading">
          <h2 className="font-bold text-4xl pb-1">Sign In</h2>
          <p className="font-special text-base ">Sign in to your account</p>
        </div>
        <div className="flex gap-[25px] py-[26px]">
          <button
            className=" flex gap-[10px] bg-white text-neutral-500 px-[19px] py-[8px] rounded-[10px] text-xs cursor-pointer"
            onClick={() => signIn('google', { callbackUrl: '/Dashboard' })}
          >
            <Image src={googleLogo} alt="google logo" />
            Sign in with Google
          </button>
          <button
            className=" flex gap-[10px] bg-white text-neutral-500 px-[19px] py-[8px] rounded-[10px] text-xs cursor-pointer"
            onClick={signIn}
          >
            <Image src={appleLogo} alt="google logo" />
            Sign in with Apple
          </button>
        </div>
        <form className="flex flex-col gap-5 bg-white p-[30px] rounded-[20px]">
          <div className="flex flex-col gap-[10px] font-special text-base">
            <label className="">Email address</label>
            <input
              type="Email"
              placeholder="john.doe@gmail.com"
              name="Email"
              required
              className="w-[325px] h-10 rounded-[10px] pl-[15px] bg-neutral-100"
            ></input>
          </div>
          <div className="flex flex-col gap-[10px] font-normal font-special text-base">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="psw"
              required
              className="w-[325px] h-10 rounded-[10px] pl-[15px] bg-neutral-100"
            ></input>
          </div>
          <div className="text-base font-special text-[#346BD4]">
            Forgot password?
          </div>

          <button
            type="submit"
            className="font-bold text-base bg-black text-white
           h-10 rounded-[10px]"
          >
            Sigin In
          </button>
        </form>
        <div className="pt-5 font-special">
          Don’t have an account?
          <span className="text-[#346BD4]">Register here</span>
        </div>
      </section>
    </div>
  );
}


