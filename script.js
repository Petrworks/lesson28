const addInput = document.querySelector('.add__input');
const addBtn = document.querySelector('.add__btn');
const itemsCont = document.querySelector('.items-cont');
let localst = JSON.parse(localStorage.getItem('localData')) || [];

function render() {
  itemsCont.innerHTML = '';

  for (let i = 0; i < localst.length; i++) {
    let pos = i;

    const item = document.createElement('div');
    item.classList.add('item');

    let itemText = document.createElement('div');
    itemText.classList.add('item__text');
    const message = document.createTextNode(localst[i]);
    itemText.appendChild(message);

    let button = document.createElement('button');
    button.classList.add('item__delBtn');
    let buttonName = document.createTextNode('Del');
    button.appendChild(buttonName);
    button.setAttribute('onclick', 'delItem(' + pos + ')');
    console.log(pos);

    let editButton = document.createElement('button');
    editButton.classList.add('item__editBtn');
    let edButtonName = document.createTextNode('Edit');
    editButton.appendChild(edButtonName);
    editButton.setAttribute('onclick', 'editItem(' + pos + ')');

    let btnWrap = document.createElement('div');
    btnWrap.classList.add('btn-wrap');
    itemText.appendChild(btnWrap);

    item.appendChild(itemText);
    btnWrap.appendChild(button);
    // btnWrap.appendChild(editButton);
    // item.insertBefore(editButton, button);
    itemsCont.appendChild(item);
  }
}
render();

function addItem() {
  let item = addInput.value;
  localst.push(item);
  addInput.value = '';
  render();
  saveInLocalst();
}

addBtn.onclick = addItem;

function delItem(pos) {
  localst.splice(pos, 1);
  render();
  saveInLocalst();
}

// function editItem(pos) {
//   const itemNewText = localst[pos];
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.value = itemNewText;
//   editButton.addEventListener('click', function () {
//     let editText = input.value;
//     if (editText) {
//       localst[pos] = editText;
//       render();
//       saveInLocalst();
//     }
//   });
// }

function saveInLocalst() {
  localStorage.setItem('localData', JSON.stringify(localst));
}
