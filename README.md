# Qveen Music — qveenmusic.com

Exact layout match to [enoxz.com](https://www.enoxz.com/). **Plain HTML, CSS, and a tiny bit of vanilla JavaScript** — no React, no TypeScript, no build step.

## Layout (matches enoxz)

1. **Top bar** — Blue-grey strip with "Music : music@qveenmusic.com" on the right.
2. **Hero** — Full-bleed dark background, centered italic headline, stacked artist name (e.g. "Qv" / "een").
3. **Intro** — Light grey section, one paragraph, constrained width.
4. **Music** — Light grey. "Music" heading, **row of 6 square album covers** (with shadow), then **streaming icons (circular)** + **press quote (Music Vine)** on the right.
5. **Bio** — **Dark charcoal** section. **Two columns:** left = "Hi, I'm Qveen" + social icons + portrait; right = bio paragraphs.
6. **Dark blue section** — Two-column: creative process text | big italic quote "He knows how to invoke a feeling" / Spotify UK; then hand/visual + mashups text + **contact** (Brands / Music emails).
7. **Extended bio** — Same blue, one paragraph.
8. **moments** — Light grey. Big "moments" heading, **horizontal scrolling image gallery** (arrow to scroll), quote, FUJIFILM attribution.
9. **Playlists** — Light grey. "Playlists" + Edit links, **grid of 6 cards** (square image, title, description).
10. **Vertical social** — Fixed right sidebar (Instagram, TikTok, YouTube). "top of page" / "bottom of page" links.

## Run locally

```bash
npx serve .
# or open index.html in a browser
```

## Customize

- **Copy** — Replace all `[your …]` placeholders in `index.html` with your bio, quotes, and story.
- **Hero image** — In `styles.css`, on `.hero-bg`, set `background-image: url('your-hero.jpg');` and adjust `background-size` / `background-position` as needed.
- **Album covers** — Add `<img src="cover1.jpg" alt="Release name" />` inside each `.cover-item` and remove the inner `<span class="cover-img">`.
- **Portrait** — Replace `.bio-portrait` with an `<img>` or set a `background-image` on `.bio-portrait`.
- **Hand/visual** — Replace `.hand-placeholder` with an `<img>` for the sunglasses/hand asset.
- **Moments gallery** — Replace each `.moments-slide` with an `<img>` or div with `background-image`; add more slides if you like.
- **Playlist cards** — Add real cover images to each `.playlist-card-img` (or use `<img>`).
- **Links** — Set real URLs for streaming (Apple Music, Spotify, etc.) and social (Instagram, TikTok, YouTube), and for the two "Edit" playlist links (Spotify profile, Apple Music profile).

## Deploy

Upload the folder to any static host (Netlify, Vercel, GitHub Pages, etc.) and point **qveenmusic.com** at it. No build step.
