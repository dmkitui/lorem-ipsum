// Random words courtesy of https://github.com/andrienko/lipsum-js/blob/master/lipsum.js
words = [
    "a", "ac", "accumsan", "adipiscing", "aenean", "aliqua", "aliquam", "aliquet", "amet", "ante",
    "arcu", "at", "auctor", "augue", "bibendum", "blandit", "commodo", "condimentum", "congue", "consectetur",
    "consequat", "convallis", "cras", "cum", "curabitur", "cursus", "dapibus", "diam", "dictum", "dictumst",
    "dignissim", "dis", "dolor", "dolore", "do", "donec", "dui", "duis", "egestas", "eget", "eiusmod", "eleifend",
    "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "facilisi", "facilisis",
    "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse",
    "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "incididunt", "integer", "interdum", "ipsum", "justo",
    "labore", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "lobortis", "lorem", "luctus",
    "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis",
    "montes", "morbi", "mus", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non",
    "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "pharetra",
    "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "proin",
    "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien",
    "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sodales", "sollicitudin", "suscipit",
    "suspendisse", "tellus", "tempor", "tempus", "tincidunt", "tortor", "tristique", "turpis", "ullamcorper",
    "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae",
    "vivamus", "viverra", "volutpat", "vulputate"
];

function randomWordsGenerator(number) {
  let randomWords = [];
  for(let i=0; i<number; i++) {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    randomWords.push(randomWord)
  }
  return randomWords.join(" ");
}

function randomSentencesGenerator(number) {
  let sentences = [];
  for (let i=0; i < number; i++) {
    // Generate btwn 4 and 9 words per sentence
    let numOfWords = Math.floor(Math.random() * 6) + 4
    let sentence = randomWordsGenerator(numOfWords)
    // Capitalise each first word and add full stop
    sentence = sentence.charAt(0).toUpperCase() + sentence.substr(1, sentence.length).toLowerCase() + ".";
    sentences.push(sentence)
  }
  return sentences.join(" ");
}

function randomParagraphGenerator(number) {
  let paragraphs = [];
  for (let i=0; i< number; i++){
    // Generate btwn 10 and 20 sentences per paragraph
    let numOfsentences = Math.floor(Math.random() * 11) + 10
    let paragraph = randomSentencesGenerator(numOfsentences);
    paragraphs.push(paragraph);
  }
  return paragraphs.join("\n\n");
}


module.exports.words = randomWordsGenerator;
module.exports.sentences = randomSentencesGenerator;
module.exports.paragraphs = randomParagraphGenerator;