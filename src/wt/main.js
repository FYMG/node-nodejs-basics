import path, {dirname} from "path";
import {fileURLToPath} from "url";
import * as os from "node:os";
import {Worker} from "node:worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url))

const createWorker = (n) => {
  const workerPath = path.join(__dirname, 'worker.js');

  return new Promise(async (resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData: n
    });

    worker.on('message', async (message) => {
      await worker.terminate();
      resolve(message);
    });

    worker.on('error', async (error) => {
      await worker.terminate();
      reject(error);
    });
  });
};


const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];

  try {
    for (let i = 0; i < numCores; i++) {
      workers.push(createWorker(10 + i));
    }

    console.log(await Promise.all(workers))
  } catch (err) {
    console.error(err);
  }
};

await performCalculations();
