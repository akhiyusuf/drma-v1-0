#!/bin/bash
# TOGETHER_API_KEY should be set in the environment

mkdir -p public/images

echo "Starting high-speed Together AI asset generation with blacked-out sun shades and safe-zone composition..."

# Function to generate with specific size
# Usage: generate_image "prompt" "output_path" "width" "height"
generate_image() {
    echo "Generating $2 ($3x$4)..."
    node together-flux/scripts/generate.cjs "$1" "$2" "$3" "$4"
}

# 1. Home Hero Image - Landscape (1280x720)
generate_image "Cinematic high-fashion photography. An elegant Middle Eastern woman wearing a modest terracotta abaya and a full matching hijab. She is wearing dark blacked-out sun shades that completely hide her eyes. She stands in a sun-drenched minimalist Mediterranean courtyard. Composition: The model is positioned in the lower half of the frame, with the top half being beautiful architectural arches and clear sky, providing ample empty space for website navigation and header overlay. 8k, photorealistic." "public/images/hero-main.png" 1280 720

# 2. Shop Hero Image - Landscape (1280x720)
generate_image "High-end fashion editorial. A South Asian woman in a layered modest silk ensemble and full hijab, wearing opaque black sunglasses that completely obscure her eyes. She is walking through a high-end minimalist boutique. Composition: The subject is in the lower center of the frame, leaving the top third of the image as clean wall space for header text. Opaque modest clothing, only face and hands visible. 8k, professional lighting." "public/images/hero-shop.png" 1280 720

# 3. Mission Hero Image - Landscape (1280x720)
generate_image "Documentary style high-fashion photography. A woman of African heritage wearing a modest linen abaya and full hijab, wearing dark blacked-out sun shades, inspecting high-quality sustainable fabrics in a bright ethical workshop. Composition: The woman is focused in the bottom center of the frame, with significant headroom at the top for site navigation. Warm natural light, cinematic depth of field. 8k." "public/images/hero-mission.png" 1280 720

# 4. About Hero Image - Landscape (1280x720)
generate_image "Atmospheric fashion photography. A fair-skinned woman wearing a modest kimono and full hijab, wearing dark blacked-out sun shades that hide her eyes, standing on a balcony overlooking a desert landscape at dusk. Composition: Subject is in the lower-right quadrant, with the top and left areas consisting of clean sky and horizon for text and header. Only face and hands visible. 8k." "public/images/hero-about.png" 1280 720

# 5. Product 1 - Portrait (832x1024)
generate_image "Product photography, charcoal gray Linen Abaya worn by a model with a deep melanin-rich skin tone. She wears a full matching hijab and dark blacked-out sun shades. Attire covers everything except face and hands. Minimalist background, focus on fabric, 8k." "public/images/product-linen-abaya.png" 832 1024

# 6. Product 2 - Portrait (832x1024)
generate_image "Studio photography, olive green Silk Medina Hijab worn elegantly by a model with a South Asian skin tone. She wears a full-coverage modest dress and opaque black sunglasses. Only face and hands are visible. Focus on silk texture, 8k." "public/images/product-silk-hijab.png" 832 1024

# 7. Product 3 - Portrait (832x1024)
generate_image "High-end product photography, terracotta Prayer Set worn by an East Asian model. Full-length khimar and skirt. She is wearing dark blacked-out sun shades. Face and hands are visible. Natural lighting, 8k." "public/images/product-prayer-set.png" 832 1024

# 8. Product 4 - Portrait (832x1024)
generate_image "Macro photography of an embroidered Kaftan. In the background, a model with a fair skin tone is visible wearing a full hijab and modest dress with dark blacked-out sun shades. 8k." "public/images/product-kaftan.png" 832 1024

# 9. Product 5 - Portrait (832x1024)
generate_image "Fashion photography, dusty rose Organic Cotton Kimono worn by a model with African heritage. She wears a full modest dress, matching hijab, and dark blacked-out sun shades. Lush garden, 8k." "public/images/product-kimono.png" 832 1024

# 10. Mission Detail 1 - Landscape (1024x768)
generate_image "Ethical garment workshop. Diverse women workers in full hijabs and modest clothing, wearing dark blacked-out sun shades. Clean, professional environment, 8k." "public/images/mission-ethical.png" 1024 768

# 11. Mission Detail 2 - Landscape (1024x768)
generate_image "Artisan hands (Middle Eastern) weaving on a loom. The artisan is partially visible wearing a traditional hijab and dark blacked-out sun shades. Warm nostalgic lighting, 8k." "public/images/mission-artisan.png" 1024 768

echo "All high-speed assets with blacked-out sun shades and safe-zones generated successfully."
