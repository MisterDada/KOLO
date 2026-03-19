const fs = require('fs');
const path = require('path');

try {
  // 1. Move Home.tsx to index.tsx
  let homeContent = fs.readFileSync('app/Main/Home.tsx', 'utf8');
  fs.writeFileSync('app/(tabs)/index.tsx', homeContent);

  // 2. Move Profile.tsx to profile.tsx
  let profileContent = fs.readFileSync('app/Main/Profile.tsx', 'utf8');
  fs.writeFileSync('app/(tabs)/profile.tsx', profileContent);

  // 3. Move Create.tsx to Create/create.tsx
  let createContent = fs.readFileSync('app/Main/Create.tsx', 'utf8');
  createContent = createContent.replace(/from "\.\.\/theme"/g, 'from "../../theme"');
  fs.writeFileSync('app/(tabs)/Create/create.tsx', createContent);

  // Auth screens
  const authScreens = {
    'Login.tsx': 'login.tsx',
    'Password.tsx': 'password.tsx',
    'Register.tsx': 'register.tsx',
    'Username.tsx': 'username.tsx'
  };

  for (const [oldName, newName] of Object.entries(authScreens)) {
    let content = fs.readFileSync(`app/Features/Authentication/Screens/${oldName}`, 'utf8');
    content = content.replace(/\.\.\/\.\.\/\.\.\/\.\.\/assets/g, '../../assets');
    content = content.replace(/\.\.\/\.\.\/\.\/theme/g, '../theme');
    content = content.replace(/\.\.\/Models\//g, '../Features/Authentication/Models/');
    content = content.replace(/\.\.\/Services\//g, '../Features/Authentication/Services/');
    fs.writeFileSync(`app/(auth)/${newName}`, content);
  }

  // Delete old folders
  fs.rmSync('app/Main', { recursive: true, force: true });
  fs.rmSync('app/Features/Authentication/Screens', { recursive: true, force: true });

  console.log("Refactor complete.");
} catch (error) {
  console.error(error);
}
