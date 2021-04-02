import React from "react";
import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Tell us about yourself</h2>
      <input
        type="text"
        name="name"
        ref={register}
        placeholder="What's your name?"
      />
      <input
        type="email"
        name="email"
        ref={register}
        placeholder="What's your email?"
      />
      <input type="submit" value="Next" />
    </form>
  );
}
