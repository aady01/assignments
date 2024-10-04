let counter = 0;

const Upcounter = () => {
  counter++;
  console.log(counter);

  setTimeout(Upcounter, 10000);
};

Upcounter();
