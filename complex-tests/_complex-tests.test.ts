import { parseCode, ProgramTree } from '@xon/ast';
import * as fs from 'fs';
import * as path from 'path';
import { ProgramTranslator } from '../src/tree/program/program.translator';

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
        const tree = parseCode(inputCode, ProgramTree);
        const translator = new ProgramTranslator(tree);

        fs.writeFileSync(path.resolve(complexTestsDir, name + '.generated.ts'), outputCode);

        expect(translator.translate()).toBe(outputCode);
    };
}
