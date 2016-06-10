'use strict';

const requireRegex = /(?:var|const|let)\s+(\w+)\s+=\s+require\(["|']([^"\\]*(?:\\.[^"\\]*)*)["|']\)/gi;

export function parseFile(jsString: string): Array<string> {
  return jsString.match(requireRegex);
}

export function parseRequireString(requireString: string): Array<any> {
  return requireRegex.exec(requireString);
}