var os = require('os');
var time = require('./time');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var times = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.red, type);
    console.log('Release:'.green, release);
    console.log('CPU model:'.rainbow, cpu);
    console.log('Uptime:'.blue, time.print(times));
    console.log('User name:'.grey, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;