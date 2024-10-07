import path, {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "node:fs";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url))

const compress = async () => {
  const src = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const dest = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  const gzip = zlib.createGzip();

  src.pipe(gzip).pipe(dest);

  dest.on('finish', () => {
    console.log('File successfully compressed');
  });

  dest.on('error', (error) => {
    console.error(error);
  });
};

await compress();
