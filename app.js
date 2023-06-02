/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
let errorP = document.getElementById("error");
let unorderedList = document.querySelector("#list");
// TODO: Handle the resolved or rejected states of the promise
getList()
  

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
.then((hobbits)=>{
  console.log(hobbits);
  for (let hobbit of hobbits){
    const li = document.createElement('li');
    li.textContent = hobbit;
    unorderedList.appendChild(li);
  }
})
// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
.catch((err)=>{
  console.log(err);
  errorP.textContent = err.message;
})