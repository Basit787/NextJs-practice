import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <div>Notifications Page</div>
      <Link href="/parallelRoutes/archiveNotification">Go To Archived</Link>
    </Card>
  );
};

export default page;
