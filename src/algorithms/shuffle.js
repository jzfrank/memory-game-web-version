// Fisher Yates Shuffle
export const shuffle = (array) => {
  let randomIndex;
  let currentIndex = array.length;

  while (currentIndex > 0) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // swap
    [array[randomIndex], array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
  }

  return array;
};
