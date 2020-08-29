import * as fs from 'fs';
import * as path from 'path';
import { translateProgram } from '../src/translate';

const complexTestsDir = path.resolve(__dirname, '../complex-tests/');

fs.readdirSync(complexTestsDir).forEach((file) => {
    if (!file.endsWith('.xon')) return;
    const name = file.replace(/\.[^/.]+$/, '');
    test(name, compare(name));
});

function compare(name: string) {
    return () => {
        const inputFilename = name + '.xon';
        const outputFilename = name + '.ts';
        const inputCode = fs.readFileSync(path.resolve(complexTestsDir, inputFilename)).toString();
        const outputCode = fs
            .readFileSync(path.resolve(complexTestsDir, outputFilename))
            .toString();

        fs.writeFileSync(
            path.resolve(complexTestsDir, name + '.generated.ts'),
            translateProgram(inputCode)
        );

        expect(translateProgram(inputCode)).toBe(outputCode);
    };
}
