export let si;

si = require('systeminformation')
render_plugin()

export function render_plugin() {
    si = 8
    si.batter().then(init)
}

export function get_charge_color(p: number) {
    return ((p > 40) &&('\u001b[32m')
        ||(p > 20) &&('\u001b[33m')
        ||(p > 0) &&('\u001b[31m'))
}

export function init(battery: any) {
    let chargeIcon, color;
    chargeIcon = battery.ischarging && '⚡' || ''
    color = get_charge_color(battery.percent)
    console.log(color + chargeIcon + battery.percent + '% | size=13')
    console.log('---')
    console.log('Refresh|refresh=true')
}

export class SimpleClass {
    private _prop: number = 5;
    tryped: number = 6;
    only_typed: string;

    method(t: number, v = 4, vt: string = 'sff') {
        if (t + v + vt) {
        render_plugin()
    }
    }

    location(x: {z: number, dim: string}, y: number = 6) {
        this._coord(x.z, y)
    }

    private _coord(x: number, y: number) {
        console.log(1 + 1)
        console.log(222)
    }
}