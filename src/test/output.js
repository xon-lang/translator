
#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Hubstaff Info</bitbar.title>
// <bitbar.version>v1.0.0</bitbar.version>
// <bitbar.author>Nizami</bitbar.author>
// <bitbar.author.github>nizami-dev</bitbar.author.github>
// <bitbar.desc>Show Hubstaff info</bitbar.desc>
// <bitbar.dependencies>node.js</bitbar.dependencies>
// <bitbar.image>https://i.imgur.com/0aNslKx.png</bitbar.image>
/*jshint esversion: 6 */

si = require(systeminformation);
renderPlugin();
function renderPlugin() {
    let chargeIcon, color;
    const battery = await si.battery();
    chargeIcon = battery.ischarging && '⚡' || '';
    color = getChargeColor(battery.percent);
    console.log(color + chargeIcon + battery.percent + '% | size=13');
    console.log('---');
    console.log('Refresh|refresh=true');
}
function getChargeColor(p) {
    if (p > 40) {
        return '\u001b[32m';
    }
    if (p > 20) {
        return '\u001b[33m';
    }
    if (p > 0) {
        return '\u001b[31m';
    }
}