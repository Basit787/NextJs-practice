"use client";
import { useRouter } from "next/navigation";

const TempLay = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/template/layTem");
  };
  return (
    <div>
      <p>This is template page</p>
      <p>Press the button to demontrate the template and layout together</p>
      <button onClick={handleClick} className="bg-sky-600 p-2 m-2 rounded-md">
        Template and Layout together
      </button>
    </div>
  );
};

export default TempLay;
