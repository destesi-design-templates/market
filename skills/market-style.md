# Skill: Market style

Read when: changing the look of, or adding a section to, a shop started from the Market template.

Market: a bright grocery app. Poppins for display, DM Sans for reading, rounded panels and white cards on a soft shadow, pills for everything you tap.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #fbfbf6`, `--shop-ink: #1b2a1f`, `--shop-font-body: 'DM Sans', sans-serif`, `--shop-font-display: 'Poppins', sans-serif`, `--shop-radius-button: 999px`, `--shop-radius-card: 18px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- This template's own placeholder copy stays generic for the vertical (Groceries, pharmacy and everyday essentials) and promises nothing: no delivery times, return windows, warranties, discounts, scarcity or ratings. That limit is only for placeholder copy: once the merchant states their real terms (shipping, returns, promotions), use them as they state them.
