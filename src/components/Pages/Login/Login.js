import { Button, Input } from "@mui/material";
import React from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };
  return (
    <div className="py-28">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[400px] h-max px-10 pt-8 pb-16 border rounded-md shadow-md mx-auto flex flex-col items-start gap-8"
      >
        <h3 className="w-full text-center text-blue-primary">Login</h3>
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
          variant="filled"
          placeholder="Password"
          required
          name="password"
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

export default Login;
