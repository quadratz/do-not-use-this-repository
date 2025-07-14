// Telegram Abstract Syntax Tree (tgast)
// https://github.com/quadratz/tgast

import type {
	Bold,
	BotCommand,
	Cashtag,
	Code,
	CustomEmoji,
	Email,
	Hashtag,
	Italic,
	Mention,
	PhoneNumber,
	// biome-ignore lint/correctness/noUnusedImports: used in comments.
	RootContent,
	Spoiler,
	Strikethrough,
	Text,
	TextLink,
	TextMention,
	Underline,
	Url,
} from "./index.ts";

/**
 * Registry of {@linkcode PhrasingContent} node types.
 *
 * This interface can be extended to include custom node types in this registry.
 *
 * For a combined type of all phrasing content nodes,
 * see {@linkcode RootContent}.
 */
export interface PhrasingContentMap {
	bold: Bold;
	bot_command: BotCommand;
	cashtag: Cashtag;
	code: Code;
	custom_emoji: CustomEmoji;
	email: Email;
	hashtag: Hashtag;
	italic: Italic;
	mention: Mention;
	phone_number: PhoneNumber;
	spoiler: Spoiler;
	strikethrough: Strikethrough;
	text: Text;
	text_link: TextLink;
	text_mention: TextMention;
	underline: Underline;
	url: Url;
}

/**
 * Type for any tgast node that is phrasing content.
 *
 * To use custom tgast nodes as phrasing content, they must be added to the
 * {@linkcode PhrasingContentMap}. Then they are automatically part of this
 * type.
 */
export type PhrasingContent = PhrasingContentMap[keyof PhrasingContentMap];
