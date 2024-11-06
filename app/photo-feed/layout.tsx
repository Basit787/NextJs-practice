import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modal",
  description: "Modal",
};

export default function Layout({
  children,
  modal,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
