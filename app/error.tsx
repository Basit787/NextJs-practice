"use client";

const Error = ({
  error,
  reset,
}: Readonly<{ error: Error; reset: () => void }>) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset} className="bg-secondary p-2 rounded">
        Reset
      </button>
    </div>
  );
};

export default Error;
