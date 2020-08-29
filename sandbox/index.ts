import * as fs from 'fs';
import * as path from 'path';
import { translateProgram } from '../src/translate';

const dir = path.resolve(process.cwd(), 'sandbox');
const code = fs.readFileSync(dir + '/program.xon').toString();
fs.writeFileSync(dir + '/output.ts', translateProgram(code));
