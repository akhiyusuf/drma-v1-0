const fs = require('fs');
const path = require('path');

const prompt = process.argv[2];
const outputPath = process.argv[3] || `together_${Date.now()}.png`;
const width = parseInt(process.argv[4]) || 1024;
const height = parseInt(process.argv[5]) || 1024;
const apiKey = process.env.TOGETHER_API_KEY;

if (!prompt || !apiKey) {
  console.error('Error: Missing prompt or TOGETHER_API_KEY');
  process.exit(1);
}

async function generateWithTogether(prompt, apiKey, outputPath, width, height, retries = 5) {
  const waitTime = 10000; // 10 seconds

  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Together AI: Generating ${width}x${height} image (Attempt ${i + 1}/${retries})...`);
      const response = await fetch('https://api.together.xyz/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'black-forest-labs/FLUX.1-schnell',
          prompt: prompt,
          width: width,
          height: height,
          steps: 4,
          n: 1,
          response_format: 'b64_json'
        })
      });

      if (response.status === 429) {
        console.warn(`Together AI Rate limited. Waiting 10s...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Together API error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      if (!data.data || data.data.length === 0) {
        throw new Error('No images returned from Together API');
      }

      const b64Data = data.data[0].b64_json;
      const buffer = Buffer.from(b64Data, 'base64');
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`Success: Together image saved to ${outputPath}`);
      return true;

    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}. Retrying in 10s...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
}

generateWithTogether(prompt, apiKey, outputPath, width, height);
