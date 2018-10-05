/* eslint-disable import/first */
import * as debug from './utils/debug';

// Core ======================================= /
// NOTE: Every item in the "Core" section is required for running the Soho library properly.
// The Soho team will not support any custom builds where these packages are not included.
// ============================================ /
export { version } from '../package.json';
export { debug };
export { uniqueIdCount, utils } from './utils/utils';
export { DOM } from './utils/dom';
export { stringUtils as string } from './utils/string';
export { xssUtils as xss } from './utils/xss';
export { breakpoints } from './utils/breakpoints';
export { Locale } from './components/locale/locale';
export { Environment as env } from './utils/environment';

// a Base Tag reference needs to export itself on the Soho object
export { base } from './utils/base';

// Renderloop needs a single instance of itself
export { renderLoop, RenderLoopItem } from './utils/renderloop';

// Theme/Personalization need single instances of themselves
export { theme } from './components/personalize/personalize';
export { personalization } from './components/personalize/personalize.bootstrap';
export * from './components/personalize/personalize.hooks';

// jQuery constructor for Personalize is required
import './components/personalize/personalize.jquery';

// Explicitly import the initializer (which is considered "core").
// This implicitly imports all jQuery-specific IDS component constructors.
import './behaviors/initialize/initialize.jquery';

// =========================================================
// The below lines are automatically changed during a custom build
// to point to temporary, customized source code files.
// =========================================================

// Behaviors ================================== /
export * from './behaviors/behaviors';

// Component Rules Libraries ================================== /
// These contain modifiable rules for specific components that must be present
// before their Components are loaded.
export * from './core/rules';

// Components ================================= /
import * as components from './components/components';
import * as patterns from './patterns/patterns';

export { components, patterns };
