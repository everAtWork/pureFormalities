import React from "react";
import { Switch, Route } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";
import StepLinks from "./StepLinks";
import SignupFormContext, { SignupFormProvider } from "./SignupFormContext";

export default function SignupForm() {
  return (
    <SignupFormProvider>
      <div className="signup-form">
        <StepLinks />
        <Switch>
          <Route path="/" exact component={ProfileForm} />
          <Route path="/social" component={SocialForm} />
          <Route path="/review" component={ReviewForm} />
        </Switch>
      </div>
    </SignupFormProvider>
  );
}
