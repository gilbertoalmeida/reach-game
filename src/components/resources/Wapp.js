import React, { useState, useEffect } from "react";
import { Popover, Button, Card } from "antd";

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

  const [wappAverageParticipants, setWappAverageParticipants] = useState(100);

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

  const wappUpgradePopoverContent = (
    <div>Alcance necessário: tá de graça agora</div>
  );

  return (
    <div className="cattle__area">
      <div className="resources__container">
        <Card title="Grupos de Wapp" extra={wappNumber}>
          <div className="resources__container__body">
            <div className="resources__container__body__main">
              <div className="resources__container__body__main__info">
                <div>3 posts sobre você a cada hora</div>
                <div>
                  Cada grupo tem em média: {wappAverageParticipants}{" "}
                  participantes
                </div>
              </div>
              <div className="resources__container__body__main__button">
                <button
                  className="buy-button cattle__button"
                  onClick={addOneWapp}
                  disabled={currentReach < necessaryReachForPlusOneWapp}
                >
                  <div>
                    +1 grupo (Alcance necessário: {necessaryReachForPlusOneWapp}
                    )
                  </div>
                </button>
              </div>
            </div>
            <div className="resources__container__body__upgrades">
              <Popover
                title="Upgrade participantes dos grupos"
                content={wappUpgradePopoverContent}
                trigger="hover"
              >
                <Button
                  className="upgrades upgrades__more-friends"
                  onClick={upgradeWappParticipants}
                >
                  ⬆ P
                </Button>
              </Popover>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Wapp;
