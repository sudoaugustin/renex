## [0.5.0](https://github.com/sudoaugustin/renex/compare/v0.4.2...v0.5.0)

### Added
- `Toggle` - Switch between given values(boolean by default).
- `Clipboard` - Talk to the clipboard via `navigator.clipboard` API.


## [0.4.2](https://github.com/sudoaugustin/renex/compare/v0.4.1...v0.4.2)

### Added
- `.Set` & `.Remove` to `LocalStorage` & `SessionStorage` wrap these with HOF


## [0.4.1](https://github.com/sudoaugustin/renex/compare/v0.3.0...v0.4.1)

### Added
- `LocalStorage` - Manage values in the local storage
- `SessionStorage` - Manage values in the session storage

### Fixed
- TS asking for HTML tag type everytime we define custom type in components.


## [0.3.0](https://github.com/sudoaugustin/renex/compare/v0.2.0...v0.3.0)

### Added
- `Portal` - Render component in different part of DOM.

### Changed
- The default value of `as` to `Fragment` from `''`
- Upgrade typescript intellisense for Component Props



## [0.2.0](https://github.com/sudoaugustin/renex/compare/v0.0.2...v0.2.0)

### Added
- `Memo` - Memoize the children

### Changed
- Move test files into `/tests`
- Refactor `as` testing into a single file


## [0.0.2](https://github.com/sudoaugustin/renex/releases/tag/v0.0.2)

### Added
- `State` - Manage state easier
- `Effect` - Manage state and invoke callback when state changes
