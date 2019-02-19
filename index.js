
function getFirstSelector(selector){

return document.querySelector(selector)

}


function nestedTarget(){


return document.querySelector("div#nested div.target");

}


function deepestChild() {

  let nodes = document.querySelectorAll('#grand-node div');
  let mostDeep = nodes[nodes.length- 1];
  return mostDeep

}



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
