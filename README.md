# Bridge Miniature — Remotion Project

A vertical 60-second miniature-style construction animation.

## Video settings

- 1080 × 1920 (9:16)
- 30 frames per second
- 1,800 frames / 60 seconds
- MP4 output
- Built with Remotion, React, SVG, and CSS
- No external images or 3D software required

## 1. Install the tools

Install **Node.js LTS** on your computer:
https://nodejs.org/

Then extract this ZIP file and open a terminal in the `bridge-miniature-remotion` folder.

Install dependencies:

```bash
npm install
```

## 2. Preview and edit

Start Remotion Studio:

```bash
npm run start
```

Open the local address shown in the terminal (usually `http://localhost:3000`).

Choose the composition named `BridgeMiniature`. Use the timeline to preview the 60-second animation.

## 3. Render the MP4

Run:

```bash
npm run build
```

The finished video will be saved to:

```text
out/bridge-miniature.mp4
```

To render a still preview image:

```bash
npm run preview
```

## 4. Project structure

```text
bridge-miniature-remotion/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── Root.tsx
    ├── BridgeMiniature.tsx
    └── style.css
```

## 5. How to customize

### Change the chapter captions
Open `src/BridgeMiniature.tsx` and edit the `chapters` array near the top. Each chapter has:
- `start`: first frame
- `end`: last frame
- `title`: large chapter title
- `sub`: supporting caption

At 30 FPS, 30 frames = 1 second.

### Change the video resolution or duration
Open `src/Root.tsx`:
- `width={1080}` and `height={1920}` control the vertical resolution.
- `fps={30}` controls frame rate.
- `durationInFrames={1800}` is 60 seconds at 30 FPS.

If you change the duration, also adjust the chapter frame ranges and progress calculation in `BridgeMiniature.tsx`.

### Change colors and typography
Edit `src/style.css` for the titles, cards, background, and layout. Edit the SVG gradients and shapes in `MiniatureBridgeArt` in `src/BridgeMiniature.tsx` for the diorama colors and bridge details.

## 6. Important note about the visual

This starter project creates a stylized 2.5D miniature diorama using SVG shapes and timed animation. It is not a physically simulated 3D model. It is designed to run directly in Remotion without Blender or paid assets.

## 7. Suggested narration (optional)

1. “Every great bridge begins with a careful plan.”
2. “First, engineers survey the land, the river, and the soil.”
3. “Deep foundations are installed to anchor the structure.”
4. “Concrete piers rise to support the bridge.”
5. “Powerful cranes lift the main beams into position.”
6. “The road deck is installed, reinforced, and paved.”
7. “Safety barriers, lights, and road markings complete the work.”
8. “And now, the bridge connects two sides — and brings people together.”

Add voice-over and background music in your preferred editor after rendering, or extend the Remotion project with audio files.
