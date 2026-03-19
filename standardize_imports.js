const fs = require('fs');
const path = require('path');

const targetFiles = [
  'app/(tabs)/index.tsx',
  'app/(tabs)/friends.tsx',
  'app/(tabs)/searchVaults.tsx',
  'app/(tabs)/profile.tsx',
  'app/(tabs)/Create/create.tsx',
  'app/(tabs)/Create/categories.tsx',
  'app/(auth)/login.tsx',
  'app/(auth)/password.tsx',
  'app/(auth)/register.tsx',
  'app/(auth)/username.tsx'
];

for (const file of targetFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace theme imports
    content = content.replace(/from "\.\.*\/theme"/g, 'from "@/app/theme"');
    // Replace assets imports
    content = content.replace(/from "\.\.*\/assets/g, 'from "@/assets');
    fs.writeFileSync(file, content);
  }
}
console.log("Standardized imports to @/ alias.");
