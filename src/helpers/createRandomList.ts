export default (length: number, max: number): number[] =>
  Array.from({ length }, () => Math.round(Math.random() * max));
