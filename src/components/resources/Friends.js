import React, { useState, useEffect } from "react";

const Friends = ({
  friendsNumber,
  setFriendsNumber,
  currentReach,
  setCurrentReach
}) => {
  const addOneFriend = () => {
    setCurrentReach(currentReach - necessaryReachForPlusOneFriend);
    setFriendsNumber(friendsNumber + 1);
  };

  const [
    necessaryReachForPlusOneFriend,
    setNecessaryReachForPlusOneFriend
  ] = useState(20);

  useEffect(() => {
    setNecessaryReachForPlusOneFriend(20 + 5 * friendsNumber);
    // eslint-disable-next-line
  }, [friendsNumber]);

  return (
    <div className="friends__area">
      <div className="resources__container">
        <div className="resources__container__title">
          <b>
            Amigos nas redes ({" "}
            {friendsNumber === 1 ? "1, sua mãe" : friendsNumber} )
          </b>
        </div>
        <div className="resources__container__body">
          <div className="resources__container__body__main">
            <div className="resources__container__body__main__info">
              <div>Cada postagem sua, alcança todos os seus amigos</div>
            </div>
            <div className="resources__container__body__main__button">
              <button
                className="buy-button friends__button"
                onClick={addOneFriend}
                disabled={currentReach < necessaryReachForPlusOneFriend}
              >
                <div>
                  +1 amigo (Alcance necessário: {necessaryReachForPlusOneFriend}
                  )
                </div>
              </button>
            </div>
          </div>
          <div className="resources__container__body__upgrades">
            <div className="upgrades upgrades__more-friends"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
