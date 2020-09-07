// import { parseCode, AddSubExpressionTree } from '@xon/ast';

import { translateProgram } from '../../translate';

test('imports', () => {
    const code = "'./../../lib/math.high': sqrt as s, log, ln, dnn as net \n";
    const result = translateProgram(code);
    expect(result).toBe("import { sqrt as s, log, ln, dnn as net } from './../../lib/math.high';");
});
