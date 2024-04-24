import Link from "next/link";
import React from "react";

type Props = {};

const Unauthorized = (props: Props) => {
  return (
    <div
      className="h-screen w-screen flex flex-col
      justify-center items-center p-4"
    >
      <h1 className="text-3xl md:text-6xl">Unauthorized access!</h1>
      <p>Please contact support of your agency owner to get access</p>
      <Link href="/" className="mt-4 bg-primary p-2">
        Back to home
      </Link>
    </div>
  );
};

export default Unauthorized;
