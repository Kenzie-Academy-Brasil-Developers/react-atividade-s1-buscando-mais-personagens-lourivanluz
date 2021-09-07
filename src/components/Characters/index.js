import { useState } from "react";
import { CardDeteils } from "../CardDeteils";
import { CharCard } from "../CharCard";
import "./style.css";

export function Characters({ data }) {
  //criar uma funçao que recebe o elemento clicado e os dados para quele elemento
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});

  const showInfo = (item) => {
    setIsVisibleInfo(isVisibleInfo ? false : true);
    setCharacterInfo(item);
  };

  return (
    <>
      <ul className="cardList">
        {data.map((item) => (
          <li key={item.id} onClick={() => showInfo(item)}>
            <CharCard char={item} />
          </li>
        ))}
        {isVisibleInfo ? (
          <div className="info" onClick={() => showInfo("")}>
            <CardDeteils infoCard={characterInfo} />
          </div>
        ) : null}
      </ul>
    </>
  );
}
