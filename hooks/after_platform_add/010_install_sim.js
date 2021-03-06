#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var root = process.argv[2];
var platform = process.env.CORDOVA_PLATFORMS;

function puts(error, stdout, stderr) {
  console.log(stdout);
}

function installCordovaIosSim() {
  process.stdout.write("installCordovaIosSim");
  exec("cd platforms/ios/cordova && npm install ios-sim", puts)
}

if (platform === 'ios') {
  installCordovaIosSim();
}
