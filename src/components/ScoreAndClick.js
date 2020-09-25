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

  return (
    <>
      <div className="reach-score__container">
        <div className="reach-score__value">
          <b>Alcance: {currentReach}</b>
        </div>
        <div className="reach-score__per-second">
          Alcance por segundo (ApS): {reachPerSecond}
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
