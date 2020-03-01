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

let box = document.querySelector('#box')
let boxStyle = window.getComputedStyle(box);
let boxShadow = boxStyle.getPropertyValue('box-shadow');
console.log(boxShadow);

document.querySelector('#submit').addEventListener('click', onSubmit)

function onSubmit (e) {
    let cssText = document.createElement('p');
    cssText.innerHTML = `box-shadow: ${boxShadow};`;
    let sideBar = document.querySelector('#cssText');
    sideBar.appendChild(cssText)
}