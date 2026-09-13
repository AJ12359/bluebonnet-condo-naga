const ICON_MAP = {
  'key': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m2 21 9.6-9.6\" /> <path d=\"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19\" /> <circle cx=\"15.5\" cy=\"7.5\" r=\"5.5\" /> </svg>",
  'shield': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> </svg>",
  'waves': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 12q2.5 2 5 0t5 0 5 0 5 0\" /> <path d=\"M2 19q2.5 2 5 0t5 0 5 0 5 0\" /> <path d=\"M2 5q2.5 2 5 0t5 0 5 0 5 0\" /> </svg>",
  'square-parking': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\" /> </svg>",
  'snowflake': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m10 20-1.25-2.5L6 18\" /> <path d=\"M10 4 8.75 6.5 6 6\" /> <path d=\"m14 20 1.25-2.5L18 18\" /> <path d=\"m14 4 1.25 2.5L18 6\" /> <path d=\"m17 21-3-6h-4\" /> <path d=\"m17 3-3 6 1.5 3\" /> <path d=\"M2 12h6.5L10 9\" /> <path d=\"m20 10-1.5 2 1.5 2\" /> <path d=\"M22 12h-6.5L14 15\" /> <path d=\"m4 10 1.5 2L4 14\" /> <path d=\"m7 21 3-6-1.5-3\" /> <path d=\"m7 3 3 6h4\" /> </svg>",
  'tv': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m17 2-5 5-5-5\" /> <rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\" /> </svg>",
  'wifi': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 20h.01\" /> <path d=\"M2 8.82a15 15 0 0 1 20 0\" /> <path d=\"M5 12.859a10 10 0 0 1 14 0\" /> <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" /> </svg>",
  'bed': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 4v16\" /> <path d=\"M2 8h18a2 2 0 0 1 2 2v10\" /> <path d=\"M2 17h20\" /> <path d=\"M6 8v9\" /> </svg>",
  'blinds': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 3h18\" /> <path d=\"M20 7H8\" /> <path d=\"M20 11H8\" /> <path d=\"M10 19h10\" /> <path d=\"M8 15h12\" /> <path d=\"M4 3v14\" /> <circle cx=\"4\" cy=\"19\" r=\"2\" /> </svg>",
  'fan': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z\" /> <path d=\"M12 12v.01\" /> </svg>",
  'wind': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\" /> <path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\" /> <path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\" /> </svg>",
  'square': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> </svg>",
  'shirt': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\" /> </svg>",
  'cooking-pot': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2 12h20\" /> <path d=\"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\" /> <path d=\"m4 8 16-4\" /> <path d=\"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8\" /> </svg>",
  'soup': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z\" /> <path d=\"M7 21h10\" /> <path d=\"M19.5 12 22 6\" /> <path d=\"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62\" /> <path d=\"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62\" /> <path d=\"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62\" /> </svg>",
  'microwave': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"20\" height=\"15\" x=\"2\" y=\"4\" rx=\"2\" /> <rect width=\"8\" height=\"7\" x=\"6\" y=\"8\" rx=\"1\" /> <path d=\"M18 8v7\" /> <path d=\"M6 19v2\" /> <path d=\"M18 19v2\" /> </svg>",
  'flame': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\" /> </svg>",
  'coffee': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M10 2v2\" /> <path d=\"M14 2v2\" /> <path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\" /> <path d=\"M6 2v2\" /> </svg>",
  'refrigerator': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z\" /> <path d=\"M5 10h14\" /> <path d=\"M15 7v6\" /> </svg>",
  'utensils': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\" /> <path d=\"M7 2v20\" /> <path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\" /> </svg>",
  'utensils-crossed': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\" /> <path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\" /> <path d=\"m2.1 21.8 6.4-6.3\" /> <path d=\"m19 5-7 7\" /> </svg>",
  'washing-machine': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 6h3\" /> <path d=\"M17 6h.01\" /> <rect width=\"18\" height=\"20\" x=\"3\" y=\"2\" rx=\"2\" /> <circle cx=\"12\" cy=\"13\" r=\"5\" /> <path d=\"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5\" /> </svg>",
  'shield-plus': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"M9 12h6\" /> <path d=\"M12 9v6\" /> </svg>",
  'droplets': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\" /> <path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\" /> </svg>",
  'shower-head': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m4 4 2.5 2.5\" /> <path d=\"M13.5 6.5a4.95 4.95 0 0 0-7 7\" /> <path d=\"M15 5 5 15\" /> <path d=\"M14 17v.01\" /> <path d=\"M10 16v.01\" /> <path d=\"M13 13v.01\" /> <path d=\"M16 10v.01\" /> <path d=\"M11 20v.01\" /> <path d=\"M17 14v.01\" /> <path d=\"M20 11v.01\" /> </svg>",
  'toilet': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18\" /> <path d=\"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8\" /> </svg>",
  'droplet': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\" /> </svg>",
  'toothbrush': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 11c-2 2-4 2-6 4l-7 7\" /> <path d=\"m22 4-7.414 7.414-2-2A2 2 0 0114 6c0-.512.196-1.024.586-1.414A2 2 0 0116 4a2 2 0 013.262-1.552l2.152 2.138\" /> </svg>",
  'palette': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\" /> <circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\" /> <circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" /> </svg>",
  'sparkles': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" /> <path d=\"M20 2v4\" /> <path d=\"M22 4h-4\" /> <circle cx=\"4\" cy=\"20\" r=\"2\" /> </svg>",
  'arrow-up-down': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m21 16-4 4-4-4\" /> <path d=\"M17 20V4\" /> <path d=\"m3 8 4-4 4 4\" /> <path d=\"M7 4v16\" /> </svg>",
  'camera': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\" /> <circle cx=\"12\" cy=\"13\" r=\"3\" /> </svg>",
  'phone': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" /> </svg>",
  'footprints': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\" /> <path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\" /> <path d=\"M16 17h4\" /> <path d=\"M4 13h4\" /> </svg>",
  'mic': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 19v3\" /> <path d=\"M19 10v2a7 7 0 0 1-14 0v-2\" /> <rect x=\"9\" y=\"2\" width=\"6\" height=\"13\" rx=\"3\" /> </svg>",
  'puzzle': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z\" /> </svg>",
  'target': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" /> </svg>",
  'case-sensitive': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\" /> <path d=\"M22 9v7\" /> <path d=\"M3.304 13h6.392\" /> <circle cx=\"18.5\" cy=\"12.5\" r=\"3.5\" /> </svg>",
  'dices': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"12\" height=\"12\" x=\"2\" y=\"10\" rx=\"2\" ry=\"2\" /> <path d=\"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6\" /> <path d=\"M6 18h.01\" /> <path d=\"M10 14h.01\" /> <path d=\"M15 6h.01\" /> <path d=\"M18 9h.01\" /> </svg>",
  'book-open': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 5v16\" /> <path d=\"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z\" /> </svg>",
  'clock': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 6v6l4 2\" /> </svg>",
  'cigarette-off': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13\" /> <path d=\"M18 8c0-2.5-2-2.5-2-5\" /> <path d=\"m2 2 20 20\" /> <path d=\"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866\" /> <path d=\"M22 8c0-2.5-2-2.5-2-5\" /> <path d=\"M7 12v4\" /> </svg>",
  'paw-print': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"11\" cy=\"4\" r=\"2\" /> <circle cx=\"18\" cy=\"8\" r=\"2\" /> <circle cx=\"20\" cy=\"16\" r=\"2\" /> <path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\" /> </svg>",
  'volume-x': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z\" /> <path d=\"m16.5 14.5 5-5\" /> <path d=\"m16.5 9.5 5 5\" /> </svg>",
  'users': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> </svg>",
  'trash-2': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M10 11v6\" /> <path d=\"M14 11v6\" /> <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" /> <path d=\"M3 6h18\" /> <path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" /> </svg>",
  'smartphone': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M12 18h.01\" /> </svg>",
  'message-circle': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\" /> </svg>",
  'flag': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\" /> </svg>",
  'home': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" /> </svg>",
  'play': "<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" /> </svg>"
};

