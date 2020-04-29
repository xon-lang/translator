class SimpleClass {
    prop = 5;
    tryped: number = 6;
    only_typed: string;
    method(t: number, v = 4, vt: string = 'sff') {
        5 + 5
    }
    location(x: number, y: number = 6) {
        this.coord(x, y)
    }
    coord(x: number, y: number) {
        console.log(1 + 1)
    }
}
si = require('systeminformation');
render_plugin()

function render_plugin() {
    si.batter().then(init)
}

function get_charge_color(p: number) {
    return ((p > 40) &&('\u001b[32m')
     ||(p > 20) &&('\u001b[33m')
     ||(p > 0) &&('\u001b[31m')
    );
}

function init(battery: any) {
    let chargeIcon, color;
    chargeIcon = battery.ischarging && '⚡' || '';
    color = get_charge_color(battery.percent);
    console.log(color + chargeIcon + battery.percent + '% | size=13')
    console.log('---')
    console.log('Refresh|refresh=true')
}