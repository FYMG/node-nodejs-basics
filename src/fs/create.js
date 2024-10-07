import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as fs from "node:fs/promises";
import throwErrorWhenFileExist from "../helpers/throwErrorWhenFileExist.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await throwErrorWhenFileExist(filePath);
        await fs.writeFile(filePath, content);
    } catch (err) {
        console.error(err);
    }
};

await create();