import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Loading, Container } from "../components";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container className="mt-16 sm:mt-32">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
