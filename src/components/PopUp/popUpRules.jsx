import React, { useState } from 'react';
import styles from './popUpRules.module.css';
import { RiCloseLine } from 'react-icons/ri';
import { myPlayer } from 'playroomkit';

function PopUp({ setIsOpen }) {

const me = myPlayer();

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader} style={{background: me.state.profile.color}}>
            <h5 className={styles.heading}>Game Rules</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.rulesContainer}>
              <h2>Rules for Citizens of Newcastle</h2>
              <div>
                <strong>Objective:</strong> Become the most influential city
                planner by strategically placing tiles and claiming territories
                in Newcastle.
              </div>

              <div>
                <strong>Gameplay:</strong>
                <div>
                  On their turn, players draw a tile and place it adjacent to
                  existing tiles on the board.
                </div>
                <div>
                  They may then choose to place a meeple on the tile to claim a
                  feature (e.g., road, building).
                </div>
                <div>Meeples can be placed on roads, buildings, or fields.</div>
                <div>
                  Once a feature is completed, the player retrieves their meeple
                  and scores points.
                </div>
              </div>
              <div>
                <strong>Scoring:</strong>
                <div>Completed roads: Score 1 point per tile.</div>
                <div>
                  Completed buildings: Score 2 points per tile plus bonuses for
                  certain features (e.g., cathedral, marketplace).
                </div>
                <div>
                  Fields: Score 3 points per completed city adjacent to the
                  field.
                </div>
              </div>
              <div>
                <strong>End of Game:</strong>
                <div>The game ends when all tiles have been placed.</div>
                <div>
                  Final scoring takes place, including unfinished features.
                </div>
                <div>
                  The player with the highest score wins the game and becomes
                  the master architect of Newcastle!
                </div>
              </div>
            </div>
          </div>
          {/* <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
            Cancel
          </button> */}
        </div>
      </div>
    </>
  );
}

export default PopUp;
