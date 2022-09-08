// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70% (0.7), Salmon 20% (0.9), Tropical 5% (0.95), Puffer 5%
    catchFish("0.7", "0.9", "0.95");
  } else if (character === 'alex') {
    // ALEX: Cod 10% (0.1), Salmon 10% (0.2), Tropical 30% (0.5), Puffer 50%
    catchFish("0.1", "0.2", "0.5");
  } else if (character === "villager") {
    // VILLAGER: Cod 25% (0.25), Salmon 25% (0.5), Tropical 25% (0.75), Puffer 25%
    catchFish("0.25", "0.5", "0.75");
  }
}

function catchFish(codNum, salmonNum, tropicalNum) {
  let randNum = Math.random();
    if (randNum < codNum) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < salmonNum) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (randNum < tropicalNum) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
}
