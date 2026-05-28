# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-05-28

### Added
- GitHub Actions CI/CD pipeline for automated testing and npm publishing
- Prettier code formatter for consistent styling
- `npm run dev` watch mode for development
- `npm run format` script for code formatting
- `npm run lint:fix` for automatic linting fixes
- `npm run clean` to remove build artifacts
- Node.js engine requirement (>=18.0.0)
- Repository link in package.json
- Comprehensive README with setup guide and troubleshooting
- ESLint integration with TypeScript support

### Changed
- **BREAKING**: Updated to ESM module format (from CommonJS)
- TypeScript target updated from es2016 to ES2020
- TypeScript version: 4.7.4 → 5.3.3
- Updated all dependencies to latest versions
- Output directory: `bin/` → `dist/`
- Enhanced TypeScript compiler options with stricter checks

### Fixed
- README typos ("comamnd" → "command", "weahter" → "weather", etc.)
- ESLint configuration for modern TypeScript support
- Removed outdated ESLint plugins

## [1.0.0] - 2022-07-23

### Added
- Initial release
- CLI for getting weather from OpenWeatherMap API
