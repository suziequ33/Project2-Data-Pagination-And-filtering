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
/*
*/
const numbOfStud= 9;
const ul = document.querySelector(".student-list");     
                            


function pages (list, page) {
   const startIndex = (page * numbOfStud) - numbOfStud;
   const endIndex = (page * numbOfStud);
   ul.textContent = '';
for( let i = 0; i < ul.length; i++) {
   ul[i].style.display = '';
   if (i >=startIndex && i < endIndex){


   



   ul +=`<li>${list[i]}</li>`;
   ul.insertAdjacentElement(
      'beforeend',

   )
   }
}
}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
