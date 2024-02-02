import React from "react";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import { Separator } from "@radix-ui/themes";

const AuthPage = () => {
  return (
    <div className="w-screen grow font-poppins grid grid-cols-2 bg-white p-10 justify-evenly items-center gap-6">
      <div className="flex flex-col col-span-1 justify-start items-center p-6 gap-4">
        <h2 className="text-4xl font-medium">Create your account</h2>
        <p>Sign in to access your account</p>
        <form className="flex flex-col w-3/4 gap-3">
          <p>First Name</p>
          <InputField variant="outlined" placeholder="First Name" />
          <p>Last Name</p>
          <InputField variant="outlined" placeholder="Last Name" />
          <p>Password</p>
          <InputField variant="outlined" placeholder="Password" />
          <p>Confirm Password</p>
          <InputField variant="outlined" placeholder="Confirm Password" />
          <Button text="Sign Up" variant="primary" onClick={() => {}} />
          <div className="w-full flex items-center gap-3 text-text-gray">
            <Separator size={"4"} />
            <p>OR</p>
            <Separator size={"4"} />
          </div>
          <Button
            text="Login with Google"
            variant="outlined"
            onClick={() => {}}
          />
          <div className="flex gap-1">
            <p>Already have an account?</p>
            <p className="font-medium cursor-pointer">Sign In</p>
          </div>
        </form>
      </div>
      <div className="col-span-1 border w-full">Image Here</div>
    </div>
  );
};

export default AuthPage;
