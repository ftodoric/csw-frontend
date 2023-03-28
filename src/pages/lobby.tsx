import { withAuth } from "@components/withAuth";
import { useAxios } from "@hooks";
import Link from "next/link";

export const LobbyPage = () => {
  const axios = useAxios();

  return (
    <div>
      <Link href="/create">Create a new game</Link>
    </div>
  );
};

export default withAuth(LobbyPage);
