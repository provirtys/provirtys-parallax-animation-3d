const arrows = document.querySelector('.arrows-box')

arrows.addEventListener('click', e => {
  const scrollHeightProp = window.getComputedStyle(document.documentElement).getPropertyValue('--scroll-height')
  const scrollHeight = parseInt(scrollHeightProp) * window.innerHeight / 100
  window.scrollTo({ top: scrollHeight, behavior: 'smooth' })
})