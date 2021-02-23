import { TypeTree } from '@xon/ast';

export function getType(type: TypeTree) {
    if (type.name == 'Number') return 'number';
    if (type.name == 'String') return 'string';
    if (type.name == 'Boolean') return 'boolean';
    if (type.name == 'Any') return 'any';

    return type.name;
}
