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
//service hero
const servicesHero = document.querySelector(".services-hero");

if(servicesHero){
  function revealServicesHero() {
  const rect = servicesHero.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // section visible
  if (rect.top < windowHeight && rect.bottom > 0) {
    servicesHero.classList.add("show");
  } else {
    servicesHero.classList.remove("show");
  }
}

window.addEventListener("scroll", revealServicesHero);
window.addEventListener("load", revealServicesHero);
}
//servicecard
const sservicesSection = document.querySelector(".services");

if(sservicesSection){
  function revealServices(){

  const rect = sservicesSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if(rect.top < windowHeight - 100 && rect.bottom > 0){
    sservicesSection.classList.add("show");
  } else {
    sservicesSection.classList.remove("show"); 
  }

}

window.addEventListener("scroll", revealServices);
window.addEventListener("load", revealServices);
}
//servicecta
const scta = document.querySelector(".cta");

if(scta){
  function revealCTA(){

  const rect = scta.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if(rect.top < windowHeight && rect.bottom > 0){
    scta.classList.add("show");
  } else {
    scta.classList.remove("show");
  }

}

window.addEventListener("scroll", revealCTA);
window.addEventListener("load", revealCTA);
}
//contact page    



const contactHero = document.querySelector(".contacthero");

if(contactHero){
  function revealContactHero(){

  const rect = contactHero.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if(rect.top < windowHeight && rect.bottom > 0){
    contactHero.classList.add("show");
  }else{
    contactHero.classList.remove("show");
  }

}

window.addEventListener("scroll", revealContactHero);
window.addEventListener("load", revealContactHero);
}
//contactcontact


const contactSection = document.querySelector(".contact-section");

if(contactSection){
  function revealContact(){

const rect = contactSection.getBoundingClientRect();
const windowHeight = window.innerHeight;

if(rect.top < windowHeight && rect.bottom > 0){
contactSection.classList.add("show");
}else{
contactSection.classList.remove("show");
}

}

window.addEventListener("scroll", revealContact);
window.addEventListener("load", revealContact);
}
//contactservice

const cservices = document.querySelector(".services");

if(cservices){
  function revealServices(){

const rect = cservices.getBoundingClientRect();
const windowHeight = window.innerHeight;

if(rect.top < windowHeight && rect.bottom > 0){
cservices.classList.add("show");
}else{
cservices.classList.remove("show");
}

}

window.addEventListener("scroll", revealServices);
window.addEventListener("load", revealServices);
}
//region
const regions = document.querySelector(".regions");

if(regions){
  function revealRegions(){

const rect = regions.getBoundingClientRect();
const windowHeight = window.innerHeight;

if(rect.top < windowHeight && rect.bottom > 0){
regions.classList.add("show");
}else{
regions.classList.remove("show");
}

}

window.addEventListener("scroll", revealRegions);
window.addEventListener("load", revealRegions);
}
//faq
const faqItems = document.querySelectorAll(".faq-item");

if(faqItems){
  faqItems.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});
}
const faqSection = document.querySelector(".faq");

function revealFAQ(){

const rect = faqSection.getBoundingClientRect();
const windowHeight = window.innerHeight;

if(rect.top < windowHeight && rect.bottom > 0){
faqSection.classList.add("show");
}else{
faqSection.classList.remove("show");
}

}

window.addEventListener("scroll", revealFAQ);
window.addEventListener("load", revealFAQ);


//contactcta
const ccta = document.querySelector(".cta");

if(ccta){
  function revealCTA(){

const rect = ccta.getBoundingClientRect();
const windowHeight = window.innerHeight;

if(rect.top < windowHeight && rect.bottom > 0){
ccta.classList.add("show");
}else{
ccta.classList.remove("show");
}

}

window.addEventListener("scroll", revealCTA);
window.addEventListener("load", revealCTA);
}