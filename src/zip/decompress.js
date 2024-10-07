import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as zlib from "node:zlib";
import * as fs from "node:fs";


const __dirname = dirname(fileURLToPath(import.meta.url))

const decompress = async () => {
  const src = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'),);
  const dest = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const gunzip = zlib.createGunzip()

  src.pipe(gunzip).pipe(dest);

  dest.on('finish', () => {
    console.log('File successfully decompressed');
  });

  dest.on('error', (error) => {
    console.error(error);
  });
};

await decompress();
