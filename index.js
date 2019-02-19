
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i=0, l1=rankedLists.length; i<l1; i++) {
    let children = rankedLists[i].children

    for (let j=0, l2=children.length; j<l2; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML)+n;
    }
  }

}

function deepestChild(){
  let parent = document.querySelector('#grand-node')
  let child = parent.children[0]

  while (child) {
    parent = child;
    child = parent.children[0];
  }

  return parent;
}
