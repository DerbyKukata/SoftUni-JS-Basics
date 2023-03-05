function zoomagazine(input) {
  let dogs = Number(input[0]);
  let cats = Number(input[1]);
  let dogsscost = dogs * 2.5;
  let catsscost = cats * 4;
  let result = dogsscost + catsscost;
  console.log(`${result} lv.`);
}

zoomagazine(["5 ", "4 "]);
