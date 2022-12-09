const h2 = document.createElement(`h2`);
h2.textContent = `A journey of learning to code many languages, including `;
document.querySelector(`body`).appendChild(h2);
const aLine = document.createElement('a')
aLine.textContent = 'JS'
aLine.href = 'https://www.javascript.com/'
aLine.target = `_blank`
document.querySelector(`h2`).appendChild(aLine)

