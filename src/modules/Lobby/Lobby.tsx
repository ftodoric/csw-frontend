import { LogoutIcon } from "@components/Icons";
import { useAxios, useLogout } from "@hooks";
import { useEffect, useState } from "react";
import { CreateWrapper, LogoutWrapper } from "./styles";
import { useRouter } from "next/router";
import { Game } from "@types";
import { GameItem } from "./GameItem/GameItem";
import Link from "next/link";
import { ItemWrapper } from "./GameItem/styles";

export const Lobby = () => {
  const axios = useAxios();
  const logout = useLogout();
  const router = useRouter();

  const [username, setUsername] = useState();
  const [games, setGames] = useState<Game[]>();

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/me").then((res) => {
      setUsername(res.data.username);
    });

    axios.get("http://localhost:8000/api/games").then((res) => {
      setGames(res.data);
    });
  }, [axios]);

  const handleLogout = () => {
    logout.mutate();
    router.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "600px",
          width: "100%",
          height: "50px",
          backgroundColor: "firebrick",
          color: "#f4f4f4",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontStyle: "italic" }}>Cyber Warfare Game</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "20px" }}>Hi, {username}</div>
          <LogoutWrapper onClick={handleLogout}>
            <LogoutIcon width="24px" height="24px" fill="#f4f4f4" />
          </LogoutWrapper>
        </div>
      </div>

      <div style={{ maxWidth: "600px", width: "100%", marginTop: "50px" }}>
        {games?.length ? (
          <>
            <ItemWrapper>
              <div>ID</div>
              <div>Blue Team</div>
              <div>Red Team</div>
              <div>Description</div>
              <div>Link to the game</div>
            </ItemWrapper>
            {games.map((game) => {
              return <GameItem key={game.id} game={game} />;
            })}
          </>
        ) : (
          "You havent play any games."
        )}
      </div>

      <CreateWrapper>
        <Link href="/create">Create a new game</Link>
      </CreateWrapper>
    </div>
  );
};
