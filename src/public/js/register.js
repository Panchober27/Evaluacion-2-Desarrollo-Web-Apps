// Aqui comienzo codigo para validar el formulario.
// Obteniendo el boton.
$(".card").addClass("animate__animated animate__flipInY")
// Usando un validador personalizado
// Validaciones.
$("#formulario-registro").validate({
  rules: {
    names: {
      required: true,
      minLength: 5,
      maxlength: 30,
    },
    lastnames: {
      required: true,
      minLength: 5,
      maxlength: 100,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minLength: 8,
      maxlength: 20,
    },
  },
})

$("#btnSub").click(() => {
  if ($("#formulario-registro").valid() == false) {
    return
  }
  // alert("pinchado")
  let names = $("#names").val()
  let lastnames = $("#lastnames").val()
  let email = $("#email").val()
  let password = $("#password").val()
  console.log(names)

  // Construir JSON
  // Enviar datos por $.post
})
