import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import React from "react";

const SignedInItems = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="flex flex-col items-center justify-center h-screen">
          <RedirectToSignIn />
        </div>
      </SignedOut>
      <SignedIn>{children}</SignedIn>
    </ClerkProvider>
  );
};

export default SignedInItems;
