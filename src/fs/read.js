import path, {dirname} from "path";
import {fileURLToPath} from "url";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";
import * as fs from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await throwErrorWhenFileNeverExist(filePath)
        const content = await fs.readFile(filePath, 'utf-8')
        console.log(content);
    } catch (err) {
        console.error(err);
    }
};

await read();