function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const svg = ICON_MAP[el.dataset.icon];
    if (svg) el.innerHTML = svg;
  });
}
const PHOTOS = [
  { src: 'images/bedroom.jpg', alt: 'Bedroom with double bed and single extension', label: 'Bedroom'     },
  { src: 'images/living-room.avif', alt: 'Living room with 50-inch Smart TV and sofa',   label: 'Living room' },
  { src: 'images/kitchen.avif', alt: 'Kitchen with full cookware and appliances',    label: 'Kitchen'     },
  { src: 'images/pool.avif', alt: 'Shared outdoor pool at Residencia Magayon',    label: 'Pool'        },
  { src: 'images/bathroom.jpeg', alt: 'Bathroom with hot shower and bidet',           label: 'Bathroom'    },
  { src: 'images/balcony.jpeg', alt: 'Balcony with plants, table and chair',         label: 'Balcony'     },
  { src: 'images/dining.avif', alt: 'Dining area with 4-seater table',             label: 'Dining area' },
];

/* ============================================================
   SITE CONFIG — price & other quick facts you'll update often
   Change the number below, save, push — every element marked
   [data-price] in index.html updates automatically.
   ============================================================ */
const SITE_CONFIG = {
  pricePerNight: 3000,   // ← CHANGE THIS whenever your Airbnb price changes (digits only, no commas)
  currency: '₱'
};

