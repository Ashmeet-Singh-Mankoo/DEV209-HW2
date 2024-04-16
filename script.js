let wordArray = [];
for(let i=0; i<3; i++){
  wordArray[i] = prompt("Please enter a word");
}

document.addEventListener("DOMContentLoaded", function(event){
  let ulVar = document.getElementById('myUL');
  for(let i=0; i < wordArray.length; i++){
    let liVar = document.createElement('li');
    liVar.innerHTML = wordArray[i];
    ulVar.appendChild(liVar);
  }

    document.getElementById("red").addEventListener("click", function() {
      let div = document.getElementById("divcolor");
      if ( div.classList.contains('black') ){
        div.classList.remove('black');
      }
      div.classList.add('red');
  });
    document.getElementById("swap").addEventListener("click", swap );

})

function caps(){
  let newArray = wordArray.map(myCaps);
  let ulVar = document.getElementById('myUL');
  ulVar.innerHTML = "";
  for (let i = 0; i < newArray.length; i++) {
    let liVar = document.createElement('li');
    liVar.innerHTML = newArray[i];
    ulVar.appendChild(liVar);
  };
}

function myCaps(oneItem) {
  return oneItem.toUpperCase();
}

function swap() {
  let swapperArray = wordArray.map(function(oneWord) {
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);})
  

  let ulVar2 = document.getElementById('myUL');
  ulVar2.innerHTML = "";
  for (let i = 0; i < swapperArray.length; i++) {
    let liVar = document.createElement('li');
    liVar.innerHTML = swapperArray[i];
    ulVar2.appendChild(liVar);
  }
}