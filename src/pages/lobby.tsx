import { withAuth } from "@components/withAuth";
import { useUserContext } from "@hooks";

export const LobbyPage = () => {
  const user = useUserContext();

  return <div style={{ backgroundColor: "red" }}>hesoyam</div>;
};

export default withAuth(LobbyPage);
