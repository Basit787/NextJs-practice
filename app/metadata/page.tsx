import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Metadata",
};

const page = () => {
  return (
    <div>
      <h1>Metadata</h1>
      Check the title in the head of the page
      <p>Add the &quot;/id&quot; for nested metadata</p>
    </div>
  );
};

export default page;
