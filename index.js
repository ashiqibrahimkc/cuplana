const heroSection = document.querySelector(".s-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroSection.classList.add("show");
    } else {
      heroSection.classList.remove("show"); // reset animation
    }
  });
}, {
  threshold: 0.3
});

observer.observe(heroSection);
const introSection = document.querySelector(".intro-section");

const introObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      introSection.classList.add("show");
    } else {
      introSection.classList.remove("show"); // remove if you want repeat animation
    }
  });
}, {
  threshold: 0.3
});
// humberg
introObserver.observe(introSection);
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// service
const servicesSection = document.querySelector(".services-section");

const servicesObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      servicesSection.classList.add("show");
    } else {
      servicesSection.classList.remove("show"); // remove if you want repeat animation
    }
  });
}, {
  threshold: 0.2
});

servicesObserver.observe(servicesSection);
// ......why choose......
const whySection = document.querySelector(".why-section");

const whyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      whySection.classList.add("show");
    } else {
      whySection.classList.remove("show"); // remove if you want repeat
    }
  });
}, {
  threshold: 0.2
});

whyObserver.observe(whySection);



// .......bookconsultant..
const ctaSection = document.querySelector(".cta-section");

const ctaobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ctaSection.classList.add("show");
    }
  });
}, { threshold: 0.3 });

ctaobserver.observe(ctaSection);
// ..runner..
const counter = document.querySelector(".counter");
const target = +counter.getAttribute("data-target");

const sobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      counter.innerText = 0;

      let count = 0;
      const update = () => {
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(update, 150);
        }
      };

      update();

    } else {
      counter.innerText = 0;
    }

  });
}, { threshold: 0.5 });

sobserver.observe(counter);