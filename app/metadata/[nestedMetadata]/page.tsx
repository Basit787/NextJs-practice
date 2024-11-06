import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { nestedMetadata: string };
}): Metadata => {
  return {
    title: `Nested Metadata ${params.nestedMetadata}`,
  };
};

const page = ({ params }: { params: { nestedMetadata: string } }) => {
  if (parseInt(params.nestedMetadata) > 500) {
    notFound();
  }
  return (
    <div>
      Enter the number in url to show the nested meta data
      {params.nestedMetadata && <h1>The id is {params.nestedMetadata}</h1>}
    </div>
  );
};

export default page;
