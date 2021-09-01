export const compareStrings = (textA: string, textB: string): boolean => {
  textA = textA
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll("*", "")
    .trim()
    .toLowerCase();
  textB = textB
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll("*", "")
    .trim()
    .toLowerCase();
  return textA === textB;
};

export const toBoldAndUnderline = (text: string) => {
  return toBold(toUnderline(text));
};

export const toBold = (text: string) => {
  return text.replace(/\*([^*]+?)\*/g, "<strong>$1</strong>");
};

export const toUnderline = (text: string) => {
  return text.replace(/\@([^@]+?)\@/g, "<u>$1</u>");
};

export const highlightAndToBold = (text: string) => {
  return text.replace(/\*([^*]+?)\*/g, "<strong><span class='highlight'>$1</span></strong>");
};
