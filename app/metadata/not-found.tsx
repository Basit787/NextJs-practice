import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center leading-9">
        <h1 className="m-5">
          This is custom not found page for metadata
          <hr />
        </h1>
        <h2>Error 404</h2>
        <p>Page not found</p>
      </div>
    </div>
  );
};

export default notFound;
