const listBtn = document.querySelector('.list-btn') as HTMLElement
const gridBtn = document.querySelector('.grid-btn') as HTMLElement
const gridContainer = document.querySelector('.employee-grid') as HTMLElement
const listContainer = document.querySelector('.employee-list-view') as HTMLElement

console.log(listBtn);
console.log(gridBtn);


//handle click event for list view
listBtn.addEventListener('click', function () {
  if (!listBtn.classList.contains('show-container')) {
    listContainer.classList.add('show-container')
    gridContainer.classList.remove('show-container')
    listBtn.classList.add('active')
    gridBtn.classList.remove('active')
  }
}
)


//handle click event for grid view
gridBtn.addEventListener('click', function () {
  if (!gridBtn.classList.contains('active')) {
    gridContainer.classList.add('show-container')
    listContainer.classList.remove('show-container')
    gridBtn.classList.add('active')
    listBtn.classList.remove('active')
  }
}
)