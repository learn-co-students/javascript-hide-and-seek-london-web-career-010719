function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  for (let item of document.querySelectorAll('#app ul.ranked-list li')){
    item.innerHTML = parseInt(item.innerHTML) + n
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
