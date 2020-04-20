import { parseCode, ProgramTree } from '@xon/ast';
import * as fs from 'fs';
import * as path from 'path';
import { ProgramTranslator } from '../src/tree/program/program.translator';

test('generate', () => {
    const dir = path.resolve(__dirname, '../test/');
    const code = fs.readFileSync(dir + '/program.xon').toString();
    const tree = parseCode(code, ProgramTree);
    const translator = new ProgramTranslator(tree);
    fs.writeFileSync(dir + '/output.ts', translator.translate());
});
