// Archivo de Jquery para la pagina de presentacion.
$(() => {
  $(".card").addClass("animate__animated animate__flipInY")
  const cards = $(".card")

  const card1 = $("#c1")
  const card2 = $("#c2")

  const c1txt = $("#ctxt1")
  const c2txt = $("#ctxt2")

  const msg = "Pancho es dios"



  
  cards.on("animationend", () => {
      // card2.innerHTML = "Pancho no es dios"
      // alert("end of animation")
      c1txt.text = msg
  })

})
