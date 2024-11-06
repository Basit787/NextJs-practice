import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    // ? absolute: "Absolute Title",
    // this is the main title, if we add this it will overide default title

    default: "Deep Title", // this is the main title
    template: "Dynamic Title | %s", // used to add dynamic title, here %s defines the value of dynamic title
  },
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default layout;
