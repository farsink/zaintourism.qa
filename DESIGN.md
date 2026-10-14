# Zain Tourism Design System

## Direction

Zain Tourism uses a clean, editorial travel aesthetic: white space, black typography, rounded surfaces, restrained borders, and maroon brand moments. The palette should feel confident and premium without introducing competing accent colors.

## Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| `background` | `#FFFFFF` | Site and page background |
| `card` | `#FFFFFF` | Cards, popovers, and panels |
| `foreground` | `#000000` | Default body and heading text |
| `ink` | `#000000` | Strong text, dark actions, dark image overlays |
| `brand` | `#8A1538` | Header backgrounds, icons, active accents, and brand actions |
| `primary` | `#8A1538` | Primary semantic controls and focus states |
| `primary-foreground` | `#FFFFFF` | Text and icons on maroon controls |
| `muted` | `#F7F7F7` | Quiet neutral surfaces |
| `muted-foreground` | `#4A4A4A` | Secondary and tertiary text |
| `border` | `#E5E5E5` | Dividers, inputs, and quiet outlines |
| `sand` | `#FFFFFF` | Legacy neutral surface token; do not use for new colored accents |

## Usage rules

- Use `bg-background` or `bg-card` for white page and card surfaces.
- Use `text-foreground` or `text-ink` for black typography.
- Use `brand` / `bg-brand` / `text-brand` for maroon brand moments, especially headers, icons, active markers, and primary accents.
- Use semantic tokens instead of adding new hex, RGB, or OKLCH literals in components.
- White text is reserved for maroon, black, or image-overlay backgrounds where contrast requires it.
- Solid headers use maroon with white logo, navigation, icons, and actions. Overlay headers may remain transparent over hero imagery and switch to maroon after scrolling.
- Keep primary actions visually distinct from secondary outlined actions; use the existing `PillLink` variants.
- Keep neutral surfaces white unless a subtle `muted` surface is needed for grouping.

## Components

- Header icons and active navigation indicators use white on solid maroon headers.
- Service and feature icons use `text-brand`.
- Cards use white backgrounds, `rounded-2xl`, and semantic borders.
- Dark image overlays may continue using black/white contrast utilities.
- Focus rings use the maroon brand token.

## Typography and shape

- Use the existing DM Sans and heading font setup.
- Keep the existing editorial heading scale and uppercase eyebrow treatment.
- Use `rounded-2xl` for cards, `rounded-full` for pills, and the established page gutters.

## Accessibility

- Maintain readable contrast for black text on white surfaces and white text on maroon surfaces.
- Do not use maroon as the only indicator of state; pair active color with text, shape, or position.
- Preserve visible `focus-visible` states using the semantic ring token.
