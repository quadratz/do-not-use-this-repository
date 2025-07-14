import { appendFile, readFile } from "node:fs/promises";

const changelog = await readFile("CHANGELOG.md", "utf8");
const lines = changelog.split("\n");

let inUnreleased = false;
let versionLineIndex = -1;

for (let i = 0; i < lines.length; i++) {
	const line = lines[i].trim();
	if (line.startsWith("## Unreleased")) {
		inUnreleased = true;
	} else if (inUnreleased && line.startsWith("## ")) {
		versionLineIndex = i;
		break;
	}
}

if (versionLineIndex === -1) {
	throw new Error("No version found after ## Unreleased");
}

const versionLine = lines[versionLineIndex];
const versionMatch = versionLine.match(/^## (\d+\.\d+\.\d+(?:-[a-z]+\.\d+)?)$/);

if (!versionMatch) {
	throw new Error("Invalid version format");
}

const version = versionMatch[1];

// Find the next ## line
let nextVersionIndex = -1;
for (let i = versionLineIndex + 1; i < lines.length; i++) {
	if (lines[i].startsWith("## ")) {
		nextVersionIndex = i;
		break;
	}
}

// Capture the content, including the version header
const contentLines =
	nextVersionIndex === -1
		? lines.slice(versionLineIndex)
		: lines.slice(versionLineIndex, nextVersionIndex);
const content = contentLines.join("\n");

// Write to GITHUB_OUTPUT
const outputFile = process.env.GITHUB_OUTPUT;

if (!outputFile) throw new Error('Env "GITHUB_OUTPUT" is undefined.');

await appendFile(outputFile, `version=${version}\n`);
await appendFile(outputFile, `content<<EOF\n${content}\nEOF\n`);
