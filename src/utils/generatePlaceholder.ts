/**
 * Utility functions for generating LQIP (Low Quality Image Placeholders)
 */

/**
 * Generate a tiny base64 placeholder from an image URL
 * This creates a 20x20 blurred version for instant display
 */
export const generatePlaceholder = async (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      // Create a tiny canvas (20x20 pixels)
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set tiny dimensions for placeholder
      const size = 20;
      canvas.width = size;
      canvas.height = size;

      // Draw the image scaled down
      ctx.drawImage(img, 0, 0, size, size);

      // Convert to base64 with low quality
      const placeholder = canvas.toDataURL('image/jpeg', 0.1);
      resolve(placeholder);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = imageSrc;
  });
};

/**
 * Generate a solid color placeholder based on the dominant color
 * Useful as an even faster fallback
 */
export const generateColorPlaceholder = (width: number, height: number, color: string = '#e5e7eb'): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  canvas.width = width;
  canvas.height = height;
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Create a gradient placeholder
 * Provides a nice visual while image loads
 */
export const generateGradientPlaceholder = (
  width: number, 
  height: number, 
  colorStart: string = '#f3f4f6', 
  colorEnd: string = '#e5e7eb'
): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  canvas.width = width;
  canvas.height = height;
  
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Extract dominant color from an image
 * Can be used to create themed placeholders
 */
export const getDominantColor = async (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Sample from center of image
      const size = 10;
      canvas.width = size;
      canvas.height = size;
      
      ctx.drawImage(img, 0, 0, size, size);
      
      const imageData = ctx.getImageData(0, 0, size, size).data;
      let r = 0, g = 0, b = 0;
      
      // Calculate average color
      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }
      
      const pixelCount = imageData.length / 4;
      r = Math.round(r / pixelCount);
      g = Math.round(g / pixelCount);
      b = Math.round(b / pixelCount);
      
      resolve(`rgb(${r}, ${g}, ${b})`);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = imageSrc;
  });
};
