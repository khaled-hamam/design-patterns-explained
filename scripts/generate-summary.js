#!/usr/bin/env node

const glob = require('glob');
const path = require('path');
const fs = require('fs');

const summaryFile = fs.createWriteStream(path.join(__dirname, '../SUMMARY.md'), { encoding: 'utf-8' });

const catalogueFileContent = fs
  .readFileSync(path.join(__dirname, '../library/README.md'), 'utf-8')
  .replace(/(## Patterns Catalogue).*/gs, '');

const catalogueFile = fs.createWriteStream(path.join(__dirname, '../library/README.md'), { encoding: 'utf-8' });

summaryFile.write(
  '\
# Table of Contents\n\
\n\
- [Getting Started](./README.md)\n\
- [SOLID Principles](./library/solid-principles/README.md)\n\
  - [Single Responsibility Principle](./library/solid-principles/single-responsibility.md)\n\
  - [Open / Closed Principle](./library/solid-principles/open-closed.md)\n\
  - [Liskov Substitution Principle](./library/solid-principles/liskov-substitution.md)\n\
  - [Interface Segregation Principle](./library/solid-principles/interface-segregation.md)\n\
  - [Dependency Inversion Principle](./library/solid-principles/dependency-inversion.md)\n\
- [Design Patterns](./library/README.md)\n\
'
);

catalogueFile.write(catalogueFileContent);
catalogueFile.write('## Patterns Catalogue\n\n');

function toTitleCase(str) {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toMdURL(title, path, indent, bold) {
  return `${'  '.repeat(indent)}- ${bold ? '**' : ''}[${toTitleCase(title)}](${path})${bold ? '**' : ''}`;
}

glob(path.join(__dirname, '../library/**/*.md'), (err, matches) => {
  matches = matches.map((match) => match.replace(/.*(\/design-patterns-explained\/)/, './'));

  const folders = {
    'creational-patterns': [],
    'behavioral-patterns': [],
    'structural-patterns': [],
  };

  Object.keys(folders).forEach((folder) => {
    folders[folder].push(...matches.filter((match) => match.includes(folder)).sort());
  });

  Object.keys(folders).forEach((folder) => {
    const [readme, ...files] = folders[folder];

    summaryFile.write(toMdURL(folder, readme, 1));
    summaryFile.write('\n');

    catalogueFile.write(toMdURL(folder, readme.replace('/library', ''), 0, true));
    catalogueFile.write('\n');

    for (const file of files) {
      const indentation = file.split('/').length - 3;
      const fileName = `${file.split('/').reverse()[1]}${indentation === 2 ? ' Pattern' : ''}`;
      summaryFile.write(toMdURL(fileName, file, indentation));
      summaryFile.write('\n');

      if (indentation === 2) {
        catalogueFile.write(toMdURL(fileName, file.replace('/library', ''), 1));
        catalogueFile.write('\n');
      }
    }
  });

  summaryFile.write('- [Roadmap](./ROADMAP.md)\n');
});
