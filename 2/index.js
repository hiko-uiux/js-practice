// DOM-select
const list = document.getElementById("target");

// Information
const infoList1 = {
  li: "",
  a: { href: "1.html", text: "これです" },
  img: { src: "bookmark.png", alt: "ブックマーク" },
};

// Function: create-Node
function createNode(element) {
  return document.createElement(element);
}

// create-Node
const liNode = createNode("li");
const aNode = createNode("a");
const aNodeText = document.createTextNode(infoList1.a.text);
const imgNode = createNode("img");
// add option
imgNode.setAttribute("src", infoList1.img.src);
imgNode.setAttribute("alt", infoList1.img.alt);
aNode.setAttribute("href", infoList1.a.href);

// insert-Node
aNode.appendChild(imgNode);
aNode.append(aNodeText);
liNode.appendChild(aNode);
list.appendChild(liNode);
