import { DictionaryTypeTree, SimpleTypeTree, TypeTree } from '@xon/ast';

export function getType(type: TypeTree) {
    if (type instanceof SimpleTypeTree) {
        if (type.name == 'Number') return 'number';
        if (type.name == 'String') return 'string';
        if (type.name == 'Boolean') return 'boolean';
        if (type.name == 'Undefined') return 'any';
        if (type.name == 'Any') return 'any';
        if (type.name == 'Null') return 'any';

        return type.name;
    }

    if (type instanceof DictionaryTypeTree) {
        return `{${type.items.map((x) => x.name + ': ' + getType(x.type)).join(', ')}}`;
    }

    return 'any';
}
