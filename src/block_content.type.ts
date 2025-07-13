import type { Blockquote, Pre } from "./index.ts";

/**
 * Type for any tgast node that is block content.
 *
 * To use custom tgast nodes as block content, they must be added to the
 * {@linkcode BlockContentMap}. Then they are automatically part of this
 * type.
 */
export type BlockContent = BlockContentMap[keyof BlockContentMap];

/**
 * Registry of {@linkcode BlockContent} node types.
 *
 * This interface can be extended to include custom node types in this registry.
 *
 * For a combined type of all block content nodes, see {@linkcode RootContent}.
 */
export interface BlockContentMap {
	blockquote: Blockquote;
	pre: Pre;
}
