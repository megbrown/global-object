#!/usr/bin/env node

const versions = {
	nodeVersion: process.version,
	v8Version: process.versions.v8
};

const { nodeVersion: nodeV, v8Version: v8 } = versions;

console.log(`Node.js version: ${nodeV}\nV8 version: ${v8}`);
