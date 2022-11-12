const web = document.querySelector(".webT");
const python = document.querySelector(".pythonT");
const c = document.querySelector(".cT");
const skillbar = document.querySelector(".skill-bar");

const lazyLoad = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    web.classList.add("Python");
    python.classList.add("web");
    c.classList.add("c");
  }

  // secObserver.unobserve(entry.target);
};

const secObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.2,
});

secObserver.observe(skillbar);
