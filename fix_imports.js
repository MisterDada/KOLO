const fs = require('fs');

const authScreens = [
  'login.tsx',
  'password.tsx',
  'register.tsx',
  'username.tsx'
];

for (const name of authScreens) {
  const path = `app/(auth)/${name}`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/\.\.\/\.\.\/\.\/theme/g, '../theme');
    fs.writeFileSync(path, content);
  }
}
console.log("Fixed theme imports.");
