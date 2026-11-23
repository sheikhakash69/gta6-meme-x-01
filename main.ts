// gta6-meme-x-01 entrypoint: hand POST.json (the X post URL) to the grader via /output.
// Outside the sandbox, MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for /bot and /output.

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const botRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outRoot = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postName = 'POST.json';

function ensureOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

function copyPostFile(): void {
  const from = join(botRoot, postName);
  const to = join(outRoot, postName);
  if (!existsSync(from)) {
    console.error(`missing ${from}`);
    process.exit(1);
  }
  copyFileSync(from, to);
}

ensureOutputDir(outRoot);
try {
  copyPostFile();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`could not copy ${postName}: ${message}`);
  process.exit(1);
}
