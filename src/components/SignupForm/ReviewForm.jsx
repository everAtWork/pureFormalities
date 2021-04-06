import React from "react";
import { useSignupForm } from "./SignupFormContext";
import { motion } from "framer-motion";
import Animator from "./Animator";
export default function ReviewForm() {
  const { profile, social } = useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();

    const data = { ...profile, ...social };
    // axios.post('url-goes-here', data)
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit} className="animated-form">
        <h2>Review all your info</h2>
        <p>
          <strong>Name</strong>: {profile.name}
        </p>
        <p>
          <strong>Email</strong>: {profile.email}
        </p>
        <p>
          <strong>Twitter</strong>: {social.twitter}
        </p>
        <p>
          <strong>Facebook:</strong>: {social.facebook}
        </p>
        <input type="submit" value="Submit all info" />
      </form>
    </Animator>
  );
}
