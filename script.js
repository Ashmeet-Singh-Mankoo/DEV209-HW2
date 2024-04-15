let wordsArray = [];

function displayWords() {
  const list = document.getElementById('myList');
  list.innerHTML = "";
  wordsArray.forEach(word => {
    const listItem = document.createElement('li');
    listItem.textContent = word;
    list.appendChild(listItem);
  });
}

function convertToCaps() {
  var capsArray = wordsArray.map(word => word.toUpperCase());
  displayWords(capsArray);
}

function changeColor() {
  var listItems = document.querySelectorAll('#myList li');
  listItems.forEach(item => {
    item.style.color = 'red';
  });
}

function swapLetters() {
  var swappedArray = wordsArray.map(word => {
    return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
  });
  displayWords(swappedArray);
}

// Gather 3 words
for (let i = 0; i < 3; i++) {
  const word = prompt('Enter a word:');
  wordsArray.push(word);
}

// Display the words initially
displayWords();