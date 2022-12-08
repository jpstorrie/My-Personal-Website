const h2 = document.createElement(`h2`);
h2.textContent = `This is added by my written by `;
document.querySelector(`body`).appendChild(h2);
const aLine = document.createElement('a')
aLine.textContent = 'JS'
aLine.href = 'https://www.javascript.com/'
aLine.target = `_blank`
document.querySelector(`h2`).appendChild(aLine)
