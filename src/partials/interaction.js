window.addEventListener("DOMContentLoaded", () => {
    const buyTitle = document.querySelector(".title__buy")
    const BuyCard = document.querySelector(".Buy")
    const cards = document.querySelectorAll(".shown")

    async function UnActive() {
        cards.forEach(item => {
            item.classList.remove("active")
        })
    }

    buyTitle.addEventListener("click", () => {
        UnActive(cards)
        if (BuyCard.classList.contains("active")) {
            BuyCard.classList.remove("active")
        } else {
            BuyCard.classList.add("active")
        }
    })


    const earnTitle = document.querySelector(".title__earn")
    const EarnCard = document.querySelector(".Earn")

    earnTitle.addEventListener("click", () => {
      UnActive(cards)
        if (EarnCard.classList.contains("active")) {
            EarnCard.classList.remove("active")
        } else {
            EarnCard.classList.add("active")
        }
    })


    const exchangeTitle = document.querySelector(".title__exchange")
    const ExchangeCard = document.querySelector(".Exchange")

    exchangeTitle.addEventListener("click", () => {
        UnActive(cards)
        if (ExchangeCard.classList.contains("active")) {
            ExchangeCard.classList.remove("active")
        } else {
            ExchangeCard.classList.add("active")
        }
    })


    const borrowTitle = document.querySelector(".title__borrow")
    const BorrowCard = document.querySelector(".Borrow")

    borrowTitle.addEventListener("click", () => {
        UnActive(cards)
        if (BorrowCard.classList.contains("active")) {
            BorrowCard.classList.remove("active")
        } else {
            BorrowCard.classList.add("active")
        }
    })


    const cardTitle = document.querySelector(".title__card")
    const Card = document.querySelector(".Card")

    cardTitle.addEventListener("click", () => {
        UnActive(cards)
        if (Card.classList.contains("active")) {
            Card.classList.remove("active")
        } else {
            Card.classList.add("active")
        }
    })


})