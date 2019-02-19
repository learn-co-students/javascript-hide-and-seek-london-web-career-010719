
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  for (let element of document.querySelectorAll('.ranked-list li')){
    element.innerHTML = parseInt(element.innerHTML) + n
  }
}
