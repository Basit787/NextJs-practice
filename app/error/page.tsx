import React from "react";

const page = () => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 2);
  };

  const random = getRandomInt();

  if (random === 1) {
    throw new Error("The custom error look like this");
  }

  return (
    <div>
      This is without error page
      <p>Refresh continsly to get the error</p>
    </div>
  );
};

export default page;
