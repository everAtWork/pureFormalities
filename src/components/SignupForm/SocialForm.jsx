import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function SocialForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    console.log(data);
    history.push("/social");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>How can we find you on socials?</h2>
      <input
        type="text"
        name="twitter"
        ref={register({ required: true })}
        placeholder="What's your twitter?"
      />
      <p>{errors.twitter && "Twitter account is required."}</p>
      <input
        type="text"
        name="facebook"
        ref={register({
          required: true
        })}
        placeholder="What's your facebook?"
      />
      <p>{errors.facebook && "A facebook account is required."}</p>
      <input type="submit" value="Next" />
    </form>
  );
}
