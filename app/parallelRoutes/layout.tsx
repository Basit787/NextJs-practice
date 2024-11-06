import React from "react";

const layout = ({
  children,
  users,
  data,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  data: React.ReactNode;
  notifications: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{data}</div>
        </div>
        <div className="flex flex-1">
          {notifications}
        </div>
      </div>
    </div>
  );
};

export default layout;
