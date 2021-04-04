import React from "react";
import { SignupFormContext } from "./SignupFormContext";

export function SignupFormProvider({ children }) {
  return (
    <SignupFormContext.Provider value={{ message: "hello!" }}>
      {children}
    </SignupFormContext.Provider>
  );
}
