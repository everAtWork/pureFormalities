import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function StepLinks() {
  const { profile, social } = useSignupForm();

  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);
  return (
    <div className="step-links d-flex flex-row justify-content-around">
      <NavLink to="/" exact>
        Profile <span />
        {isProfileDone ? "👍" : "👎"}
      </NavLink>
      {isProfileDone ? (
        <NavLink to="/social">
          Social <span />
          {isSocialDone ? "👍" : "👎"}
        </NavLink>
      ) : (
        <a>
          Social <span />
        </a>
      )}
      {isProfileDone && isSocialDone ? (
        <NavLink to="/review" className="float-end">
          Review <span />
        </NavLink>
      ) : (
        <a className="float-end">
          Review <span />
        </a>
      )}
    </div>
  );
}
