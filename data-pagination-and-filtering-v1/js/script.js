/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
/*number of students per page(9)
I used querySelector to select all of the students.
*/
const numbOfStud= 9;
const list = document.querySelector(".student-list");     



function showPage (list, page) {
   const startIndex = (page * numbOfStud) - numbOfStud;
   const endIndex = (page * numbOfStud);
   list.innerHTML = '';
for( let i = 0; i < list.length; i++) {
   if (i >=startIndex && i < endIndex){
      studentList =`
      <li class="student-item cf">
         <div class="student-details">
      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
      <h3>${list[i].name.title}${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
    </div>
  </li> `;
   }
}
list.insertAdjacentElement('beforeend',studentList)
}
//console.log(list)

/**i found a code example for the DOM elements in the chalange of the pet object.
 * aslo found examples of li code in notes of array-of-objects.
 * and copy pasted the li code from the instructions
 * 
 */


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){


//}


// Call function