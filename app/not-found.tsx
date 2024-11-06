import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>This is custom error page</p>
      <h1 className="font-bold text-2xl">Error : 404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
