"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Tanvir Shafi
   Date:   2017-03-01
   
      
*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();
   // we are counting down till the new years day
   let nextYear = currentDay.getFullYear()+1;
   
   let newYearsdayinMilisec = new Date("Jan 1, "+nextYear+" 00:00:00").getTime();
   let currentDayinMilisec = new Date().getTime();
   let difference = (newYearsdayinMilisec - currentDayinMilisec);
   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "\n" + timeStr; //use \n for line break
   /* Calculate the days until January 1st */
   let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
   //display days
   document.getElementById("days").innerHTML = daysLeft;
   /* Calculate the hours left in the current day */
   let hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   // display hours
   document.getElementById("hrs").innerHTML = hoursLeft;
   /* Calculate the minutes left in the current hour */
   let minsLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   // display mins
   document.getElementById("mins").innerHTML = minsLeft;
   /* Calculate the seconds left in the current minutes */
   let secsLeft = Math.floor((difference % (1000 * 60)) / 1000);
   //display seconds
   document.getElementById("secs").innerHTML = secsLeft;
}
