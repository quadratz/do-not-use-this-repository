# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- `deno.lock` and `package-lock.json` from publish files

## [25.7.14-716] - 2025-07-14

### Changed

- Wip

## [1.2.5] - 2025-07-11

### Add

- `CHANGELOG.md` for JSR.
- `package-lock.json` for npm.

### Changed

- Rename `deno.jsonc` to `deno.json`.

### Removed

- `deno.lock` for npm.

## [1.2.4] - 2025-07-11

### Changed

- Move types documentation to GitHub wiki. This change reduces the size of the
  README file and decreases clutter.

## [1.2.3] - 2025-03-17

### Fixed

- Suppress vite warning

## [1.2.2] - 2025-03-14

### Added

- Add provenance for npm

### Fixed

- Missing dependency for jsr

## [1.2.1] - 2025-03-14

### Changed

- Optimize package size

## [1.2.0] - 2025-03-14

### Added

- Migrate from Bun to Deno.
- Transpile the TypeScript into JavaScript with their declaration types.
- Publish to JSR. (previously only NPM)

## [1.1.0] - 2025-03-11

### Added

- Export `User` type

## [1.0.2] - 2025-03-11

### Added

- Add `CHANGELOG.md`

### Removed

- Drop support for JSR. JSR currently cannot resolve `@types/unist`. It always
  translates to `./unist`, which is incorrect.

## [1.0.1] - 2025-03-11

### Removed

- Remove release reference from `README.md`
- Remove `npm ci` step from `publish` workflow

## [1.0.0] - 2025-03-11

### Added

- Initial release.

[unreleased]: https://github.com/quadratz/tgast/compare/v1.2.4...HEAD
[25.7.14-716]: https://github.com/quadratz/tgast/compare/v1.2.5..v25.7.14-716
[1.2.5]: https://github.com/quadratz/tgast/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/quadratz/tgast/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/quadratz/tgast/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/quadratz/tgast/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/quadratz/tgast/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/quadratz/tgast/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/quadratz/tgast/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/quadratz/tgast/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/quadratz/tgast/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/quadratz/tgast/releases/tag/v1.0.0
