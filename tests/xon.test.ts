import { parseCode, ProgramTree } from '@xon/ast';
import * as fs from 'fs';
import * as path from 'path';
import { ProgramTranslator } from '../src/tree/program/program.translator';

test('empty', compare('empty'));
test('program-1', compare('program-1'));

function compare(name: string) {
    return () => {
        const inputFilename = name + '.xon';
        const outputFilename = name + '.ts';
        const dir = path.resolve(__dirname, '../tests/');
        const inputCode = fs.readFileSync(path.resolve(dir, inputFilename)).toString();
        const outputCode = fs.readFileSync(path.resolve(dir, outputFilename)).toString();
        const tree = parseCode(inputCode, ProgramTree);
        const translator = new ProgramTranslator(tree);

        expect(translator.translate()).toBe(outputCode);
    };
}
