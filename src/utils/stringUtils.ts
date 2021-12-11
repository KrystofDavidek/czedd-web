/* eslint-disable no-useless-escape */
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
  let result = text.replace(/\*([^*]+?)\*/g, "<strong>$1</strong>");
  return result.replace(/€([^€]+?)€/g, "<strong>$1</strong>");
};

export const toItalic = (text: string) => {
  return text.replace(/\$([^$]+?)\$/g, "<i>$1</i>");
};

export const toUnderline = (text: string) => {
  return text.replace(/\@([^@]+?)\@/g, "<u>$1</u>");
};

export const highlightDerivation = (text: string) => {
  let result = format(text.replace(/\*([^*]+?)\*/g, "<strong><span class='highlight-blue'>$1</span></strong>"));
  return result.replace(/\~([^~]+?)\~/g, "<strong><span class='highlight-gold'>$1</span></strong>");
};

export const highlightAndFormat = (text: string, bubbleId: string = "") => {
  if (bubbleId.length > 1) {
    return format(
      text.replace(/\*([^*]+?)\*/g, `<strong><span data-tip data-for="${bubbleId}" class='highlight'>$1</span></strong>`)
    );
  }
  return format(text.replace(/\*([^*]+?)\*/g, "<strong><span class='highlight'>$1</span></strong>"));
};

export const toNewLines = (text: string) => {
  return text.replaceAll("#", "<br>");
};

export const toNewLinesAndSpaces = (text: string) => {
  return toNewLines(text).replaceAll(" ", "&nbsp");
};

export const splitByFirstSpace = (text: string) => {
  const [firstPart, ...second] = text.split(" ");
  const secondPart = second.join(" ");
  return [firstPart, secondPart];
};

export const containsStar = (text: string) => {
  return text.includes("*");
};
