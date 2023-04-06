import { Game } from "@types";
import Link from "next/link";
import { ItemWrapper } from "./styles";

export const GameItem = ({ game }: { game: Game }) => {
  return (
    <ItemWrapper key={game.id}>
      <div>{game.blueTeam.name}</div>
      <div>{game.redTeam.name}</div>
      <div>{game.description}</div>
      <div>
        <Link href={`/game/${game.id}`}>To Game</Link>
      </div>
    </ItemWrapper>
  );
};
