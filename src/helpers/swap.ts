export default (a: number, b: number, array: number[]) => {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
};
