import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";

export default function SignupForm() {
  return (
    <div className="signup-form">
      <Switch>
        <Route path="/" exact component={ProfileForm} />
        <Route path="/social" component={SocialForm} />
        <Route path="/review" component={ReviewForm} />
      </Switch>
    </div>
  );
}
