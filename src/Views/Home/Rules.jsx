import styles from './Rules.module.css'

function Rules() {
  return (
    <div className={styles.rulesContainer}>
      <h2 className={styles.subheading}>Rules for City Zen</h2>
      <div>
        <strong className={styles.subheading}>Objective:</strong> Become the most influential city planner
        by strategically placing tiles and claiming territories in Newcastle.
      </div>
     
      <div>
        <strong className={styles.subheading}>Gameplay:</strong>
        <div>
          On their turn, players draw a tile and place it adjacent to existing
          tiles on the board.
        </div>
        <div>
          They may then choose to place a meeple on the tile to claim a feature
          (e.g., road, building).
        </div>
        <div>Meeples can be placed on roads, buildings, or fields.</div>
        <div>
          Once a feature is completed, the player retrieves their meeple and
          scores points.
        </div>
      </div>
      <div>
        <strong className={styles.subheading}>Scoring:</strong>
        <div>Completed roads: Score 1 point per tile.</div>
        <div>
          Completed buildings: Score 2 points per tile plus bonuses for certain
          features (e.g., cathedral, marketplace).
        </div>
        <div>Fields: Score 3 points per completed city adjacent to the field.</div>
      </div>
      <div>
        <strong className={styles.subheading}>End of Game:</strong>
        <div>The game ends when all tiles have been placed.</div>
        <div>Final scoring takes place, including unfinished features.</div>
        <div>
          The player with the highest score wins the game and becomes the master
          architect of Zen!
        </div>
      </div>
    </div>
  );
}

export default Rules;