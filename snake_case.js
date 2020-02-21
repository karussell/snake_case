const yaml = require('js-yaml');
const fs   = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

function toSnakeCase(doc) {
  if(typeof doc !== 'object')
    return doc

  
  if(Array.isArray(doc)) {
    const newArray = [];
    doc.forEach(function (item, index) {
       newArray.push(toSnakeCase(doc[index]));
    });
    return newArray;
  }

  const newObject = {};
  for (const [key, value] of Object.entries(doc)) {
    newKey = key.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();})
    newObject[newKey] = toSnakeCase(value);
  }

  return newObject;
}

file = process.argv[2];

try {
  const doc = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
  const scDoc = toSnakeCase(doc);
  console.log(yaml.safeDump(scDoc));

} catch (e) {
  console.log(e);
}