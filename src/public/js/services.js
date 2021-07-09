//
$(() => {
  const rowCards = $("#head-box")
  const cards = $(".card")
  console.log(rowCards)
  rowCards.css({ display: "flex", justifyContent: "center" })
  console.log(cards)

  cards1.on("mouseenter", () => {
    cards.css({
      background: 'rgba(0, 0, 0, 0.2)',
      transition: "1s",
      color: "white",
      boxShadow: '4px 4px 4px 5px black'
    })
  })

})
