const web = document.querySelector(".webT");
const python = document.querySelector(".pythonT");
const c = document.querySelector(".cT");
const skillbar = document.querySelector(".skill-bar");

const snack = document.querySelectorAll(".snack");
for (let i = 0; i < snack.length; i++) {
  snack[i].addEventListener("click", function () {
    location.href = "https://github.com/DEADPOOL712/snake_python";
  });
}
const todo = document.querySelectorAll(".todo");
for (let i = 0; i < todo.length; i++) {
  todo[i].addEventListener("click", function () {
    location.href = "https://todobyvaibhav.netlify.app/";
    console.log("todo");
  });
}
const cal = document.querySelectorAll(".cal");
for (let i = 0; i < cal.length; i++) {
  cal[i].addEventListener("click", function () {
    location.href = "https://calbyvaibhav.netlify.app/";
    console.log("cal");
  });
}
const pingpong = document.querySelectorAll(".pingpong");
for (let i = 0; i < pingpong.length; i++) {
  pingpong[i].addEventListener("click", function () {
    location.href = "https://github.com/DEADPOOL712/python";
    console.log("pingpong");
  });
}

const lazyLoad = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    web.classList.add("python");
    python.classList.add("web");
    c.classList.add("c");
  }

  // secObserver.unobserve(entry.target);
};

const secObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.4,
});

secObserver.observe(skillbar);
