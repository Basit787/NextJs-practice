import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is page F1
      <br />
      click below routes to navigate intercepting routes
      <br />
      <Link href="/f1/f2">F2</Link> (.) to match segments on the same level
      <br />
      <Link href="/f1/f4">F4</Link> (..) and (...)
    </div>
  );
};

export default page;
