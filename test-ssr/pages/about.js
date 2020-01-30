import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <h3>about page</h3>
      <Link href="/">
        <a>to Home</a>
      </Link>
    </div>
  );
};

export default about;
