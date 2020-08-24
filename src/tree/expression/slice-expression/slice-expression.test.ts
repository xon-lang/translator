import { translateExpression } from '../../../translate';

test('slice', () => {
    const code = 'arr[5: 10:3]';
    expect(translateExpression(code)).toBe('slice(arr, 5, 10, 3)');
});
