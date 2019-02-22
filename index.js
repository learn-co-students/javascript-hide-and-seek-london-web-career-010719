//Define a function `getFirstSelector(selector)`
// accepts a selector and returns the first element that matches

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}


function deepestChild() {
  let node = document.getElementById('grand-node');
  let childNode = node.children[0];

  while (childNode) {
    node = childNode;
    childNode = node.children[0];
  }
  return node;
}
