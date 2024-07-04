export const SIZE = ['xs', 'sm', 'md', 'lg'] as const;
export type Size = (typeof SIZE)[number];

export const FONT_SIZE_MAP = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
} as const;
