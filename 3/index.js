console.log("No.3");
// Main-Program
// node検索用関数
const searchNode = (el) => {
  if (document.querySelectorAll(el).length > 1) {
    return document.querySelectorAll(el);
  } else {
    return document.querySelector(el);
  }
};
// node作成用関数
const addNode = (el, node) => {
  el.appendChild(document.createElement(node));
};

// ul追加
const main = searchNode("main");
addNode(main, "ul");

// li*2追加
const list = searchNode("ul");
for (let n = 1; n <= 2; n++) {
  addNode(list, "li");
}
// li*2 > a+img追加
const listNode = searchNode("li");
listNode.forEach((item) => {
  addNode(item, "a");
  addNode(item, "img");
});

const datalist = [
  { href: "a1.html", src: "/img/bookmark.png" },
  { href: "a2.html", src: "/img/message.png" },
];
const list_a = searchNode("li > a");
const list_IMG = searchNode("li > img");

for (let i = 0; i < listNode.length; i++) {
  list_a[i].setAttribute("href", datalist[i].href);
  list_IMG[i].setAttribute("src", datalist[i].src);
  list_a[i].textContent = `a${i + 1}`;
}
