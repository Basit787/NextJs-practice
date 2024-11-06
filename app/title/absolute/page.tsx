import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Absolute title",
  },
};

const page = () => {
  return <div>This is absolute title, though it will overide all titles</div>;
};

export default page;
