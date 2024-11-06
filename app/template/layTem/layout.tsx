import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <p>This is layout</p>
      {children}
    </div>
  );
};

export default layout;
