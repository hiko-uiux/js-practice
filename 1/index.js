console.log("No.1");
// Main-Program
const list = document.querySelector("main > ul");
const listChild_node = "<li>これです</li>";
list.insertAdjacentHTML("afterbegin", listChild_node);
