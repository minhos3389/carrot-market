import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, watch, handleSubmit } = useForm<LoginForm>();
  // console.log(watch());
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "User name is required",
          minLength: 5,
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
