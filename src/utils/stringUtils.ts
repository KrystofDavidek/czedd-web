export const compareStrings = (stringA: string, stringB: string): boolean => {
  stringA = stringA
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll("*", "")
    .trim()
    .toLowerCase();
  stringB = stringB
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll("*", "")
    .trim()
    .toLowerCase();
  return stringA === stringB;
};
