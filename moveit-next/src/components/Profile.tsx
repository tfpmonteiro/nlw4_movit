import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from './../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/16309244?s=460&u=77111869fe19271d426fb98809a15fba0e9b30cb&v=4" alt="Talita Monteiro" />
      <div>
        <strong>Talita Monteiro</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}</p>
      </div>
    </div>
  );
}