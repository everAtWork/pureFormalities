import React, { createContext } from "react";

export const SignupFormContext = createContext();

export function SignupFormProvider({ children }) {
  return (
    <SignupFormContext.Provider value={{ message: "hello!" }}>
      {children}
    </SignupFormContext.Provider>
  );
}
