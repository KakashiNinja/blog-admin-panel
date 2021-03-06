import React, {
  useState,
  useEffect,
} from "react";
import Head from "next/head";

import Explore from "../components/Explore";
import Sidebar from "../components/Sidebar";

const Container = ({
  userAuth,
}) => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <Explore />
    </div>
  );
};

export default function Home() {
  const [
    userAuth,
    setUserAuth,
  ] = useState(false);

  useEffect(() => {
    const user =
      localStorage.getItem(
        "userAuth"
      );
    if (user) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Explore</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      {/* {!userAuth ? <Login /> : <Container userAuth={userAuth} />} */}
      <Container
        userAuth={userAuth}
      />
    </>
  );
}
