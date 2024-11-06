"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import data from "@/utils/data";

const LinkRouter = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
  };

  const navLinks = data.navMain[0].items;

  const GetNavLinks = () => {
    return navLinks.map(
      (link: { title: string; url: string }, index: number) => (
        <span key={index} className="flex gap-2">
          <h1>{index + 1 + ")"}</h1>
          <Link href={link.url}>{link.title}</Link>
        </span>
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center m-5">
        <p>To return to the Home page press below button</p>
        <button
          className="p-2 bg-primary rounded text-primary-foreground m-2"
          onClick={handleClick}
        >
          Home
        </button>
      </div>
      <h1>
        Though we perform the <i>Link</i> based navigation using{" "}
        <u>
          <i>
            <strong>&quot;next/link&quot;</strong>
          </i>
        </u>
        <br /> Tap below links to navigate diffrent pages
      </h1>
      <div>
        <GetNavLinks />
      </div>
    </div>
  );
};

export default LinkRouter;
