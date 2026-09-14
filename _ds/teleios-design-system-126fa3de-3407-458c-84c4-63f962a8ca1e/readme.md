# Teleios — Design System

Teleios is a consultancy that installs process — "a máquina" — inside small and
mid-sized Brazilian service operations. The founder sells and delivers it
personally: a paid diagnostic conversation, then process installed one *camada*
(layer) at a time, so the operation stops depending on a "herói" answering leads
from memory.

There is one surface: **the marketing site** (Portuguese, pt-BR), a founder-led
single-product page whose job is to book the diagnostic. Everything in this
system serves that surface.

## Sources

Built entirely from the written brand brief supplied in chat ("TELEIOS —
Identidade Visual"). No codebase, Figma file, repository, deck or image asset
was provided or accessible.

The brief names its own visual references, absorbed as follows:

| Reference | What was taken |
|---|---|
| openai.com | Near-monochrome base, sober type, color only as a point accent |
| glean.com | Discipline of one brand color applied consistently, and a lot of air |
| matheuscabral-ae.netlify.app | Editorial structure: monospaced numbering, large display titles, deep black |

Three directions were built and compared (violet, sage green, signal green).
The chosen one is **Grafite & Verde Sinal** — the only direction represented here.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/fonts.css` | Google Fonts import for the three families |
| `tokens/colors.css` | Core, dark scale, light scale, green family, neutrals, semantic aliases, `.teleios-dark` scope |
| `tokens/typography.css` | Families, weights, sizes, tracking, leading, reading measures |
| `tokens/spacing.css` | 4px scale, 104px section jump, container, card padding |
| `tokens/radius.css` | 8 / 12 / 16 / 20 / 28 / pill |
| `tokens/motion.css` | expo.out easing, durations, stagger, sticky step |
| `tokens/elevation.css` | `--shadow-none` and the single green float shadow |
| `components/core/` | `Button`, `Wordmark`, `Badge`, `SectionLabel` |
| `components/content/` | `Headline`, `Card`, `LayerCard`, `Quote`, `Stat`, `FaqItem`, `Marquee`, `HeroBlock` |
| `components/forms/` | `Input`, `Select`, `Textarea` |
| `components/navigation/` | `Navbar`, `NavLink` |
| `ui_kits/site/` | Click-through recreation of the marketing site (4 views) |
| `templates/landing/` | Landing-page template consuming projects can start from |
| `guidelines/*.html` | Foundation specimen cards rendered in the Design System tab |
| `SKILL.md` | Agent Skills entry point |

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`
and one `@dsCard` HTML showing its states.

### Intentional additions

No source defined a component inventory, so the set above was authored from the
brief. Two entries exist because the brief describes the device but not a
component for it: `Headline` (so the 300/700 weight contrast is structural, not
a per-page decision) and `Wordmark` (so the typographic signature can never be
restyled by hand). `Input`, `Select` and `Textarea` exist only to serve the
diagnostic form.

---

## CONTENT FUNDAMENTALS

**Person.** First person singular, founder to owner. "Eu vou te fazer perguntas
que ninguém te fez." The plural "nós/a gente" appears only for delivery: "o que
a gente instala".

**It names the reader's loss, not the product's features.** "Você paga para
trazer cliente e deixa ele esperando." The reader should recognize their own
week in the sentence.

**Short sentences in sequence, used as rhythm.** "Herói cansa. Herói sai. E você
fica no prejuízo."

**Concrete over abstract.** Never "otimização de processos"; instead "você pagou
R$ 15 no click e ele esperou 4 horas". A real number or no number.

**CTAs name the gain.** "Descobrir onde estou perdendo dinheiro" — never "Saiba
mais", never "Enviar".

**Casing.** Normal sentence casing everywhere. No Title Case. No all-caps
headlines. Caps exist in exactly two places: monospaced labels ("CAMADA 01",
"CASE REAL") and the TELEIOS signature.

**Language.** pt-BR throughout. Informal "você", never "o senhor".

**Forbidden:** emoji · the em dash as punctuation · "azeitada" · "solução" ·
"sinergia" · "transformação digital".

**House words:** sistema · processo · máquina · camada · herói (always as the
problem) · diagnóstico.

---

## VISUAL FOUNDATIONS

### Color

Two page backgrounds for the entire site — off-white `#FAFAFA` and graphite
`#101013` — alternating by section. Green `#00D07E` is the single accent and
appears in small quantity: one button, one dot, one numbering, one number.
**Never two green accents on one screen.**

On light ground, green as text is `#00754A` (4.6:1); `#00D07E` has no text
contrast there. Green button hover **lightens** to `#00B86F` — it never darkens,
because the button's own label is dark ink `#06231A`.

Text: `#101013` strong on light, `#FAFAFA` on dark; body `#5A5A62` on light,
`#A1A1AA` on dark; `#8B8B94` is support/caption only — 3.2:1 on light ground, so
never reading text.

### Type

Three families, no exceptions, all from Google Fonts. **Sora** 300/700 for
titles — the weight contrast inside one sentence is the brand's typographic
gesture. **Instrument Sans** 400/600 for body, leading 1.65 (1.7 in long
blocks). **JetBrains Mono** for uppercase labels and card numbering, tracking
0.12em. Negative tracking on display: -0.035em h1, -0.025em h2, -0.02em on big
numbers. Reading measure is locked: 760px body, 980px quote.

### Space and form

4px scale, with a deliberate jump to **104px between sections**. Container
1140px, 16px side padding. Radii: 8px small button, 12px button, 16px card,
20px layer card and photo, **28px hero block**, pill for badges, nav and the
fixed button. The 28px graphite block floating over the off-white page is the
structural signature of a Teleios layout.

### Backgrounds

Solid fills only. No gradient, no texture, no pattern, no background image, no
full-bleed photography behind text.

### Cards, borders, shadows

Every card carries a 1px rule — `#E4E4E7` on light, `#2A2A2F` on dark — and
**no shadow**. The only shadow in the system is the green cast under the fixed
WhatsApp button: `0 8px 28px rgba(0,208,126,.28)`. No inner shadows, no
protection gradients; contrast is solved by choosing the right ground, not by
scrimming.

### Highlight device

Quotes take a 2px green vertical bar on the left with 20–22px inset. That bar is
the emphasis mechanism — there are no colored cards, no tinted callout boxes, no
colored left-border cards.

### Transparency and blur

One place only: the fixed nav, `rgba(16,16,19,0.88)` with a 12px blur.
Everywhere else, surfaces are opaque.

### Layout rules

Fixed elements: the nav (sticky, top) and the WhatsApp pill (bottom right).
Layers stack by `position: sticky` with `top` growing 20px per layer. The name
band is a continuous marquee whose speed reacts to scroll.

### Motion

One easing curve: `expo.out` — `cubic-bezier(0.16, 1, 0.3, 1)`. Smooth scroll
via Lenis. `prefers-reduced-motion` turns everything off. Three gestures:

1. **Line mask** — title revealed line by line (`overflow: hidden` + `yPercent: 115`)
2. **Card stagger** — a group entering at 120ms intervals with -1.2° rotation
3. **Counter** — a number counting up to its value on scroll

### Hover and press

Light button turns green. Green button lightens. Outline button swaps rule and
text to green. Links turn green. No scale, no shadow, no translation on hover;
press states reuse the hover color rather than shrinking or darkening.

### Imagery

Real photography, portrait, warm treatment, hard directional light, dark
background. No illustration, no stock, no decorative icon. Photos sit inside a
20px-radius card with `object-fit: cover`. **Never parallax on a face.**

---

## ICONOGRAPHY

**The system has no icons.** No icon library, no icon font, no SVG icon set, no
emoji, and none was provided or substituted from a CDN.

Where another system would place an icon, Teleios places **monospaced
numbering** (`01`, `02`) or a **6px green dot**. Three glyphs are permitted, all
typographic:

| Glyph | Use |
|---|---|
| `+` | FAQ disclosure — rotates 45° when open |
| `→` | Navigational link, trailing the label |
| `·` | Green separator in the name marquee |

`Badge` exposes the dot; `SectionLabel` and `Card` expose the numbering;
`FaqItem` and `NavLink` own their glyphs. If a future need genuinely requires a
pictogram, it should be added to this system deliberately — do not reach for
Lucide or Heroicons in a Teleios artifact.

---

## Brand mark

**There is no graphic mark, and none was drawn for this system.** Teleios signs
with its name: `TELEIOS`, Sora 700, uppercase, 0.1em tracking — the `Wordmark`
component. That is what goes wherever a logo would go. If a symbol is ever
designed, it replaces the signature; until then, nothing does.

`assets/` is therefore empty of logos by intent.

---

## Lacunas / open items

1. **No logo.** Typographic signature in its place.
2. **No font binaries.** Sora, Instrument Sans and JetBrains Mono load from the
   Google Fonts CDN; nothing is licensed or self-hosted. `tokens/fonts.css`
   holds the single `@import` — replace it with `@font-face` rules if the fonts
   are ever self-hosted.
3. **No photography.** The brief specifies real portraits and notes that the
   current hero photo has a competitor's logo visible in the background,
   pending replacement. UI kit screens use a labelled graphite placeholder at
   the photo radius.
