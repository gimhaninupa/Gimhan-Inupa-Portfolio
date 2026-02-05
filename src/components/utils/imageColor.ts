/**
 * Extracts the dominant color from an image URL.
 * Uses a canvas to analyze the average color of the image.
 * 
 * @param imageUrl The URL of the image to analyze
 * @returns A promise that resolves to the hex color string (e.g., "#RRGGBB")
 */
export async function getDominantColor(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                reject("Could not get canvas context");
                return;
            }

            // Set canvas size to 1x1 to get average color automatically
            canvas.width = 1;
            canvas.height = 1;

            // Draw image resized to 1x1
            ctx.drawImage(img, 0, 0, 1, 1);

            // Get pixel data
            const pixelData = ctx.getImageData(0, 0, 1, 1).data;

            // Convert to hex
            const r = pixelData[0].toString(16).padStart(2, '0');
            const g = pixelData[1].toString(16).padStart(2, '0');
            const b = pixelData[2].toString(16).padStart(2, '0');

            resolve(`#${r}${g}${b}`);
        };

        img.onerror = (error) => {
            reject(error);
        };
    });
}
