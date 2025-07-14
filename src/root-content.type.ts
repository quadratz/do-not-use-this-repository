// Telegram Abstract Syntax Tree (tgast)
// https://github.com/quadratz/tgast

import type { Data, Literal, Parent } from "./abstract.type.ts";
import type { User } from "./message.type.ts";
import type { PhrasingContent } from "./phrasing-content.type.ts";

/**
 * Telegram block quotation entity.
 */
export interface Blockquote extends Parent {
	/**
	 * Node type is `"blockquote"`.
	 */
	type: "blockquote";
	/**
	 * Content of the blockquote.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: BlockquoteData;
}

/**
 * Extra data for {@linkcode Blockquote} nodes.
 */
export interface BlockquoteData extends Data {}

/**
 * Telegram bold text entity.
 */
export interface Bold extends Parent {
	/**
	 * Node type is `"bold"`.
	 */
	type: "bold";
	/**
	 * Content of the bold text.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: BoldData;
}

/**
 * Extra data for {@linkcode Bold} nodes.
 */
export interface BoldData extends Data {}

/**
 * Telegram bot command entity.
 */
export interface BotCommand extends Literal {
	/**
	 * Node type is `"bot_command"`.
	 */
	type: "bot_command";
	/**
	 * Extra data.
	 */
	data?: BotCommandData;
}

/**
 * Extra data for {@linkcode BotCommand} nodes.
 */
export interface BotCommandData extends Data {}

/**
 * Telegram cashtag entity.
 */
export interface Cashtag extends Literal {
	/**
	 * Node type is `"cashtag"`.
	 */
	type: "cashtag";
	/**
	 * Extra data.
	 */
	data?: CashtagData;
}

/**
 * Extra data for {@linkcode Cashtag} nodes.
 */
export interface CashtagData extends Data {}

/**
 * Telegram monowidth string entity.
 */
export interface Code extends Literal {
	/**
	 * Node type is `"code"`.
	 */
	type: "code";
	/**
	 * Extra data.
	 */
	data?: CodeData;
}

/**
 * Extra data for {@linkcode Code} nodes.
 */
export interface CodeData extends Data {}

/**
 * Telegram custom emoji entity.
 */
export interface CustomEmoji extends Literal {
	/**
	 * Node type is `"custom_emoji"`.
	 */
	type: "custom_emoji";
	/**
	 * Unique identifier of the emoji.
	 *
	 * See Telegram API [getCustomEmojiStickers] method for details.
	 *
	 * [getCustomEmojiStickers]: https://core.telegram.org/bots/api#getcustomemojistickers
	 */
	emojiId: string;
	/**
	 * Extra data.
	 */
	data?: CustomEmojiData;
}

/**
 * Extra data for {@linkcode CustomEmoji} nodes.
 */
export interface CustomEmojiData extends Data {}

/**
 * Telegram email address entity.
 */
export interface Email extends Literal {
	/**
	 * Node type is `"email"`.
	 */
	type: "email";
	/**
	 * Extra data.
	 */
	data?: EmailData;
}

/**
 * Extra data for {@linkcode Email} nodes.
 */
export interface EmailData extends Data {}

/**
 * Telegram expandable blockquote entity.
 */
export interface ExpandableBlockquote extends Parent {
	/**
	 * Node type is `"expandable_blockquote"`.
	 */
	type: "expandable_blockquote";
	/**
	 * Content of the blockquote.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: ExpandableBlockquoteData;
}

/**
 * Extra data for {@linkcode ExpandableBlockquote} nodes.
 */
export interface ExpandableBlockquoteData extends Data {}

/**
 * Telegram hashtag entity.
 */
export interface Hashtag extends Literal {
	/**
	 * Node type is `"hashtag"`.
	 */
	type: "hashtag";
	/**
	 * Extra data.
	 */
	data?: HashtagData;
}

/**
 * Extra data for {@linkcode Hashtag} nodes.
 */
export interface HashtagData extends Data {}

/**
 * Telegram italic text entity.
 */
export interface Italic extends Parent {
	/**
	 * Node type is `"italic"`.
	 */
	type: "italic";
	/**
	 * Content of the italic text.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: ItalicData;
}

/**
 * Extra data for {@linkcode Italic} nodes.
 */
export interface ItalicData extends Data {}

/**
 * Telegram mention entity.
 */
export interface Mention extends Literal {
	/**
	 * Node type is `"mention"`.
	 */
	type: "mention";
	/**
	 * Extra data.
	 */
	data?: MentionData;
}

/**
 * Extra data for {@linkcode Mention} nodes.
 */
export interface MentionData extends Data {}

/**
 * Telegram phone number entity.
 */
export interface PhoneNumber extends Literal {
	/**
	 * Node type is `"phone_number"`.
	 */
	type: "phone_number";
	/**
	 * Extra data.
	 */
	data?: PhoneNumberData;
}

/**
 * Extra data for {@linkcode PhoneNumber} nodes.
 */
export interface PhoneNumberData extends Data {}

/**
 * Telegram monowidth block entity.
 */
export interface Pre extends Literal {
	/**
	 * Node type is `"pre"`.
	 */
	type: "pre";
	/**
	 * Programming language, if any.
	 */
	language?: string;
	/**
	 * Extra data.
	 */
	data?: PreData;
}

/**
 * Extra data for {@linkcode Pre} nodes.
 */
export interface PreData extends Data {}

/**
 * Telegram spoiler message entity.
 */
export interface Spoiler extends Parent {
	/**
	 * Node type is `"spoiler"`.
	 */
	type: "spoiler";
	/**
	 * Content of the spoiler.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: SpoilerData;
}

/**
 * Extra data for {@linkcode Spoiler} nodes.
 */
export interface SpoilerData extends Data {}

/**
 * Telegram strikethrough text entity.
 */
export interface Strikethrough extends Parent {
	/**
	 * Node type is `"strikethrough"`.
	 */
	type: "strikethrough";
	/**
	 * Content of the strikethrough text.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: StrikethroughData;
}

/**
 * Extra data for {@linkcode Strikethrough} nodes.
 */
export interface StrikethroughData extends Data {}

/**
 * Plain text node.
 */
export interface Text extends Literal {
	/**
	 * Node type is `"text"`.
	 */
	type: "text";
	/**
	 * Extra data.
	 */
	data?: TextData;
}

/**
 * Extra data for {@linkcode Text} nodes.
 */
export interface TextData extends Data {}

/**
 * Telegram text URL entity.
 */
export interface TextLink extends Literal {
	/**
	 * Node type is `"text_link"`.
	 */
	type: "text_link";
	/**
	 * URL for the link.
	 */
	url: string;
	/**
	 * Extra data.
	 */
	data?: TextLinkData;
}

/**
 * Extra data for {@linkcode TextLink} nodes.
 */
export interface TextLinkData extends Data {}

/**
 * Telegram text mention entity.
 */
export interface TextMention extends Literal {
	/**
	 * Node type is `"text_mention"`.
	 */
	type: "text_mention";
	/**
	 * User mentioned.
	 */
	user: User;
	/**
	 * Extra data.
	 */
	data?: TextMentionData;
}

/**
 * Extra data for {@linkcode TextMention} nodes.
 */
export interface TextMentionData extends Data {}

/**
 * Telegram underline text entity.
 */
export interface Underline extends Parent {
	/**
	 * Node type is `"underline"`.
	 */
	type: "underline";
	/**
	 * Content of the underlined text.
	 */
	children: PhrasingContent[];
	/**
	 * Extra data.
	 */
	data?: UnderlineData;
}

/**
 * Extra data for {@linkcode Underline} nodes.
 */
export interface UnderlineData extends Data {}

/**
 * Telegram URL entity.
 */
export interface Url extends Literal {
	/**
	 * Node type is `"url"`.
	 */
	type: "url";
	/**
	 * Extra data.
	 */
	data?: UrlData;
}

/**
 * Extra data for {@linkcode Url} nodes.
 */
export interface UrlData extends Data {}
