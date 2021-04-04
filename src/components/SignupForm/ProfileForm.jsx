import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { SignupFormContext } from "./SignupFormContext";

export default function ProfileForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { message } = useContext(SignupFormContext);

  function onSubmit(data) {
    console.log(data);
    history.push("/social");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Tell us about yourself</h2>
      <input
        type="text"
        name="name"
        ref={register({ required: true })}
        placeholder="What's your name?"
      />
      <p>{errors.name && "Name is required."}</p>
      <input
        type="email"
        name="email"
        ref={register({
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
        placeholder="What's your email?"
      />
      <p>{errors.email && "A valid email is required."}</p>
      <input type="submit" value="Next" />
    </form>
  );
}
