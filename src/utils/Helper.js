export function filterData(sInput, Restraunt) {
  return Restraunt.filter((rest) =>
    rest?.name.toUpperCase().includes(sInput.toUpperCase())
  );
}
