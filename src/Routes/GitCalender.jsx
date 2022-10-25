import React from 'react';
import GithubStats from '../Components/GithubStats';
import styles from "../Styles/GitStats.module.css"
import gitcalender from "../assets/gitcalender.png"
const GitHubCalendar = require("github-calendar")
const GitCalender = () => {
    return (
        <div>
            <h2 className={styles.statsHeadLanguage}>My Github Stats</h2>
            {/* <GithubStats 
            width={'500px'}
            className={styles.languages}
            username="rushi6457"
            /> */}
            <div className={styles.mainStats}>
            <img   className={styles.languages} src="https://github-readme-stats.vercel.app/api/top-langs?username=rushi6457&show_icons=true&locale=en&layout=compact" alt="rushi6457" />
            {/* <GitHubCalendar username='rushi6457'/> */}
            <img className={styles.gitStats}  src="https://github-readme-stats.vercel.app/api?username=rushi6457&show_icons=true&locale=en" alt="rushi6457" />
            <img className={styles.streakImg}  src="https://github-readme-streak-stats.herokuapp.com/?user=rushi6457&" alt="rushi6457" />
            </div>
            <h3 style={{textAlign:'center' ,padding:'10px' , fontSize:'30px' ,textDecoration:'underline'}}>Git calender</h3>
            <img className={styles.gitcalender} src={gitcalender} alt="" />
        </div>
    );
}

export default GitCalender;
