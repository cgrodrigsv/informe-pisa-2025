const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.jsx'));

const replacements = [
  [/(?<!dark:)text-white/g, 'text-slate-900 dark:text-white'],
  [/(?<!dark:)text-slate-100/g, 'text-slate-800 dark:text-slate-100'],
  [/(?<!dark:)text-slate-200/g, 'text-slate-700 dark:text-slate-200'],
  [/(?<!dark:)text-slate-300/g, 'text-slate-600 dark:text-slate-300'],
  [/(?<!dark:)text-slate-400/g, 'text-slate-500 dark:text-slate-400'],
  [/(?<!dark:)bg-slate-950/g, 'bg-slate-50 dark:bg-slate-950'],
  [/(?<!dark:)bg-slate-900/g, 'bg-white dark:bg-slate-900'],
  [/(?<!dark:)bg-\[\#0b1120\]/g, 'bg-slate-50 dark:bg-[#0b1120]'],
  [/(?<!dark:)border-slate-800/g, 'border-slate-200 dark:border-slate-800'],
  [/(?<!dark:)border-slate-700/g, 'border-slate-300 dark:border-slate-700']
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // We skip Navbar.jsx for backgrounds because user wants it dark always!
  if (file.includes('Navbar.jsx')) {
    // Only replace text colors in Navbar if they want the text to change?
    // No, if navbar is dark, text must remain white!
    return; // SKIP Navbar entirely, it should stay dark!
  }

  replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
