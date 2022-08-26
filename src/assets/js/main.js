const handleActiveLink = () => {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((currentLink) => {
    const sectionTop = currentLink.offsetTop - 50;
    const sectionHeight = currentLink.offsetHeight;
    const sectionID = currentLink.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar-nav a[href*=" + sectionID + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar-nav a[href*=" + sectionID + "]")
        .classList.remove("active");
    }
  });
};

window.addEventListener("scroll", handleActiveLink);
