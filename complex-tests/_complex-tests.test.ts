import { IssueService, NamingService } from '@xon/ast';
import * as fs from 'fs';
import * as path from 'path';
import { translateProgram } from '../src/translate';

const complexTestsDir = path.resolve(__dirname, '../complex-tests/tests');

fs.readdirSync(complexTestsDir).forEach((filePath) => {
    if (!filePath.endsWith('.xon')) return;
    const name = filePath.replace(/\.[^/.]+$/, '');
    test(name, testExactFile(path.resolve(complexTestsDir, filePath)));
});

function testExactFile(inputFilePath: string) {
    return () => {
        NamingService.instance = new NamingService();
        IssueService.instance.pushScope(inputFilePath);
        IssueService.instance.raiseWarning = true;

        const outputFilePath = inputFilePath.replace(/\.[^/.]+$/, '.ts');
        const testCode = fs.readFileSync(outputFilePath).toString();
        const inputCode = fs.readFileSync(inputFilePath).toString();
        const translatedCode = translateProgram(inputCode);
        fs.writeFileSync(inputFilePath.replace(/\.[^/.]+$/, '.generated.ts'), translatedCode);
        expect(translatedCode).toBe(testCode);
    };
}
