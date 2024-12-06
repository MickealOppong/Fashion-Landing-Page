
const toggleBtns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>
const basicForm = document.querySelector('.basic-search-container') as HTMLElement
const advanceForm = document.querySelector('.advance-search-container') as HTMLElement

toggleBtns.forEach((btn) => {
  console.log(btn);

  btn.addEventListener('click', function () {
    if (!btn.classList.contains('active')) {
      btn.classList.add('active')
    }
    if (btn.dataset.id !== 'basic') {
      advanceForm.style.display = 'flex'
      basicForm.style.display = 'none'
    } else {
      advanceForm.style.display = 'none'
      basicForm.style.display = 'flex'
    }

    toggleBtns.forEach((item) => {
      if (btn !== item) {
        item.classList.remove('active')
      }
    })
  })
})

