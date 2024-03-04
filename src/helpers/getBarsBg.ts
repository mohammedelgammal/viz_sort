export default (
  isFinished: boolean,
  index: number,
  selected: [number, number]
): string =>
  isFinished
    ? "#F1F5A8"
    : index === selected[0]
    ? "#E5E483"
    : index === selected[1]
    ? "#D2D180"
    : "#393E46";
