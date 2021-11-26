import data1 from "../assets/data/-tel.json";
import data2 from "../assets/data/-ík_-ník.json";
import data3 from "../assets/data/-a.json";
import data4 from "../assets/data/-áč.json";
import data5 from "../assets/data/-an.json";
import data6 from "../assets/data/-ant_-ent.json";
import data7 from "../assets/data/-ák.json";

import { Data, DefinitionData } from "../models/DefinitionData";

const data = {
  "-tel": data1,
  "-ík_-ník": data2,
  "-a": data3,
  "-áč": data4,
  "-an": data5,
  "-ant_-ent": data6,
  "-ák": data7,
};

export const getData = (): DefinitionData[] => {
  let definitionData: DefinitionData[] = [];
  Object.entries(data).forEach(([key, value]) => {
    const dataArray = value as unknown as Data;
    definitionData = definitionData.concat(dataArray[key]);
  });
  return definitionData;
};
