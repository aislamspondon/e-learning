import { Button, IconButton, Input } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="py-28">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[400px] h-max px-10 pt-8 pb-16 border rounded-md shadow-md mx-auto flex flex-col items-start gap-8"
      >
        <h3 className="w-full text-center text-blue-primary">Register</h3>
        <Input
          label="Name"
          variant="filled"
          placeholder="Full name"
          required
          type="text"
          name="name"
          className=" w-full mx-auto"
        />
        <Input
          label="Email"
          variant="filled"
          placeholder="Email"
          required
          type="email"
          name="email"
          className=" w-full mx-auto"
        />
        <Input
          label="Phone"
          variant="filled"
          placeholder="Contact no."
          required
          type="number"
          name="phone"
          className=" w-full mx-auto"
        />
        <div className="w-full relative flex items-center">
          <Input
            variant="filled"
            placeholder="Password"
            required
            name="password"
            type={showPassword === true ? "text" : "password"}
            className=" w-full mx-auto"
          />
          <IconButton
            onClick={() => setShowPassword((state) => !state)}
            aria-label="toggle-password-visibility"
            className="w-max absolute right-2"
          >
            {showPassword === false ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </IconButton>
        </div>

        <Input
          variant="filled"
          placeholder="Confirm Password"
          required
          name="confirm_password"
          type="password"
          className=" w-full mx-auto"
        />
        <Button
          type="submit"
          variant="contained"
          className="bg-blue-primary text-[14px]  font-poppins normal-case px-4 py-1.5 self-center w-full"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
