import React, { useState, useEffect } from "react";
import ScoreAndClick from "./ScoreAndClick";
import Friends from "./resources/Friends";
import Cattle from "./resources/Cattle";
import { useInterval } from "../utils";
import Wapp from "./resources/Wapp";

const Game = () => {
  window.scrollTo(0, 0);

  const [currentReach, setCurrentReach] = useState(1000);
  const [reachPerSecond, setReachPerSecond] = useState(0);
  const [cattleReachPerSecond, setCattleReachPerSecond] = useState(0);
  const [wappReachPerSecond, setWappReachPerSecond] = useState(0);
  const [friendsNumber, setFriendsNumber] = useState(1);
  const [cattleNumber, setCattleNumber] = useState(0);
  const [wappNumber, setWappNumber] = useState(0);

  /* Starts the ReachPerSecond loop */
  useInterval(() => {
    setCurrentReach(currentReach + reachPerSecond);
  }, 1000);

  useEffect(() => {
    setReachPerSecond(cattleReachPerSecond + wappReachPerSecond);
  }, [cattleReachPerSecond, wappReachPerSecond]);

  return (
    <div className="main-game">
      <ScoreAndClick
        currentReach={currentReach}
        setCurrentReach={setCurrentReach}
        reachPerSecond={reachPerSecond}
        friendsNumber={friendsNumber}
      />
      <Friends
        friendsNumber={friendsNumber}
        setFriendsNumber={setFriendsNumber}
        currentReach={currentReach}
        setCurrentReach={setCurrentReach}
      />
      <Cattle
        cattleNumber={cattleNumber}
        setCattleNumber={setCattleNumber}
        currentReach={currentReach}
        setCurrentReach={setCurrentReach}
        cattleReachPerSecond={cattleReachPerSecond}
        setCattleReachPerSecond={setCattleReachPerSecond}
      />

      <Wapp
        wappNumber={wappNumber}
        setWappNumber={setWappNumber}
        currentReach={currentReach}
        setCurrentReach={setCurrentReach}
        wappReachPerSecond={wappReachPerSecond}
        setWappReachPerSecond={setWappReachPerSecond}
      />
    </div>
  );
};

export default Game;
