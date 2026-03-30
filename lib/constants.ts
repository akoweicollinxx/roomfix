export const PUTER_WORKER_URL = import.meta.env.VITE_PUTER_WORKER_URL || "";

// Storage Paths
export const STORAGE_PATHS = {
    ROOT: "roomfix",
    SOURCES: "roomfix/sources",
    RENDERS: "roomfix/renders",
} as const;

// Timing Constants (in milliseconds)
export const SHARE_STATUS_RESET_DELAY_MS = 1500;
export const PROGRESS_INCREMENT = 15;
export const REDIRECT_DELAY_MS = 600;
export const PROGRESS_INTERVAL_MS = 100;
export const PROGRESS_STEP = 5;

// UI Constants
export const GRID_OVERLAY_SIZE = "60px 60px";
export const GRID_COLOR = "#3B82F6";

// HTTP Status Codes
export const UNAUTHORIZED_STATUSES = [401, 403];

// Image Dimensions
export const IMAGE_RENDER_DIMENSION = 1024;

export const ROOMFIX_RENDER_PROMPT = `
TASK: Fully redesign and furnish the uploaded room into a high-end, photorealistic interior space.

STRICT RULES:
1) PRESERVE STRUCTURE:
   - Keep the original room’s walls, floor, ceiling, windows, and doors EXACTLY as they are.
   - Do NOT change layout, dimensions, or camera perspective.

2) COMPLETE INTERIOR DESIGN:
   - Completely redesign the interior from scratch.
   - Replace any existing furniture with a cohesive, professionally designed setup.
   - Furnish the space fully based on the room type.

3) SMART ROOM DETECTION:
   - Identify the room type automatically (living room, bedroom, kitchen, bathroom, office, etc.).
   - Apply appropriate interior design principles for that space.

4) FULL FURNISHING (MANDATORY):
   - Add realistic, properly scaled furniture and decor to make the space complete and livable.

   Examples:
   - Living Room → sofa, coffee table, TV unit, rug, lighting, decor
   - Bedroom → bed, bedside tables, lamps, wardrobe, soft furnishings
   - Kitchen → cabinets, counters, stools, appliances, lighting
   - Bathroom → sink, toilet, shower/tub, mirror, lighting
   - Office → desk, chair, shelving, lighting

5) DESIGN QUALITY:
   - Follow high-end interior design standards (balance, spacing, symmetry, proportion).
   - Ensure the space feels intentional, not random or cluttered.

6) STYLE APPLICATION:
   - Apply a cohesive design style (based on user input if provided).
   - Maintain consistent colors, materials, and finishes across all elements.

7) MATERIALS & TEXTURES:
   - Use realistic materials: wood, marble, fabric, glass, metal, stone.
   - Avoid artificial or plastic-looking surfaces.

8) LIGHTING:
   - Use natural daylight as the base.
   - Add realistic interior lighting (ceiling lights, lamps, ambient lighting).

9) REALISM:
   - Ensure furniture scale, spacing, and placement are physically realistic.
   - Output must look like a real photograph, not CGI or illustration.

10) CLEAN OUTPUT:
   - No text, labels, watermarks, or overlays.

STYLE OPTIONS (optional input):
- modern luxury
- minimalist
- scandinavian
- industrial
- contemporary
- bohemian

OUTPUT:
A fully furnished, professionally designed, photorealistic version of the same room with preserved structure and enhanced interior.
`.trim();