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

// Ruta a la vista de servicios.
router.get("/services", (req, res) => {
  res.render("pages/services", {
    title: "Services",
  });
});

// Ruta hacia servicio 1.
router.get("/service1", (req, res) => {
  const serv = "Limpiezas"
  res.render("pages/service1", {
    title: `Service ${serv}`
  });
});

// Ruta hacia servicio 2.
router.get("/service2", (req, res) => {
  const serv = "Ortodoncia"
  res.render("pages/service2", {
    title: `Service ${serv}`
  });
});

// Ruta hacia servicio 3.
router.get("/service3", (req, res) => {
  const serv = "Protesis"
  res.render("pages/service3", {
    title: `Service ${serv}`
  });
});

// Ruta hacia servicio 4.
router.get("/service4", (req, res) => {
  const serv = "Urgencias"
  res.render("pages/service4", {
    title: `Service ${serv}`
  });
});

module.exports = router;
