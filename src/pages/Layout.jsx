import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components";

function Layout() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {loader ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <Container className="mt-16">
              <Outlet />
            </Container>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
