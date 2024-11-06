import { Metadata } from "next";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { template: string };
}): Metadata => {
  return {
    title: `${params.template}`,
  };
};

const page = ({ params }: { params: { template: string } }) => {
  return (
    <div className="text-2xl">
      <h1 className="flex gap-2">
        You add <b>{params.template}</b> in title
      </h1>
      <p>look in the title in the tab</p>
    </div>
  );
};

export default page;
