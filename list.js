const shoppinglist = ['Arroz', 'Feijão', 'Carne', 'Massa', 'Biscoito', 'Pão'] (1)

const listEl = document.getElementById('list'); (2)
const searchfield = document.getElementById('searchfield'); (3)

searchfield.addEventListener('input', inputHandler); (4)


for(let i=0; i < shoppinglist.length; i++) { (1)
    let listItems = document.createElement("li"); (2)
    listItems.innerHTML = shoppinglist[i]; (3)
    listEl.appendChild(listItems); (4)
}

function inputHandler() {
    const filteredlist = shoppinglist.filter(el => { (1))
    const listItem = el.toLowerCase(); (2)
    const searchWord = searchfield.Value.toLowerCase(); (3)
    return listItem.includes(searchWord); (4)
   });

}