# Django To-do App — UI/UX Modernization Plan

Pure CSS + Vanilla JavaScript (no Bootstrap/Tailwind). Dark theme preserved.

---

## 1. Container & Layout

### Goal
Center a main **App Card** (max-width 500px) in the viewport and apply a subtle **glassmorphism** effect.

### Approach: Flexbox
- **Body**: `min-height: 100vh`, `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`. Optional `padding` for small screens.
- **App Card wrapper**: Single wrapper div (e.g. `.app-card`) with `max-width: 500px`, `width: 100%`, `padding` for inner spacing.

### Glassmorphism
- **Background**: `background: rgba(255, 255, 255, 0.06)` (or similar for dark theme).
- **Blur**: `backdrop-filter: blur(12px)`; `-webkit-backdrop-filter: blur(12px)` for Safari.
- **Border**: `border: 1px solid rgba(255, 255, 255, 0.08)` for a soft edge.
- **Border-radius**: e.g. `border-radius: 16px`.
- **Box-shadow**: Optional `box-shadow` for depth (e.g. soft dark shadow).

### Fallback
If `backdrop-filter` is unsupported, use a slightly more opaque background (e.g. `rgba(30, 30, 35, 0.95)`).

---

## 2. Typography & Hierarchy

### Font stack
- **Primary**: A system-based stack that reads as “clean” and professional, e.g.  
  `'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`
- **Optional display font** for the logo only: e.g. `'DM Sans'` or `'Outfit'` from Google Fonts for a modern logo feel.

### “Django To-do” as logo
- **Font**: Slightly distinctive (e.g. `font-family` with DM Sans or keep system stack with higher weight).
- **Size**: `font-size: clamp(1.5rem, 4vw, 2rem)` or fixed e.g. `1.75rem` in `rem`.
- **Letter-spacing**: `letter-spacing: 0.02em` (slightly open) or `0.04em` for a more “logo” look.
- **Weight**: `font-weight: 600` or `700`.
- **Color**: High contrast on dark (e.g. `#f0f0f0` or `--text-primary`).
- **Cursor**: `cursor: pointer` for click-to-home; optional `:hover` (e.g. opacity or color transition).

### General hierarchy
- Use `rem` for all font sizes and spacing (e.g. base `font-size: 16px` on `html`, then `1rem`, `1.25rem`, `1.5rem`).
- Headings: h1 (logo), h2, h3 with decreasing size and consistent `letter-spacing: 0.01em`.

---

## 3. Interactive Buttons

### “Add a new list” (and similar primary actions)
- **Base**:
  - `padding`: e.g. `0.6rem 1.25rem`.
  - `border`: none or `1px solid transparent`.
  - `border-radius`: e.g. `10px` or `12px`.
  - **Gradient**: `background: linear-gradient(135deg, #4a7c59 0%, #3d6b4a 100%)` (adjust for dark theme greens) or a subtle gray gradient.
  - **Color**: `color: #fff`.
  - **Cursor**: `cursor: pointer`.
  - **Transition**: `transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease`.

- **Hover**:
  - `transform: scale(1.03)`.
  - `box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25)` (or a soft glow).
  - Optionally slightly brighter gradient.

- **Focus** (accessibility):
  - `outline: none` only if you add a visible focus style, e.g. `box-shadow: 0 0 0 2px rgba(255,255,255,0.4)` on `:focus-visible`.

### Secondary buttons (Cancel, Delete)
- Softer style: less prominent background, same border-radius and transition; hover scale can be subtler (e.g. `1.02`).

---

## 4. Micro-animations (JavaScript)

### Flow
1. **On DOM ready**: Apply a “ready” class to a root container (e.g. `.app-card` or `body`).
2. **Initial state**: Elements that should animate have `opacity: 0` and `transform: translateY(12px)` (or similar).
3. **After a short delay** (e.g. 50–100 ms): Add a class like `.animate-in` that sets `opacity: 1` and `transform: translateY(0)` with a CSS transition (e.g. `transition: opacity 0.35s ease, transform 0.35s ease`).
4. **Stagger** (optional): Use `transition-delay` on children (e.g. `.app-card .animate-in > *:nth-child(n)` with increasing delay) for a light stagger.

### “You have no lists” toggle
- When the empty state is **shown**: Same “fade-in + slide-up” — ensure the empty message has a class (e.g. `.empty-state`) and on display add `.animate-in` (or use a data attribute and JS that runs when the block is visible).
- **Implementation**: In the template, give the empty-state element a stable class. In JS, use `DOMContentLoaded` to find it; if present, add `.animate-in` after a tiny delay. If the list is dynamically toggled later (e.g. via JS), the same “add class after show” logic applies.

### Summary
- **CSS**: `.animate-in` transitions `opacity` and `transform`.
- **JS**: On load, add `.animate-in` to `.app-card` (and optionally to `.empty-state`). If you ever toggle empty state via JS, add the class when the message becomes visible.

---

## 5. Form Elements (Text Input)

### Minimalist bottom-border focus
- **Default**: `border: none`, `border-bottom: 2px solid rgba(255,255,255,0.2)`, `background: transparent`, `color: inherit`, `padding: 0.5rem 0`.
- **Outline**: `outline: none`.
- **Focus**: `border-bottom-color: rgba(255,255,255,0.8)` or a brand color; optional `transition: border-color 0.25s ease`.
- **Placeholder**: `::placeholder { color: rgba(255,255,255,0.4); }`

### Optional focus animation
- Use a pseudo-element (e.g. `::after`) as an underline that has `transform: scaleX(0)` by default and `scaleX(1)` on `:focus`, with `transform-origin: left` and transition for a “draw” effect.

---

## 6. Custom Scrollbars (Dark Theme)

### Webkit (Chrome, Safari, Edge)
- **Container**: The scrollable area (e.g. a list wrapper with `max-height` and `overflow-y: auto`).

```css
.scrollable::-webkit-scrollbar {
  width: 8px;
}
.scrollable::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.04);
  border-radius: 4px;
}
.scrollable::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 4px;
}
.scrollable::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.25);
}
```

### Firefox
- `scrollbar-width: thin;`
- `scrollbar-color: rgba(255,255,255,0.2) transparent;` (thumb and track).

Apply to the same scrollable container; use a class like `.scrollable` or the card’s content area.

---

## File checklist
- [ ] `todo_app/static/todo_app/css/styles.css` — all layout, typography, buttons, form, scrollbar styles.
- [ ] `todo_app/static/todo_app/js/app.js` — add `.animate-in` on load and optional empty-state handling.
- [ ] `base.html` — link CSS/JS, wrap content in `.app-card`, add `.app-card` and header structure.
- [ ] `index.html` — add `.empty-state` to “You have no lists” block, ensure list is inside app card.
- [ ] Other templates (todo_list, forms) — use same app-card wrapper and button/input classes where applicable.
