"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const Title = () => {
  const [url, setUrl] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const router = useRouter();

  const handleUrl = () => {
    router.push(`/title/${url}`);
  };

  const handleAbsolute = () => {
    router.push("/title/absolute");
  };

  return (
    <div>
      This is for understanding title in deep
      <h1>1) Add any endpoint after title to observe dynamic title</h1>
      <Input
        type="search"
        placeholder="Enter the endpoint to perform dynamic title"
        value={url}
        onChange={handleChange}
      />
      <button
        className="p-2 bg-primary text-primary-foreground rounded"
        onClick={handleUrl}
      >
        GO
      </button>
      <h1>2) Tap &quot;Absolute&quot; to visit absolute route</h1>
      <button
        className="p-2 bg-primary text-primary-foreground rounded"
        onClick={handleAbsolute}
      >
        Absolute
      </button>
    </div>
  );
};

export default Title;
