function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function deepestChild() {
    let grandNode = document.querySelector('#grand-node');
    let childNode = grandNode.children[0];
    
    while(childNode) {
        grandNode = childNode
        childNode = grandNode.children[0];
    }
    return grandNode;
}

function increaseRankBy(n) {
    let rankedList = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedList.length; i++) {
        let innerList = rankedList[i].children

        for (let j = 0; j < innerList.length; j++) {
            innerList[j].innerHTML = parseInt(innerList[j].innerHTML) + n
        }
    }
    
}

