var fistItem = document.getElementById('one');
var showTextContent = fistItem.textContent;
var showInnerText = fistItem.innerText;
var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;
fistItem.textContent = 'sourdough bread';