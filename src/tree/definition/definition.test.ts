import { parseDefinition } from '@xon/ast';
import { DefinitionTranslator } from './definition.translator';

test('empty body', () => {
    const code = 'Animal:\n    weight Integer';
    const tree = parseDefinition(code);
    const result = new DefinitionTranslator(tree).translate();
    expect(result).toBe(
        `
export class Animal {
    public weight: Integer
}
`.trim()
    );
});
