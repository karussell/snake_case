const yaml = require('js-yaml');
const fs   = require('fs');
try {
  const doc = yaml.safeLoad(fs.readFileSync(process.argv[2], 'utf8'));
  console.log(JSON.stringify(doc));
} catch (e) {
  console.log(e);
}