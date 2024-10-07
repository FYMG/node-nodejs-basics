import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url))

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const stream = fs.createWriteStream(filePath, { encoding: 'utf8' });

  process.stdin.pipe(stream);

  stream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });
};

await write();
