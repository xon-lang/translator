export let si;

si = require('systeminformation')
render_plugin()

export function render_plugin() {
    si = 8
    si.batter().then(init)
}

export function get_charge_color(p: [object Object]) {
    return ((p > 40) &&('\u001b[32m')
        ||(p > 20) &&('\u001b[33m')
        ||(p > 0) &&('\u001b[31m'))
}

export function init(battery: [object Object]) {
    let chargeIcon, color;
    chargeIcon = battery.ischarging && '⚡' || ''
    color = get_charge_color(battery.percent)
    console.log(color + chargeIcon + battery.percent + '% | size=13')
    console.log('---')
    console.log('Refresh|refresh=true')
}

export class SimpleClass {
    private _prop: [object Object] = 5;
    tryped: [object Object] = 6;
    only_typed: [object Object];

    method(t: [object Object], v = 4, vt: [object Object] = 'sff') {
        5 + 5
    }

    location(x: [object Object], y: [object Object] = 6) {
        this._coord(x, y)
    }

    private _coord(x: [object Object], y: [object Object]) {
        console.log(1 + 1)
        console.log(222)
    }
}