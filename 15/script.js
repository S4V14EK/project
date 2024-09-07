document.getElementById('main-heading').textContent = 'Измененный Калик';
document.getElementById('main-paragraph').textContent = 'Измененный калик абзаца.';

var heading = document.getElementById('main-heading');
heading.style.color = 'blue';
heading.style.backgroundColor = 'lightgray';
heading.style.fontSize = '24px';

document.getElementById('change-content').addEventListener('click', function() {
    document.getElementById('main-paragraph').textContent = 'Содержимое изменено!';
});

document.getElementById('change-style').addEventListener('click', function() {
    var paragraph = document.getElementById('main-paragraph');
    paragraph.style.color = 'red';
    paragraph.style.fontSize = '18px';
});

document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var newItemText = document.getElementById('new-item-text').value;
    if (newItemText) {
        var newItem = document.createElement('li');
        newItem.textContent = newItemText;
        document.getElementById('main-list').appendChild(newItem);
        document.getElementById('new-item-text').value = '';
    }
});

document.getElementById('remove-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var list = document.getElementById('main-list');
    if (list.children.length > 0) {
        list.removeChild(list.children[0]);
    }
});

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var messageText = document.getElementById('message-text').value;
    document.getElementById('display-message').textContent = messageText;
    document.getElementById('message-text').value = '';
});

var parentBlock = document.getElementById('parent-block');
var children = parentBlock.children;
for (var i = 0; i < children.length; i++) {
    children[i].style.border = '1px solid black';
}

document.getElementById('change-next-element').addEventListener('click', function() {
    var nextElement = document.getElementById('parent-block').nextElementSibling;
    if (nextElement && nextElement.tagName === 'DIV') {
        nextElement.querySelector('p').textContent = 'Калик изменен!';
    }
});

document.getElementById('first-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = 'gray';
    }
});

document.getElementById('second-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = 'red';
    }
});
