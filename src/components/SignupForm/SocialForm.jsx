import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";
import Animator from "./Animator";

export default function SocialForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  function onSubmit(data) {
    setSocial(data);
    history.push("/review");
  }
  return (
    <Animator>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animated-form"
        noValidate
      >
        <h2>How can we find you on socials?</h2>
        <input
          defaultValue={social.twitter}
          type="text"
          name="twitter"
          ref={register({ required: true })}
          placeholder="What's your twitter?"
        />
        <p>{errors.twitter && "Twitter account is required."}</p>
        <input
          defaultValue={social.facebook}
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
    </Animator>
  );
}
