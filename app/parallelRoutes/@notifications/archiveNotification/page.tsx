import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <div>Archived Notifications Page</div>
      <Link href="/parallelRoutes">Go to Notifications</Link>
    </Card>
  );
};

export default page;
