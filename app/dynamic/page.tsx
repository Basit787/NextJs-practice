import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>
        This is dynamic route page, enter the number in url to get the dynamic
        route
      </h1>
      <Link href="/dynamic/1">Dynamic ID: 1</Link>
      <br />
      <Link href="/dynamic/2">Dynamic ID: 2</Link> <br />
      <Link href="/dynamic/3">Dynamic ID: 3</Link> <br />
      <Link href="/dynamic/4">Dynamic ID: 4</Link> <br />
    </div>
  );
};

export default page;
