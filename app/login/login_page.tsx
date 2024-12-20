"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./action";

import Footer from "../components/footer_page";
import Navbar from "../components/header_page"

export default function Login() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar/>
        <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton />
    </form>


      {/* <Footer/> */}
    </div>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}
