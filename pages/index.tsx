import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import AuthHomepage from "../components/index/AuthHomepage";
import UnauthHomepage from "../components/index/UnauthHomepage";

const Home: NextPage = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" ? (
        <AuthHomepage />
      ) : (
        <UnauthHomepage />
      )}
    </div>
  );
};

export default Home;
