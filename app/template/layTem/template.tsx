import React from "react";

const template = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <p>This is template</p>
      {children}
    </div>
  );
};

export default template;
