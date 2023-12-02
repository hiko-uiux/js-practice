// Must1:DOM-select
const list = document.getElementById("target");

// Must2:NODE-create
const infoList = {
  li: "",
  a: { href: "1.html", text: "これです" },
  img: { src: "bookmark.png", alt: "ブックマーク" },
};

const propNames = Object.keys(infoList);
let nodeList = [];
propNames.forEach((item) => {
  nodeList.push(document.createElement(item));
});

// Want:setAttr-function
function addAttr(num, attr) {
  nodeList[num].setAttribute(attr, infoList[propNames[num]][attr]);
  return nodeList[num];
}
// img-create
let imgNode = addAttr(2, "src");
imgNode = addAttr(2, "alt");
// a-create
let aNode = addAttr(1, "href");
aNode.appendChild(imgNode);
const aNodeText = document.createTextNode(infoList.a.text);
aNode.append(aNodeText);
// li-create
nodeList[0].appendChild(aNode);
let liNode = nodeList[0];

// Must3:NODE-insert
list.appendChild(liNode);
