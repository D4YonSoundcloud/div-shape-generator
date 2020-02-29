document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', inputChanged);
});

function inputChanged(e) {
  console.log("it worked");
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );
};
