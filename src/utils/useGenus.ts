import { CSSProperties, useState } from "react";

export type Genus = "m" | "f" | "n";

export const getGenus = (genre: string): Genus => {
  let genus: Genus = "m";
  if (genre.includes("animate")) {
    genus = "m";
  }
  return genus;
};

export const getGenusColor = (genus: Genus): CSSProperties | undefined => {
  const colorProp = { color: "#1155CC" };
  if (genus === "m") {
    colorProp.color = "#1155CC";
  }
  return colorProp;
};

const useGenus = (genre?: string) => {
  const [genus] = useState<Genus>(genre ? getGenus(genre) : "m");
  return genus;
};

export default useGenus;
