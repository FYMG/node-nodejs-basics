import path, {dirname} from "path";
import {fileURLToPath} from "url";
import throwErrorWhenFileExist from "../helpers/throwErrorWhenFileExist.js";
import throwErrorWhenFileNeverExist from "../helpers/throwErrorWhenFileNeverExist.js";
import * as fs from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url))

const copy = async (src, dest) => {
    try {
        await Promise.all([
                throwErrorWhenFileExist(dest),
                throwErrorWhenFileNeverExist(src)
            ]
        )
        const entries = await fs.readdir(src, { withFileTypes: true })

        await fs.mkdir(dest, {recursive: true})

        await Promise.all(
            entries.map(async (entry) => {
                const srcEntry = path.join(src, entry.name);
                const destEntry = path.join(dest, entry.name);

                if (entry.isDirectory()) {
                    await copy(srcEntry, destEntry);
                } else {
                    await fs.copyFile(srcEntry, destEntry);
                }
            })
        );
    } catch (err) {
        console.error(err);
    }
}

await copy(path.join(__dirname, 'files'), path.join(__dirname, 'files_copy'))
