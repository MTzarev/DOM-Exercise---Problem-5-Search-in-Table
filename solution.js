function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll(`tbody tr`);

   function onClick() {
      let input = document.querySelector(`#searchField`).value.toLocaleLowerCase();
      for (let row of rows) {
         if (row.textContent.toLocaleLowerCase().includes(input)&& input !== "") {
            row.setAttribute(`class`, `select`);
         }
         else {
            row.removeAttribute(`class`);
           
         }
      }
   }
  
} 