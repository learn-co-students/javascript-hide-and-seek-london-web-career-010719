
function getFirstSelector(selector){
  const result = document.querySelector(selector)
  return result
}

function nestedTarget(){
  const result = document.querySelector('#nested .target')
  return result
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n){
  for (let element of document.querySelectorAll('.ranked-list li')){
    element.innerHTML = parseInt(element.innerHTML) + n
  }
}




//
