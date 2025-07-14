import { appendFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Heading, Root } from "mdast";
import { fromMarkdown } from "mdast-util-from-markdown";
import { EXIT, SKIP, visit } from "unist-util-visit";

await main();

async function main() {
	const path = resolve(import.meta.dirname, "../CHANGELOG.md");
	const content = await readFile(path, "utf8");
	const mdast = fromMarkdown(content);
	const [changelogPos, definitionPos, version] = getNodePosition(mdast);

	const changelog = [
		content.slice(changelogPos.start, changelogPos.end),
		content.slice(definitionPos.start, definitionPos.end),
	].join("");

	// Write to GITHUB_OUTPUT
	const outputFile = process.env.GITHUB_OUTPUT;
	if (!outputFile) throw new Error("Env GITHUB_OUTPUT is undefined!");

	await appendFile(outputFile, `VERSION=${version}\n`);
	await appendFile(outputFile, `IS_PRERELEASE=${version.includes("-")}\n`);
	await appendFile(outputFile, `CONTENT=${JSON.stringify(changelog)}\n`);
}

interface NodePosition {
	start?: number;
	end?: number;
}

function getNodePosition(root: Root): [NodePosition, NodePosition, string] {
	let version: string | undefined;

	const changelogPos: NodePosition = {};
	const definitionPos: NodePosition = {};

	// Find the heading + changelog description.
	visit(root, "heading", (heading) => {
		if (heading.depth !== 2) return SKIP;

		if (changelogPos.start) {
			changelogPos.end = heading.position?.start.offset;
			return EXIT;
		}

		version = getVersion(heading);
		if (version === "Unreleased") return SKIP;

		changelogPos.start = heading.position?.start.offset;
	});

	// Find the definition link.
	visit(root, "definition", (node) => {
		if (node.identifier === version) {
			definitionPos.start = node.position?.start.offset;
			definitionPos.end = node.position?.end.offset;
			return EXIT;
		}
	});

	if (!version) throw new Error("Version not found!");

	return [changelogPos, definitionPos, version];
}

function getVersion(heading: Heading): string {
	let result: string | undefined;

	visit(heading, "text", (text) => {
		result = text.value;
		return EXIT;
	});

	if (!result) throw new Error("Version not found!");

	return result;
}

// const lines = changelog.split("\n");

// let inUnreleased = false;
// // let versionLineIndex = -1;

// for (let i = 0; i < lines.length; i++) {
// 	const line = lines[i].trim();
// 	if (line.startsWith("## Unreleased")) {
// 		inUnreleased = true;
// 	} else if (inUnreleased && line.startsWith("## ")) {
// 		versionLineIndex = i;
// 		break;
// 	}
// }

// if (versionLineIndex === -1) {
// 	throw new Error("No version found after ## Unreleased");
// }

// const versionLine = lines[versionLineIndex];
// const versionMatch = versionLine.match(/^## (\d+\.\d+\.\d+(?:-[a-z]+\.\d+)?)$/);

// if (!versionMatch) {
// 	throw new Error("Invalid version format");
// }

// const version = versionMatch[1];

// // Find the next ## line
// let nextVersionIndex = -1;
// for (let i = versionLineIndex + 1; i < lines.length; i++) {
// 	if (lines[i].startsWith("## ")) {
// 		nextVersionIndex = i;
// 		break;
// 	}
// }

// // Capture the content, including the version header
// const contentLines =
// 	nextVersionIndex === -1
// 		? lines.slice(versionLineIndex)
// 		: lines.slice(versionLineIndex, nextVersionIndex);
// const content = contentLines.join("\n");

// // Write to GITHUB_OUTPUT
// const outputFile = process.env.GITHUB_OUTPUT;

// if (!outputFile) throw new Error('Env "GITHUB_OUTPUT" is undefined.');

// await appendFile(outputFile, `version=${version}\n`);
// await appendFile(outputFile, `content<<EOF\n${content}\nEOF\n`);
