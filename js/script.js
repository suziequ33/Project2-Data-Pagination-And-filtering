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
Put linkList at the top in the global scope.
Dont forget to add a space between the .name.title and .name.first and .name.last
*/
const numbOfStud= 9;
const listStudents = document.querySelector(".student-list");     
const linkList = document.querySelector(".link-list");


function showPage (list, page) {
   const startIndex = (page * numbOfStud) - numbOfStud;
   const endIndex = (page * numbOfStud);
   listStudents.innerHTML = '';
for( let i = 0; i < list.length; i++) {
   if (i >=startIndex && i < endIndex){
    studentList =`
   <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
       <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
       <span class="email">${list[i].email}</span>
      </div>
       <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
       </div>
    </li> `;
   
listStudents.insertAdjacentHTML('beforeend',studentList)
   }
}
}

//console.log(list) test code

/**i found a code example for the DOM elements in the challenge of the pet object.
 * also found examples of li code in notes of array-of-objects.
 * and copy pasted the li code from the instructions
 * could see why code wasnt working and noticed that i was using .insertAdjcentElement
 * Changed to .insertAdjecentHTML the right code.
 */
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   const paginPage = Math.ceil(list.length/numbOfStud);
   linkList.innerHTML = '';

for(let i = 1; i <= paginPage; i++){  
   pageBtn = `<li><button type="button">${i}</button></li>`;

linkList.insertAdjacentHTML('beforeend', pageBtn)

   const firstButton= document.querySelector('button');
   firstButton.setAttribute('class', 'active');
    linkList.addEventListener('click', e => {
      if(e.target.tagName ==='BUTTON'){
         const button = e.target;
         const removeBtn = document.querySelector('.active');
         removeBtn.className = '';
         button.className = 'active';
         const btnDisplay = button.textContent;
         showPage(list,btnDisplay);
      }
   });
 }
}

/** 63- i used Math.ceil because it rounds up.
*i found examples of pagination on website stack overflow.
* set pagination button/give it a class of active. found in notes/ Change element attributes.
* looked more into active on w3schools.com to understand more.
*after peer review(Thanks Brian Jensen) found out i didnt have the correct order for the 
*active class name. Shoud be: we get active wiht querySelector, then add it to empty string;
* then button.className to active. found examples in notes Pseudo-Classes.
* Note to self look more in the dev tools and expand them.....
*found examples of e.target.tagName in traversing up the DOM with parentNode.
*when checked found i only got one student to load and page 5 found i needed to move
*the curly brace(68) of the for loop to include the linkList.insertAdjecentHTML.
*again students would be on page but i had the whole list or only one went back though code and found 
*listStudents.insertAdjacentHTML(46) was in the wrong bracket. it needs to be within all of them.
*not outside the for loop or the if statement. found answer in notes: 
*Insert HTML at Specified Positions.
*/
// Call function
showPage(data,1);
addPagination(data);

