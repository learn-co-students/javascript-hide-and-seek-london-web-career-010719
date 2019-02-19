import { listenerCount } from "cluster";
import { prototype } from "mocha";

function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const lists = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < lists.length; i++){
        lists[i].innerHTML = (parseInt(lists[i].innerHTML) + n).toString()
    }
}

// function deepestChild() {
//     let findChild
//     let deepener = "div"
//     do {
//         findChild = document.querySelector(`#grand-node ${deepener}`)
//         deepener = deepener + " div"
//     } while (findChild === document.querySelector(`#grand-node div`))
//     return findChild
// }

function deepestChild() {
    let node = document.querySelector(`#grand-node`)
    let nextNode = node.children[0]

    while (nextNode) {
        node = nextNode
        nextNode = node.children[0]
    }
    return node
}