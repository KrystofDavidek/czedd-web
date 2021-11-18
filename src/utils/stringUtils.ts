export const compareStrings = (textA: string, textB: string): boolean => {
  return normalize(textA) === normalize(textB);
};

export const normalize = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll("*", "")
    .trim()
    .toLowerCase();
};

export const removeFormat = (text: string) => {
  return text.replaceAll("*", "").replaceAll("$", "").replaceAll("@", "").replaceAll("#", "");
};

export const format = (text: string) => {
  return toItalic(toBold(toUnderline(text)));
};

export const toBold = (text: string) => {
  return text.replace(/\*([^*]+?)\*/g, "<strong>$1</strong>");
};

export const toItalic = (text: string) => {
  return text.replace(/\$([^$]+?)\$/g, "<i>$1</i>");
};

export const toUnderline = (text: string) => {
  return text.replace(/\@([^@]+?)\@/g, "<u>$1</u>");
};

export const highlightAndFormat = (text: string, bubbleId: string = "") => {
  if (bubbleId.length > 1) {
    return toItalic(
      text.replace(/\*([^*]+?)\*/g, `<strong><span data-tip data-for="${bubbleId}" class='highlight'>$1</span></strong>`)
    );
  }
  return toItalic(text.replace(/\*([^*]+?)\*/g, "<strong><span class='highlight'>$1</span></strong>"));
};

export const toNewLines = (text: string) => {
  return text.replaceAll("#", "<br>");
};

export const toNewLinesAndSpaces = (text: string) => {
  return toNewLines(text).replaceAll(" ", "&nbsp");
};
