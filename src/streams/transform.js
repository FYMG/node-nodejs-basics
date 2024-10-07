import { Transform } from 'node:stream';

class ReverseTransform extends Transform {
    _transform(chunk, _, callback) {
        try {
            const reversedChunk = chunk.toString().split('').reverse().join('') + '\n';
            callback(null, reversedChunk);
        } catch (err) {
            callback(err);
        }
    }
}

const transform = async () => {
    const reverseTransform = new ReverseTransform();

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    reverseTransform.on('error', (err) => {
        console.error(err);
    });
};

await transform();
