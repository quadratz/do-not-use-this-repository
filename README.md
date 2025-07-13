![tgast banner](https://raw.githubusercontent.com/quadratz/tgast/refs/heads/main/images/tgast.svg)

# tgast

**T**ele**g**ram **A**bstract **S**yntax **T**ree for Telegram message entities.

**tgast** provides a way to represent
[Telegram message entities][telegram-message-entity] as a structured format
called an [Abstract Syntax Tree (AST)][abstract-syntax-tree]. It's built
using the [unist][github-unist] specification, making it easy to work with
and extend.

For released versions, see [releases][github-tgast-releases].

## Contents

- [Introduction](#introduction)
  - [Where this specification fits](#where-this-specification-fits)
- [Installation](#installation)
- [Nodes](#nodes)
- [Glossary](#glossary)
- [References](#references)
- [Related](#related)

## Introduction

tgast is a specification for representing
[Telegram message entities][telegram-message-entity] as an
[Abstract Syntax Tree (AST)][abstract-syntax-tree]. It was initially created for
the [regram][github-regram] project.

### Where this specification fits

tgast leverages the [unist][github-unist] format for syntax trees, allowing you
to benefit from its extensive [ecosystem of utilities][github-unist-utilities].

tgast is used within the [regram][github-regram] and [unified][unified] projects
for processing Telegram message content.

## Installation

If you are using TypeScript, you can use the tgast types by installing them with
jsr or npm:

```sh
# deno
deno add -D npm:@quadratz/tgast # npm
deno add -D jsr:@qz/tgast       # jsr

# bun
bun add -D @quadratz/tgast # npm
bunx jsr add -D @qz/tgast  # jsr

# pnpm
pnpm add -D @quadratz/tgast   # npm
pnpm dlx jsr add -D @qz/tgast # jsr

# yarn
yarn add -D @quadratz/tgast   # npm
yarn dlx jsr add -D @qz/tgast # jsr

# npm
npm add -D tgast         # npm
npx jsr add -D @qz/tgast # jsr
```

## Nodes

- [Blockquote][blockquote-type]: Telegram block quotation. Represents
  `blockquote` entities in Telegram messages.
- [Bold][bold-type]: Telegram bold text. Represents `bold`entities in Telegram
  messages.
- [BotCommand][bot-command-type]: Telegram bot command. Represents `bot_command`
  entities in Telegram messages.
- [Cashtag][cashtag-type]: Telegram cashtag. Represents `cashtag` entities in
  Telegram messages.
- [Code][code-type]: Telegram monowidth string. Represents `code` entities in
  Telegram messages.
- [CustomEmoji][custom-emoji-type]: Telegram custom emoji. Represents
  `custom_emoji` entities in Telegram messages.
- [Email][email-type]: Telegram email address. Represents `email` entities in
  Telegram messages.
- [ExpandableBlockquote][expandable-blockquote-type]: Telegram expandable
  blockquote. Represents `expandable_blockquote` entities in Telegram messages.
- [Hashtag][hashtag-type]: Telegram hashtag. Represents `hashtag` entities in
  Telegram messages.
- [Italic][italic-type]: Telegram italic text. Represents `italic` entities in
  Telegram messages.
- [Mention][mention-type]: Telegram mention. Represents `mention` entities in
  Telegram messages.
- [PhoneNumber][phone-number-type]: Telegram phone number. Represents
  `phone_number` entities in Telegram messages.
- [Pre][pre-type]: Telegram monowidth block. Represents `pre` entities in
  Telegram messages.
- [Spoiler][spoiler-type]: Telegram spoiler message. Represents `spoiler`
  entities in Telegram messages.
- [Strikethrough][strikethrough-type]: Telegram strikethrough text. Represents
  `strikethrough` entities in Telegram messages.
- [Text][text-type]: Telegram plain text. Represents plain text content in
  Telegram messages.
- [TextLink][text-link-type]: Telegram clickable text URL. Represents
  `text_link` entities in Telegram messages.
- [TextMention][text-mention-type]: Telegram mentions for users without
  usernames. Represents `text_mention` entities in Telegram messages.
- [Underline][underline-type]: Telegram underline text. Represents `underline`
  entities in Telegram messages.
- [Url][url-type]: Telegram URL. Represents `url` entities in Telegram messages.

## Glossary

See [§ _Glossary_ in `syntax-tree/unist`][github-unist-glossary].

## References

- **regram**: [regram][github-regram]. Quadratz.
- **unist**: [Universal Syntax Tree][github-unist]. T. Wormer; et al.
- **Telegram Bot API**:
  [Telegram Message Entity](https://core.telegram.org/bots/api#messageentity).
  Telegram.

## Related

- [mdast](https://github.com/syntax-tree/mdast) — Markdown Abstract Syntax Tree
  format
- [hast](https://github.com/syntax-tree/hast) — HTML Abstract Syntax Tree format
- [nlcst](https://github.com/syntax-tree/nlcst) — Natural Language Concrete
  Syntax Tree format
- [xast](https://github.com/syntax-tree/xast) — Extensible Abstract Syntax Tree

[abstract-syntax-tree]: https://unifiedjs.com/learn/guide/introduction-to-syntax-trees/
[github-regram]: https://github.com/quadratz/regram
[github-tgast-releases]: https://github.com/quadratz/tgast/releases
[github-unist]: https://github.com/syntax-tree/unist
[github-unist-glossary]: https://github.com/syntax-tree/unist#glossary
[github-unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities
[telegram-message-entity]: https://core.telegram.org/bots/api#messageentity
[unified]: https://github.com/unifiedjs/unified
[blockquote-type]: https://github.com/quadratz/tgast/wiki/Node:-Blockquote
[bold-type]: https://github.com/quadratz/tgast/wiki/Node:-Bold
[bot-command-type]: https://github.com/quadratz/tgast/wiki/Node:-BotCommand
[cashtag-type]: https://github.com/quadratz/tgast/wiki/Node:-Cashtag
[code-type]: https://github.com/quadratz/tgast/wiki/Node:-Code
[custom-emoji-type]: https://github.com/quadratz/tgast/wiki/Node:-CustomEmoji
[email-type]: https://github.com/quadratz/tgast/wiki/Node:-Email
[expandable-blockquote-type]: https://github.com/quadratz/tgast/wiki/Node:-ExpandableBlockquote
[hashtag-type]: https://github.com/quadratz/tgast/wiki/Node:-Hashtag
[italic-type]: https://github.com/quadratz/tgast/wiki/Node:-Italic
[mention-type]: https://github.com/quadratz/tgast/wiki/Node:-Mention
[phone-number-type]: https://github.com/quadratz/tgast/wiki/Node:-PhoneNumber
[pre-type]: https://github.com/quadratz/tgast/wiki/Node:-Pre
[spoiler-type]: https://github.com/quadratz/tgast/wiki/Node:-Spoiler
[strikethrough-type]: https://github.com/quadratz/tgast/wiki/Node:-Strikethrough
[text-type]: https://github.com/quadratz/tgast/wiki/Node:-Text
[text-link-type]: https://github.com/quadratz/tgast/wiki/Node:-TextLink
[text-mention-type]: https://github.com/quadratz/tgast/wiki/Node:-TextMention
[underline-type]: https://github.com/quadratz/tgast/wiki/Node:-Underline
[url-type]: https://github.com/quadratz/tgast/wiki/Node:-Url
