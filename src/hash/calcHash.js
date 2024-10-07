import * as fs from "node:fs";
import { createHash } from 'node:crypto';
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  try {
    await throwErrorWhenFileNeverExist(filePath)
    const hash = createHash('sha256');
    const stream = fs.createReadStream(filePath, {
      encoding: 'utf-8',
    });

    await new Promise((resolve, reject) => {
      stream.on('data', (data) => {
        hash.update(data);
      });
      stream.on('error', (err) => {
        reject(err);
      });
      stream.on('end', () => {
        resolve();
      });
    });

    console.log(hash.digest('hex'));
  }
  catch (err) {
    console.error(err);
  }
};

await calculateHash();
