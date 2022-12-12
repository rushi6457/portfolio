import React from 'react';
import GithubStats from '../Components/GithubStats';
import styles from "../Styles/GitStats.module.css"
import gitcalender from "../assets/gitcalender.png"
import GitHubCalendar from 'react-github-calendar'
const GitCalender = () => {
const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
    return (
        <div data-aos="fade-up" id='github'>
            <h2 color='white' className={styles.statsHeadLanguage}>My Github Stats</h2>
        
            <div className={styles.mainStats}>
            <img color='tomato' data-aos="flip-left" className={styles.gitStats}  src="https://github-readme-stats.vercel.app/api?username=rushi6457&show_icons=true&locale=en" alt="rushi6457" />
            <img data-aos="flip-right" className={styles.streakImg}  src="https://github-readme-streak-stats.herokuapp.com/?user=rushi6457&" alt="rushi6457" />
            </div>
            <h3 style={{textAlign:'center',marginBottom:"20px", fontSize:'30px' ,textDecoration:'underline'}}>Git calender</h3>
            {/* <img className={styles.gitcalender} src={gitcalender} alt="" /> */}
            <div className={styles.calender} data-aos="flip-right" >
            <GitHubCalendar style={{margin:'auto' ,color:'tomato' , width:'100%'}}
                username='rushi6457'
                transformData={selectLastHalfYear}
                // hideColorLegend
        />
        </div>
        </div>
    );
    }

export default GitCalender;
