import * as fs from 'node:fs/promises';

async function throwErrorWhenFileNeverExist(filePath) {
  try {
    await fs.access(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw err;
    }
  }
}

export default throwErrorWhenFileNeverExist;
