import { PlainTypeTree, TypeTree } from '@xon/ast';

export function getType(type: TypeTree) {
    if (type === undefined) return 'void';

    if (type instanceof PlainTypeTree) {
        if (type.name == 'Number') return 'number';
        if (type.name == 'Integer') return 'number';
        if (type.name == 'Float') return 'number';
        if (type.name == 'String') return 'string';
        if (type.name == 'Boolean') return 'boolean';
    }
    return 'any';
}
