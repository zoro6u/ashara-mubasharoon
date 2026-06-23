# Companion Artwork — drop real images here

Place each companion's illustration here as **`<id>.webp`** (PNG/JPG also work
if you change the extension in `src/components/CompanionPlaceholder.tsx`).

Until a file exists, the app shows a generated **face-less SVG silhouette**
with a glowing light where the face would be — no code changes needed.

## File names (the `id` of each companion)

| File                 | Companion (AR)            | Companion (EN)              |
| -------------------- | ------------------------- | --------------------------- |
| `abu-bakr.webp`      | أبو بكر الصِّدِّيق         | Abu Bakr al-Siddiq          |
| `umar.webp`          | عمر بن الخطّاب            | ʿUmar ibn al-Khattab        |
| `uthman.webp`        | عثمان بن عفّان            | ʿUthman ibn ʿAffan          |
| `ali.webp`           | عليّ بن أبي طالب          | ʿAli ibn Abi Talib          |
| `talha.webp`         | طلحة بن عبيد الله         | Talha ibn ʿUbaydullah       |
| `zubayr.webp`        | الزبير بن العوّام         | al-Zubayr ibn al-ʿAwwam     |
| `abdurrahman.webp`   | عبد الرحمن بن عوف         | ʿAbd al-Rahman ibn ʿAwf     |
| `saad.webp`          | سعد بن أبي وقّاص          | Saʿd ibn Abi Waqqas         |
| `said.webp`          | سعيد بن زيد               | Saʿid ibn Zayd              |
| `abu-ubayda.webp`    | أبو عبيدة بن الجرّاح      | Abu ʿUbaydah ibn al-Jarrah  |

## Art direction (IMPORTANT — religious sensitivity)

- **Faces must NOT be shown.** Use one of:
  - a back-view / three-quarter-back silhouette,
  - a glowing light over the face,
  - an abstract robed figure.
- Recommended: **~900 × 1200 px**, transparent or dark background, subtle
  rim-light in gold/amber to match the theme.
- Keep file sizes small (WebP, quality ~80) — images are lazy-loaded.
