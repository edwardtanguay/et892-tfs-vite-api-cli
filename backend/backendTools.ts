import fs from "fs";

export const readJsonFile = (filePath: string) => {
	const jsonData = fs.readFileSync(filePath, "utf8");
	const jsonObject = JSON.parse(jsonData);
	return jsonObject;
};

export const extractPortNumber = (text: string) => {
  const regex = /(\d+)/;
  const match = text.match(regex);
  return match ? parseInt(match[0], 10) : null;
}
