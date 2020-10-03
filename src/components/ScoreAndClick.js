import React from "react";

const ScoreAndClick = ({
  currentReach,
  setCurrentReach,
  reachPerSecond,
  friendsNumber
}) => {
  const postButtonAction = () => {
    setCurrentReach(currentReach + friendsNumber);
  };

  //currentReach.toFixed(0)

  const numberDecimalPlaces = number => {
    if (reachPerSecond < 0.1) {
      return number.toFixed(3);
    } else if (reachPerSecond < 1) {
      return number.toFixed(2);
    } else if (reachPerSecond < 10) {
      return number.toFixed(1);
    } else if (reachPerSecond >= 10) {
      return number.toFixed(0);
    }
  };

  return (
    <>
      <div className="reach-score__container">
        <div className="reach-score__value">
          <b>Alcance: {numberDecimalPlaces(currentReach)}</b>
        </div>
        <div className="reach-score__per-second">
          Alcance por segundo (ApS): {numberDecimalPlaces(reachPerSecond)}
        </div>
      </div>
      <div className="post-button__container">
        <button className="post-button" onClick={postButtonAction}>
          Postar
        </button>
      </div>
    </>
  );
};

export default ScoreAndClick;
