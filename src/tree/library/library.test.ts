import { translateProgram } from '../../translate';

test('imports', () => {
    const code = 'xon/math: DNN as Net \n';
    expect(translateProgram(code)).toBe("import { DNN as Net } from 'xon/math';");
});
