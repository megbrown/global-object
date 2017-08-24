#!/usr/bin/env node

const versions = {
	nodeVersion: process.version,
	v8Version: process.versions.v8
};

const { nodeVersion, v8Version } = versions;

console.log(`Node.js version: ${nodeVersion}\nV8 version: ${v8Version}`);
