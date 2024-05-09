export const SIZE = ['xs', 'sm', 'md', 'lg'] as const;
export type Size = (typeof SIZE)[number];
