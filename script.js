const header = document.querySelector("#header")
const nav = header.querySelector("nav")
const toggle = nav.querySelectorAll(".toggle")
const links = nav.querySelectorAll("#menu a")
const backToTopButton = document.querySelector("#back-to-top")

// Menu mobile
for (const button of toggle) {
  button.addEventListener("click", () => {
    nav.classList.toggle("show")
  })
}

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show")
  })
}

// Menu with shadow
function changeHeaderWhenScroll() {
  const headerHeight = header.offsetHeight

  if (window.scrollY > headerHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
})

// Scrollrevel
const scrollrevel = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
})

scrollrevel.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials,
  #contact header, #contact .links,
  #footer .brand, #footer .social
  `,
  {
    interval: 100,
  }
)

// Back to Top
function backToTop() {
  if (window.scrollY > 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

// Link ativo
const sections = document.querySelectorAll("section[id]")

function activateMenuAtCurrentSection() {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("#menu a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("#menu a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  }
}

window.addEventListener("scroll", () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
