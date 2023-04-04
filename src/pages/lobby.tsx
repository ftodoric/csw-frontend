import { withAuth } from "@components/withAuth";
import { Lobby } from "@modules/Lobby";

export const LobbyPage = () => {
  return <Lobby />;
};

export default withAuth(LobbyPage);
