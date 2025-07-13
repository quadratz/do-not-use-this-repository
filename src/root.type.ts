// Telegram Abstract Syntax Tree (tgast)
// https://github.com/quadratz/tgast

import type {
	Blockquote,
	Bold,
	BotCommand,
	Cashtag,
	Code,
	CustomEmoji,
	Data,
	Email,
	ExpandableBlockquote,
	Hashtag,
	Italic,
	Mention,
	Parent,
	PhoneNumber,
	Pre,
	Spoiler,
	Strikethrough,
	Text,
	TextLink,
	TextMention,
	Underline,
	Url,
} from "./index.ts";

/**
 * Ecosystem data for tgast root nodes.
 */
export interface RootData extends Data {}

/**
 * Document root node.
 *
 * Must be used as the root of a tgast tree. Cannot be a child.
 */
export interface Root extends Parent {
	/**
	 * Node type is always `"root"`.
	 */
	type: "root";
	/**
	 * Data associated with this root node.
	 */
	data?: RootData | undefined;
}

/**
 * Registry of {@linkcode Root} child node types.
 *
 * This interface can be extended to include custom node types in this registry.
 *
 * For type of {@linkcode Root} child nodes, see {@linkcode RootContent}.
 */
export interface RootContentMap {
	blockquote: Blockquote;
	bold: Bold;
	bot_command: BotCommand;
	cashtag: Cashtag;
	code: Code;
	custom_emoji: CustomEmoji;
	email: Email;
	expandable_blockquote: ExpandableBlockquote;
	hashtag: Hashtag;
	italic: Italic;
	mention: Mention;
	phone_number: PhoneNumber;
	pre: Pre;
	spoiler: Spoiler;
	strikethrough: Strikethrough;
	text: Text;
	text_link: TextLink;
	text_mention: TextMention;
	underline: Underline;
	url: Url;
}

/**
 * Type for {@linkcode Root} child nodes.
 *
 * To use custom tgast nodes as root content, they must be added to the
 * {@linkcode RootContentMap}. Then they are automatically part of this
 * type.
 */
export type RootContent = RootContentMap[keyof RootContentMap];
