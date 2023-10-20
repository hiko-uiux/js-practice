console.log("No.2");
// Main-Program
// node作成
const list = document.querySelector("main > ul");
const listChild_node = document.createElement("li");
const alink_node = document.createElement("a");
const img_node = document.createElement("img");

listChild_node.textContent = "これです";
alink_node.setAttribute("href", "1.html");
img_node.setAttribute("src", "bookmark.png");
img_node.setAttribute("alt", "ブックマーク");

list.appendChild(listChild_node).appendChild(alink_node).appendChild(img_node);
