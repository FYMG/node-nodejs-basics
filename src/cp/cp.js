import { stdin, stdout } from 'process';
import { spawn } from 'child_process';
import path, { dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async (args) => {
  const child = spawn('node', [path.join(__dirname, 'files/script.js'), ...args]);

  stdin.pipe(child.stdin);

  child.stdout.pipe(stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2'])
