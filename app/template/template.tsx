import React from "react";

const template = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <p>This is template instead of layout</p>
      {children}
    </div>
  );
};

export default template;
