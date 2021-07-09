// Archivo de Jquery para la pagina de presentacion.
$(() => {
  const animatedCard1 = $("#c1")
  const animatedCard2 = $("#c2")

  const noAnimCard = $('#nonanim')

  noAnimCard.css({transition: 'none',hover: false})

  animatedCard1.addClass("animate__animated animate__flipInY")
  animatedCard2.addClass("animate__animated animate__flipInY")

  $("#draggable").draggable()




})
