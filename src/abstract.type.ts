// Telegram Abstract Syntax Tree (tgast)
// https://github.com/quadratz/tgast

import type {
	Data as UnistData,
	Literal as UnistLiteral,
	Node as UnistNode,
	Parent as UnistParent,
} from "unist";
import type { Root, RootContent, RootContentMap } from "./index.ts";

/**
 * Data attachable to tgast nodes.
 *
 * This space is reserved for the tgast ecosystem and is guaranteed to never
 * be used by [unist] or tgast itself. This allows for safe use in utilities
 * and plugins to store extra info.
 *
 * This interface can be extended to add custom data types.
 *
 * @example
 * ```ts
 * declare module 'tgast' {
 *   interface Data {
 *     // `someNode.data.myId` will be typed as `number | undefined`
 *     myId?: number
 *   }
 * }
 * ```
 *
 * [unist]: https://github.com/syntax-tree/unist
 */
export interface Data extends UnistData {}

/**
 * Base type for all tgast nodes.
 *
 * This interface should be extended when creating specific tgast node types.
 * Where possible, use {@linkcode Literal} or {@linkcode Parent} instead for
 * more specific types.
 *
 * To register custom tgast node types, addition to {@linkcode RootContentMap}
 * and other relevant places is necessary.
 *
 * For a combined type of all registered tgast nodes, see {@linkcode Nodes}.
 */
export interface Node extends UnistNode {
	/**
	 * Ecosystem-specific info. Data storage is welcome here.
	 */
	data?: Data;
}

/**
 * Base type for tgast nodes holding a simple string value.
 *
 * These nodes are smallest in tgast and cannot contain other nodes or
 * be parents.
 *
 * This interface should be extended for custom tgast literal nodes.
 *
 * For a combined type of all registered tgast literals,
 * see {@linkcode Literals}.
 */
export interface Literal extends Node {
	/**
	 * Plain string value of the literal node.
	 */
	value: string;
}

/**
 * Base type for tgast nodes able to contain child nodes.
 *
 * This interface should be extended for custom tgast parent node types.
 *
 * For a combined type of all registered tgast parent nodes,
 * see {@linkcode Parents}.
 */
export interface Parent extends Node {
	/**
	 * List of child nodes.
	 */
	children: RootContent[];
}

/**
 * Union type of all registered tgast {@linkcode Node} types.
 *
 * To register custom tgast node types, addition to {@linkcode RootContentMap}
 * and other relevant places is necessary. They will be automatically
 * added here.
 */
export type Nodes = Root | RootContent;

/**
 * Union type of all registered tgast {@linkcode Literal} node types.
 *
 * To register custom tgast node types, addition to {@linkcode RootContentMap}
 * and other relevant places is necessary. They will be automatically
 * added here.
 */
export type Literals = Extract<Nodes, UnistLiteral>;

/**
 * Union type of all registered tgast {@linkcode Parent} node types.
 *
 * To register custom tgast node types, addition to {@link RootContentMap} and
 * other relevant places is necessary. They will be automatically
 * added here.
 */
export type Parents = Extract<Nodes, UnistParent>;
