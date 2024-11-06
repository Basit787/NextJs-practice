import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is page f4
      <br />
      <Link href="/f1/f3">F3</Link> (..) to match segments one level above
      <br />
      <Link href="/about">about</Link> ( ..) to match segments from the root app
      directory
    </div>
  );
};

export default page;
