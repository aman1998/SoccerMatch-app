export const getArrayFromCount = (count: number): Array<number> => {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  return arr;
};
