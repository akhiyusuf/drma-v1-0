---
name: together-flux
description: Fast image generation using Together AI's FLUX.1 [schnell] Free endpoint. Use this for high-speed photorealistic image generation with minimal limits.
---

# Together AI FLUX.1 [schnell] Generation

This skill uses Together AI's optimized FLUX.1 [schnell] model for rapid image generation.

## Prerequisites

- **API Key**: Set `TOGETHER_API_KEY` in your environment.
- **Node.js**: Required to run the generation script.

## Usage

1.  **Formulate Prompt**: Create a descriptive prompt. 
    *   **Modesty Requirements**: All women must wear full hijab (covering hair and neck) and loose-fitting, opaque attire covering the full body.
    *   **Visibility**: Only faces and hands are allowed to show.
    *   **Privacy**: Faces must be aesthetically blurred, turned away, or out of focus.
2.  **Execute**: Run the script with `node`.

### Example

```bash
node together-flux/scripts/generate.cjs "A modest terracotta abaya, full hijab, Middle Eastern model, only face and hands visible, face blurred, 8k" "public/images/hero.png" 1216 832
```

## Best Practices

- **Schnell Model**: Optimized for 4 steps. Supports custom resolutions (multiples of 16 recommended).
- **Dimensions**: Match the container's aspect ratio.
    - **Hero/Landscape**: 1216x832 or 1024x768.
    - **Portrait/Product**: 832x1024.
- **Diversity**: Explicitly mention ethnicity and skin tones.
- **Modesty**: Always specify "full hijab" and "attire covering full body except face and hands."
