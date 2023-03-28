import { withAuth } from "@components/withAuth";
import { useAxios } from "@hooks";

export const LobbyPage = () => {
  const axios = useAxios();

  const handleCreateGame = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/games");
    } catch (err) {
      console.log("%clog | err", "color: red;");
    }
  };

  return (
    <div style={{}}>
      <button onClick={handleCreateGame}>create a game</button>
    </div>
  );
};

export default withAuth(LobbyPage);
