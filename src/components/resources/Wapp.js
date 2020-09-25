import React, { useState, useEffect } from "react";

const Wapp = ({
  wappNumber,
  setWappNumber,
  currentReach,
  setCurrentReach,
  wappReachPerSecond,
  setWappReachPerSecond
}) => {
  const [
    necessaryReachForPlusOneWapp,
    setNecessaryReachForPlusOneWapp
  ] = useState(560);

  const [wappAverageParticipants, setWappAverageParticipants] = useState(30);

  const addOneWapp = () => {
    setCurrentReach(currentReach - necessaryReachForPlusOneWapp);
    setWappNumber(wappNumber + 1);
  };

  useEffect(() => {
    setNecessaryReachForPlusOneWapp(560 + 20 * wappNumber);
    setWappReachPerSecond((wappNumber * wappAverageParticipants) / 60 / 60);
    // eslint-disable-next-line
  }, [wappNumber, wappAverageParticipants]);

  const upgradeWappParticipants = () => {
    setWappAverageParticipants(wappAverageParticipants * 2);
  };

  return (
    <div className="cattle__area">
      <div className="resources__container">
        <div className="resources__container__title">
          <div>
            <b>Grupos de Wapp ( {wappNumber} )</b>
          </div>
        </div>
        <div className="resources__container__body">
          <div className="resources__container__body__main">
            <div className="resources__container__body__main__info">
              <div>3 posts sobre você a cada hora</div>
              <div>
                Cada grupo tem em média: {wappAverageParticipants} participantes
              </div>
            </div>
            <div className="resources__container__body__main__button">
              <button
                className="buy-button cattle__button"
                onClick={addOneWapp}
                disabled={currentReach < necessaryReachForPlusOneWapp}
              >
                <div>
                  +1 grupo (Alcance necessário: {necessaryReachForPlusOneWapp})
                </div>
              </button>
            </div>
          </div>
          <div className="resources__container__body__upgrades">
            <button
              className="upgrades upgrades__more-friends"
              onClick={upgradeWappParticipants}
            >
              ⬆P
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wapp;
