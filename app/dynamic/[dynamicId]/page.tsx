import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { dynamicId: string } }) => {
  if (parseInt(params.dynamicId) > 500) {
    notFound();
  }
  return (
    <div>
      The dynamic route id is : {params.dynamicId}
      <br />
      <Link href={`/dynamic/${params.dynamicId}/1`} replace>
        {" "}
        {/* using replace can skip this stage and jump to previous one directly*/}
        Sub id :1
      </Link>
      <br />
      <Link href={`/dynamic/${params.dynamicId}/2`} replace>
        Sub id :2
      </Link>
      <br />
      <Link href={`/dynamic/${params.dynamicId}/3`} replace>
        Sub id :3
      </Link>
      <br />
      <Link href={`/dynamic/${params.dynamicId}/4`} replace>
        Sub id :4
      </Link>
    </div>
  );
};

export default page;
