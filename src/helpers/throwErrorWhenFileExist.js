import * as fs from 'node:fs/promises';

async function throwErrorWhenFileExist(filePath) {
  try {
    await fs.access(filePath);
    throw new Error(`FS operation failed`);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
}

export default throwErrorWhenFileExist;
