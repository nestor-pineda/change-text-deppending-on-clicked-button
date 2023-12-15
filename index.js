// dom elements
const buttons = document.querySelectorAll('button')
const textarea = document.querySelector('textarea')
const output = document.querySelector('.output')

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
}

// functions
const flavourize = (inputText, flavour) => {
 const arrayOfWords = inputText.split(' ');
 const flavourArray = flavours[flavour];
 const newText = arrayOfWords.map((element, index) => (index % 3 === 0) ? flavourArray[index / 3] : element);
 return newText;
}

const updateOutput = (text) => {
  output.innerHTML = text;
}

// event listener
buttons.forEach(b => {
  b.addEventListener('click', (e) => {
    e.preventDefault();
    const flavour = e.currentTarget.getAttribute('data-flavour');
    const updatedText = flavourize(textarea.value, flavour);
    updateOutput(updatedText);
  })
});
