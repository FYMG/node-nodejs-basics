import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as fs from "node:fs/promises";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

  try {
    await throwErrorWhenFileNeverExist(filePath)
    await fs.rm(filePath, {recursive: true})
  } catch (err) {
    console.error(err);
  }
};

await remove();