function applySiteConfig() {
  document.querySelectorAll('[data-price]').forEach(el => {
    el.textContent = SITE_CONFIG.currency + SITE_CONFIG.pricePerNight.toLocaleString('en-US');
  });
}

const REVIEWS_CONFIG = {
  totalReviews: 15,
  overallRating: 5.0,
  categories: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkin: 5.0,
    communication: 5.0,
    location: 5.0,
    value: 5.0
  }
};

function applyReviewStats() {
  document.querySelectorAll('[data-review-count]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.totalReviews;
  });
  document.querySelectorAll('[data-review-count-plus]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.totalReviews + '+';
  });
  document.querySelectorAll('[data-overall-rating]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.overallRating.toFixed(1);
  });
  document.querySelectorAll('[data-cat-bar]').forEach(el => {
    const cat = el.getAttribute('data-cat-bar');
    const val = REVIEWS_CONFIG.categories[cat];
    if (val != null) {
      el.style.width = (val / 5 * 100) + '%';
      const valEl = el.closest('.bar-row')?.querySelector('.bar-val');
      if (valEl) valEl.textContent = val.toFixed(1);
    }
  });
}

function injectPhotos() {
  document.querySelectorAll('.cell[data-index]').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    const photo = PHOTOS[i];
    if (!photo || !photo.src) return;

    const img = document.createElement('img');
    img.src     = photo.src;
    img.alt     = photo.alt;
    img.loading = i === 0 ? 'eager' : 'lazy';
    img.decoding = 'async';

    cell.innerHTML = '';
    cell.appendChild(img);
  });

  document.querySelectorAll('#galleryGrid .g-cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
    cell.setAttribute('role', 'button');
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('aria-label', 'View photo: ' + (PHOTOS[i]?.label || ''));
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
    });
  });

  document.querySelectorAll('.photo-strip .cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
  });

  document.querySelectorAll('.about-photos .cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
  });
}

let currentIndex = 0;
let prevFocus    = null;

function openLightbox(index) {
  prevFocus    = document.activeElement;
  currentIndex = index;
  renderSlide(index);
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  if (prevFocus) prevFocus.focus();
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + PHOTOS.length) % PHOTOS.length;
  renderSlide(currentIndex);
}

function renderSlide(index) {
  const wrap    = document.getElementById('lbContent');
  const counter = document.getElementById('lbCounter');
  const photo   = PHOTOS[index];
  wrap.innerHTML = '';

  if (photo && photo.src) {
    const img    = document.createElement('img');
    img.src      = photo.src;
    img.alt      = photo.alt;
    img.decoding = 'async';
    wrap.appendChild(img);
  } else {
    const div       = document.createElement('div');
    div.className   = 'lb-empty';
    div.innerHTML   = `<span>📷</span><p>${photo ? photo.label : ''}</p><small>Add: images/${photo?.label?.toLowerCase().replace(/ /g, '-')}.jpg</small>`;
    wrap.appendChild(div);
  }

  if (counter) counter.textContent = (index + 1) + ' / ' + PHOTOS.length;
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click',  () => navigate(-1));
document.getElementById('lbNext').addEventListener('click',  () => navigate(1));
document.getElementById('showAllBtn').addEventListener('click', () => openLightbox(0));
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigate(-1);
  if (e.key === 'ArrowRight')  navigate(1);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById('tab-' + btn.dataset.tab);
    if (panel) panel.classList.add('active');
  });
  btn.addEventListener('keydown', e => {
    const all = [...document.querySelectorAll('.tab-btn')];
    const i   = all.indexOf(btn);
    if (e.key === 'ArrowRight') { e.preventDefault(); all[(i + 1) % all.length].focus(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); all[(i - 1 + all.length) % all.length].focus(); }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const cookieBanner = document.getElementById('cookieBanner');
if (!localStorage.getItem('bb_consent')) {
  setTimeout(() => cookieBanner.classList.add('show'), 1400);
}
document.getElementById('ckAccept').addEventListener('click', () => {
  localStorage.setItem('bb_consent', 'yes');
  cookieBanner.classList.remove('show');
});
document.getElementById('ckDecline').addEventListener('click', () => {
  localStorage.setItem('bb_consent', 'no');
  cookieBanner.classList.remove('show');
});

document.getElementById('yr').textContent = new Date().getFullYear();

injectPhotos();
applyReviewStats();
applySiteConfig();
injectIcons();