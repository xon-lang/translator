import { translateExpression } from '../../../translate';

test('select', () => {
    const code = 'select x:\n\t1+1: log()';
    expect(translateExpression(code)).toBe('((x === 1 + 1) && (log()))');
});
