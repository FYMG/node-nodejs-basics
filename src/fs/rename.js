import path, {dirname} from "path";
import {fileURLToPath} from "url";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";
import throwErrorWhenFileExist from "../helpers/throwErrorWhenFileExist.js";
import * as fs from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url))

const rename = async () => {
  const src = path.join(__dirname, 'files', 'wrongFilename.txt');
  const dest = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await Promise.all([
      throwErrorWhenFileNeverExist(src),
      throwErrorWhenFileExist(dest),
    ])

    await fs.rename(src, dest);
  } catch (err) {
    console.error(err);
  }
};

await rename();
