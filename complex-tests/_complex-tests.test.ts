import * as fs from 'fs';
import { glob } from 'glob';
import { translateProgramFromFile } from '../src/translate';

glob.sync('complex-tests/tests/**/*.xon').forEach((filePath) => {
    if (!filePath.endsWith('.xon')) return;
    const name = filePath.replace(/\.[^/.]+$/, '');
    test(name, testExactFile(filePath));
});

function testExactFile(inputFilePath: string) {
    return () => {
        const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, '.ts');
        const testCode = fs.readFileSync(outputFilePath).toString();
        const translatedCode = translateProgramFromFile(inputFilePath);
        fs.writeFileSync(inputFilePath.replace(/\.[^/.]+$/, '.generated.ts'), translatedCode);
        expect(translatedCode).toBe(testCode);
    };
}
