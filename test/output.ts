let si = require('systeminformation');
render_plugin()

function render_plugin() {
    si.batter().then(init)
}

function get_charge_color(p: number) {
    let c;
    ((p > 40) &&(c = 5, '\u001b[32m', '\u001b[32m')
     ||(p > 20) &&('\u001b[33m')
     ||(p > 0) &&('\u001b[31m')
    )
    return ((p > 40) &&('\u001b[32m')
     ||(p > 20) &&('\u001b[33m')
     ||(p > 0) &&('\u001b[31m')
    );
}

function init(battery: any) {
    let chargeIcon, color;
    chargeIcon = battery.ischarging && '⚡' || ''
    color = get_charge_color(battery.percent)
    console.log(color + chargeIcon + battery.percent + '% | size=13')
    console.log('---')
    console.log('Refresh|refresh=true')
}