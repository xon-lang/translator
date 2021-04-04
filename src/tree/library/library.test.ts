import { translateProgram } from '../../translate';

test('imports', () => {
    const code = "xon/math: DNN as Net \n";
    const result = translateProgram(code);
    expect(result).toBe("import { DNN as Net } from 'xon/math';");
});
