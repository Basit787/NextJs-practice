import Link from "next/link";

const Home = () => {
  return (
    <div>
      This is the main page
      <br />
      <div className="m-5">
        <Link
          href="/link"
          replace
          className="p-2 bg-primary text-primary-foreground rounded text-2xl"
        >
          Go to Link Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
