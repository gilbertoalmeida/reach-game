import React, { useState, useEffect } from "react";
import { Popover, Button, Card } from "antd";

const Cattle = ({
  cattleNumber,
  setCattleNumber,
  currentReach,
  setCurrentReach,
  cattleReachPerSecond,
  setCattleReachPerSecond
}) => {
  const [
    necessaryReachForPlusOneToTheCattle,
    setNecessaryReachForPlusOneToTheCattle
  ] = useState(130);
  const [cattleAverageFriends, setCattleAverageFriends] = useState(5);

  const addOneToTheCattle = () => {
    setCurrentReach(currentReach - necessaryReachForPlusOneToTheCattle);
    setCattleNumber(cattleNumber + 1);
  };

  useEffect(() => {
    setNecessaryReachForPlusOneToTheCattle(130 + 10 * cattleNumber);
    setCattleReachPerSecond((cattleNumber * cattleAverageFriends) / 60 / 60);
    // eslint-disable-next-line
  }, [cattleNumber, cattleAverageFriends]);

  const upgradeCattleFriends = () => {
    setCattleAverageFriends(cattleAverageFriends * 2);
  };

  const cattleUpgradePopoverContent = (
    <div>Alcance necessário: tá de graça agora</div>
  );

  return (
    <div className="cattle__area">
      <div className="resources__container">
        <Card title="Gado" extra={cattleNumber}>
          <div className="resources__container__body">
            <div className="resources__container__body__main">
              <div className="resources__container__body__main__info">
                <div>Membros do gado postam sobre você a cada hora</div>
                <div>
                  As redes de cada um têm em média: {cattleAverageFriends}{" "}
                  amigos
                </div>
              </div>
              <div className="resources__container__body__main__button">
                <button
                  className="buy-button cattle__button"
                  onClick={addOneToTheCattle}
                  disabled={currentReach < necessaryReachForPlusOneToTheCattle}
                >
                  <div>
                    +1 pro gado (Alcance necessário:{" "}
                    {necessaryReachForPlusOneToTheCattle})
                  </div>
                </button>
              </div>
            </div>
            <div className="resources__container__body__upgrades">
              <Popover
                title="Upgrade amigos do gado"
                content={cattleUpgradePopoverContent}
                trigger="hover"
              >
                <Button
                  className="upgrades upgrades__more-friends"
                  onClick={upgradeCattleFriends}
                >
                  ⬆ F
                </Button>
              </Popover>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cattle;
