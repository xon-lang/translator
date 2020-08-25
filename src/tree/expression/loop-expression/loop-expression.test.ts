import { translateExpression } from '../../../translate';
import { BaseTranslator } from '../../base.translator';

test('loop infinity', () => {
    const code = 'loop: 1+1';
    const result = translateExpression(code);
    expect(result).toBe('for (;;) {\n    1 + 1\n}');
});

test('loop expression', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop 5+5: 1+1';
    const result = translateExpression(code);
    expect(result).toBe(`let ___id_0 = 0;
for (let ___id_1 in 5 + 5) {
    ___id_0++;
    let ___id_2 = (5 + 5)[___id_1];
    1 + 1
}`);
});

test('loop value in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop x in 5+5: x+x';
    const result = translateExpression(code);
    expect(result).toBe(`let ___id_0 = 0;
for (let ___id_1 in 5 + 5) {
    ___id_0++;
    let x = (5 + 5)[___id_1];
    x + x
}`);
});

test('loop key in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop val, key in 5+5: val+val';
    const result = translateExpression(code);
    expect(result).toBe(`let ___id_0 = 0;
for (let key in 5 + 5) {
    ___id_0++;
    let val = (5 + 5)[key];
    val + val
}`);
});

test('loop index in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop val,,i  in 5+5: val+val';
    const result = translateExpression(code);
    expect(result).toBe(`let i = 0;
for (let ___id_0 in 5 + 5) {
    i++;
    let val = (5 + 5)[___id_0];
    val + val
}`);
});
