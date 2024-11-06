"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const Pathname = usePathname();

  const navLinks = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Forget Password",
      href: "/forgetPassword",
    },
  ];

  return (
    <div>
      {navLinks.map((link, index) => {
        const isActive = Pathname.startsWith(link.href);
        return (
          <span
            className={`${
              isActive ? "font-bold text-sky-600" : " text-green-500"
            } m-5`}
            key={index}
          >
            <Link href={link.href} key={index} replace>
              {link.name}
            </Link>
          </span>
        );
      })}
      {children}
    </div>
  );
};

export default Layout;
