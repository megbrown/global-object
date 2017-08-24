#!/usr/bin/env node

const nodeVersion = process.version;
const v8Version = process.version.v8;

console.log(`Node.js version: ${nodeVersion}\nV8 version: ${process.versions.v8}`);
