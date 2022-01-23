const {
  copyFileSync,
  ensureDirSync,
  readdirSync,
  statSync,
} = require('fs-extra');
const { join } = require('path');

const workspaceRoot = join(__dirname, '..', '..');
const partytownDir = join(
  workspaceRoot,
  'node_modules/@builder.io/partytown/lib'
);
const destinationDir = join(workspaceRoot, 'dist/apps/website/~partytown');

console.log('Copying Partytown files...');

ensureDirSync(destinationDir);

readdirSync(partytownDir).forEach((file) => {
  const absoluteFilePath = join(partytownDir, file);
  if (!statSync(absoluteFilePath).isFile()) {
    return;
  }

  copyFileSync(absoluteFilePath, join(destinationDir, file));
});

console.log('Partytown files copied.');
