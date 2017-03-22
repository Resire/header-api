"use strict";

const getPartOfString = (string, seperator, index) => {
  return string.split(seperator)[index];
}

const getHeaders = (header) => {
  const os = header['user-agent'];
  const result = {};
  
  result.ipaddress = getPartOfString(header['x-forwarded-for'], ',', 0);
  result.language = getPartOfString(header['accept-language'], ',', 0);
  result.software = os.slice(os.indexOf('(') + 1, os.indexOf(')'));
  
  return JSON.stringify(result);
};

module.exports = exports = getHeaders;