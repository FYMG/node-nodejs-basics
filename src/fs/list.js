import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as fs from "node:fs/promises";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

const list = async () => {
  const dirPath = path.join(__dirname, 'files');

  try {
    await throwErrorWhenFileNeverExist(dirPath)
    const entries = await fs.readdir(dirPath, { withFileTypes: true })
    console.log(entries);
  } catch (err) {
    console.error(err);
  }
};

await list();
