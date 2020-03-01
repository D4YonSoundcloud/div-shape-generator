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
let boxColor = boxStyle.getPropertyValue('--box-color');
console.log(boxShadow);
console.log(boxColor);

document.querySelector('#submit').addEventListener('click', onSubmit)

function onSubmit (e) {
    let cssBoxShadowText = document.createElement('p');
    cssBoxShadowText.innerHTML = `box-shadow: ${boxShadow};`;
    let cssBoxColorText = document.createElement('p');
    cssBoxColorText.innerHTML = `background-color: ${boxColor};`;
    let cssTextDiv = document.querySelector('#cssText');
    cssTextDiv.appendChild(cssBoxShadowText);
    cssTextDiv.appendChild(cssBoxColorText);
}