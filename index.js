const options = document.querySelectorAll('.main__container__option');

options.forEach(bloque => {
  bloque.addEventListener('click', () => {
    options.forEach(bloque2 => {
      bloque2.classList.remove('active')
    })
    bloque.classList.toggle('active')
  })
})