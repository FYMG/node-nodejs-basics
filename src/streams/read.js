import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  const stream = fs.createReadStream(filePath, {
    encoding: 'utf-8',
  });

  stream.pipe(process.stdout);

  stream.on('error', (err) => {
    console.error(err);
  });
}

await read();
