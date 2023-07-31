import styles from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Grade papers", "Clean kitchen", "Wash dishes", "Feed Signora"];
   return (
      <div>
         <h1 className={styles.choresHeading}>Chore List</h1>
         <ol class={styles.choresText}>
            <li>{chores[0]}</li>
            <li>{chores[1]}</li>
            <li>{chores[2]}</li>
            <li>{chores[3]}</li>
         </ol>
      </div>
   );
}