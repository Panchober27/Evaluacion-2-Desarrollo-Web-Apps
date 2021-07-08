const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("landing", {
    title: "Reserva tus Horas",
  });
});
// Ruta al primer calendario.
router.get("/cal1", (req, res) => {
  res.render("pages/calendar", {
    title: "Calendario de Horas, de Jquery",
  });
});

// Ruta al segundo calendario.
router.get("/cal2", (req, res) => {
  res.render("pages/calendar2", {
    title: "Calendario Desarrollado por mi :)",
  });
});

// Ruta al formulario de registro de usuarios.
router.get("/register", (req, res) => {
  res.render("pages/register", {
    title: "Registro",
  });
});

// Ruta a la vista de presentacion de la empresa.
router.get("/us", (req, res) => {
  res.render("pages/us", {
    title: "Sobre nosotros",
  });
});

module.exports = router;
