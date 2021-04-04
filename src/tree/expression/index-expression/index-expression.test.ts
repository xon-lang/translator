import { translateExpression } from '../../../translate';

test('index', () => {
    const code = 'prop[5]';
    const result = translateExpression(code);
    expect(result).toBe('prop[5]');
});
