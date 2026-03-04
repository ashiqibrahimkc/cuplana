// HERO
const heroSection = document.querySelector(".s-section");
if (heroSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      heroSection.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.3 });

  observer.observe(heroSection);
}


// INTRO
const introSection = document.querySelector(".intro-section");
if (introSection) {
  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      introSection.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.3 });

  introObserver.observe(introSection);
}


// HAMBURGER
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// SERVICES
const servicesSection = document.querySelector(".services-section");
if (servicesSection) {
  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      servicesSection.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  servicesObserver.observe(servicesSection);
}


// WHY SECTION
const whySection = document.querySelector(".why-section");
if (whySection) {
  const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      whySection.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  whyObserver.observe(whySection);
}


// CTA
const ctaSection = document.querySelector(".cta-section");
if (ctaSection) {
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaSection.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  ctaObserver.observe(ctaSection);
}


// COUNTER
const counter = document.querySelector(".counter");
if (counter) {
  const target = +counter.getAttribute("data-target");

  const sobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        let count = 0;

        const update = () => {
          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(update, 150);
          }
        };

        update();
      }

    });
  }, { threshold: 0.5 });

  sobserver.observe(counter);
}


// ABOUT HERO
const aboutHero = document.querySelector(".about-hero");

if(aboutHero){
  const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{

    if(entry.isIntersecting){
      aboutHero.classList.add("show");
    } 
    else{
      aboutHero.classList.remove("show"); // reset animation
    }

  });
},{ threshold:0.4 });

observer.observe(aboutHero);
}

// JOURNEY

const aboutSection = document.querySelector(".about-section");

if(aboutSection){
  const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      aboutSection.classList.add("show");
    }
    else{
      aboutSection.classList.remove("show");
    }
  });
},{threshold:0.3});

observer.observe(aboutSection);
}
//experience
const expSection = document.querySelector(".experience-section");

if(expSection){
  const exobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      expSection.classList.add("show");
    }else{
      expSection.classList.remove("show");
    }
  });
},{threshold:0.3});

exobserver.observe(expSection);
}
//timeline
const timeline = document.querySelector(".timeline-section");

if(timeline){
  const tobserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      timeline.classList.add("show");
    }
  });
},{threshold:0.3});

tobserver.observe(timeline);
}
//expertice
const expertiseSection = document.querySelector(".expertise-section");

if(expertiseSection){
  const experobserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      expertiseSection.classList.add("show");
    }else{
      expertiseSection.classList.remove("show");
    }
  });
},{threshold:0.3});

experobserver.observe(expertiseSection);
}
//philospy
const philosophy = document.querySelector(".philosophy-section");

if(philosophy){
  const phobserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      philosophy.classList.add("show");
    }else{
      philosophy.classList.remove("show");
    }
  });
},{threshold:0.3});

phobserver.observe(philosophy);
}
//cuplana
const cuplana = document.querySelector(".cuplana-section");

if(cuplana){
  const cuobserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      cuplana.classList.add("show");
    }
  });
},{threshold:0.3});

cuobserver.observe(cuplana);
}
//mision
const missionSection = document.querySelector(".mission-section");

if(missionSection){
  const miobserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    
    if(entry.isIntersecting){
      missionSection.classList.add("show");
    } 
    else{
      missionSection.classList.remove("show");
    }

  });
},{threshold:0.3});

miobserver.observe(missionSection);
}