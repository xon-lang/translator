import { parseCode, ProgramTree } from '@xon/ast';
import * as fs from 'fs';
import * as path from 'path';
import { ProgramTranslator } from '../translator/program/program.translator';

test('generate', () => {
    const dir = path.resolve(__dirname, '../../src/test/');
    const code = fs.readFileSync(dir + '/program.xon').toString();
    const tree = parseCode(code, ProgramTree);
    // console.log(tree.toJson())
    const translator = new ProgramTranslator(tree);

    fs.writeFileSync(dir + '/output.js', translator.translate());
});
