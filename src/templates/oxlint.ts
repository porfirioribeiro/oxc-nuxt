import type { OxlintConfig } from 'oxlint';

import { globals } from './oxlint.globals.ts';

/**
 * Utility function to merge the auto-generated globals with a custom Oxc config.
 * This is useful if you want to extend the globals with your own custom globals or override the default ones.
 *
 * In the future we may enable more rules by default
 */
export function withOxlintConfig(config: OxlintConfig): OxlintConfig {
  return {
    ...config,
    plugins: config.plugins ?? ['typescript', 'oxc', 'import', 'vue', 'promise'],
    globals: { ...globals, ...config.globals },
  };
}
