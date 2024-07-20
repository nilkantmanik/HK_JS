const display = (i) => {
  console.clear();
  console.log(i);
};

for (let i = 30; i >= 0; i--) {
  setTimeout(() => {
    display(i);
  }, 1000);
}

// let a = 4;

// let intervalid = setInterval(() => {
//   display(a);
//   a--;
//   if (a == -1) {
//     clearInterval(intervalid);
//   }
// }, 1000);

const getClock = () => {
  const date = new Date();

  const hours = date.getHours();
  const Minutes = date.getMinutes();
  const Seconds = date.getSeconds();

  console.clear();
  console.log(`${hours}:${Minutes}:${Seconds}`);
};

// setInterval(getClock, 1 * 1000);
