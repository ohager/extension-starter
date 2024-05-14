import { zip } from "zip-a-folder";
import {move}  from 'fs-extra'
const target = process.env.TARGET || "chrome"
const targetPath = `${target}.extension.zip`

console.info(`Packaging for ${target}...`)

await zip("dist", targetPath);
await move(targetPath, `dist/packed/${targetPath}`);

