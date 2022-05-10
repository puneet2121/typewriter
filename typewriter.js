const sentence = 'hello there from lighthouse labs\n';
let time = 100;
for (let words of sentence) {
  setTimeout(() => {
    process.stdout.write(words);
  },time);
  time = time + 50;

}