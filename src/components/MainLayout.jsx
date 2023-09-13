import React from "react";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-[600px]">{children}</div>
    </>
  );
}

export default MainLayout;
