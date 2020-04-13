#!/usr/bin/env /usr/local/bin/node
// <bitbar.title>Hubstaff Info</bitbar.title>
// <bitbar.version>v1.0.0</bitbar.version>
// <bitbar.author>Nizami</bitbar.author>
// <bitbar.author.github>nizami-dev</bitbar.author.github>
// <bitbar.desc>Show Hubstaff info</bitbar.desc>
// <bitbar.dependencies>node.js</bitbar.dependencies>
// <bitbar.image>https://i.imgur.com/0aNslKx.png</bitbar.image>
/*jshint esversion: 6 */
si = require('systeminformation');
renderPlugin();
function render_plugin() {
    const battery = await si.battery();
}
