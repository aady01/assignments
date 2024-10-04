let counter = 0;

const UpdatedCounter = () => {
  counter++;
  console.log(counter);
};

setInterval(UpdatedCounter, 1000);
