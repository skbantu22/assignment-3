// set date
const d = new Date();
const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
const dateonly = d.toLocaleDateString('en-US', options);
document.getElementById("change-date").innerText = dateonly;



function handleTaskCompletion(btnId, textId) {
  // Task assignment -- decrement task count
  const taskBtn = parseFloat(document.getElementById("task-btn").innerText); //this is  constent not chnge in function ()
  //   console.log(taskBtn);
  // tastbtn ar value 1 komailam
  document.getElementById("task-btn").innerText = taskBtn - 1; //this is  constent not chnge in function ()

  // tast assgiment ++ inver value nilam
  const taskPlusBtn = parseFloat(
    document.getElementById("task-plus-btn").innerText
  ); //this is  constent not chnge in function ()
  //   console.log(taskPlusBtn);
  // taskplusbtn ar value 1 barilm
  document.getElementById("task-plus-btn").innerText = taskPlusBtn + 1; //this is  constent not chnge in function ()

  // Print the current time/date
  const onTime = new Date().toLocaleString();
  const onlyTime = onTime.slice(9,20); 
 
  const onlyDate=onTime.slice(0,8);
  // const onlyDate = onTime.toDateString();
  // document.getElementById("change-date").innerText = onlyDate;

  // Get the task text
  const textOne = document.getElementById(textId).innerText;

  // Create the comment message
  const newComment = `You have completed the task ${textOne} on ${onlyTime}`;
  console.log(newComment);

  // Select the parent node and create a new paragraph
  const addParentNode = document.getElementById("add-comment");
  const addComment = document.createElement("p");
  addComment.classList.add("bg-gray-300");
  addComment.classList.add("rounded-md");
  addComment.classList.add("p-2");

  addComment.innerText = newComment;

  // Append the new paragraph to the parent node
  addParentNode.appendChild(addComment);

  // Alert user about the update
  alert("Board updated successfully!");

  // Disable the complete button and change its appearance
  const btnOne = document.getElementById(btnId);
  btnOne.disabled = true;
  btnOne.style.cursor = "not-allowed";

  // Additional alert if task count reaches 5
  if (taskBtn === 1) {
    alert("All Task is complite");
  }
}

// Attach event listener to button
document.getElementById("btn-one").addEventListener("click", function () {
  handleTaskCompletion("btn-one", "text-one");
});
// 2nd call
document.getElementById("btn-two").addEventListener("click", function () {
  handleTaskCompletion("btn-two", "text-two");
});
// 3rd call
document.getElementById("btn-three").addEventListener("click", function () {
  handleTaskCompletion("btn-three", "text-three");
});
// 4th call
document.getElementById("btn-four").addEventListener("click", function () {
  handleTaskCompletion("btn-four", "text-four");
});
// 5th call
document.getElementById("btn-five").addEventListener("click", function () {
  handleTaskCompletion("btn-five", "text-five");
});
// 6th call
document.getElementById("btn-six").addEventListener("click", function () {
  handleTaskCompletion("btn-six", "text-six");
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const imageElement = document.getElementById("my-image");

imageElement.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

// history clear
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("add-comment").innerText = "";
  // this will clear the history
});

// new page come
document.getElementById("next-btn").addEventListener("click", function () {
  window.location.href = "new.html";
});

// index page back
// document.getElementById("back").addEventListener("click", function () {

//   window.location.replace = "index.html";
// });
const backBtn=document.querySelector("#back")
backBtn.addEventListener("click",()=>
window.location.replace("index.html"))



