import COLOR from '@/styles/colors.module.scss';
import { getKeys, getValues } from '@/util/object';

/**
 * カラーパレット
 */
export { COLOR };

/**
 * カラーのキー名
 */
export const COLOR_KEYS = getKeys(COLOR);
/**
 * カラーの値
 */
export const COLOR_VALUES = getValues(COLOR);

/**
 * カラーの型
 */
export type Color = typeof COLOR;

/**
 * カラーのキーの型
 */
export type ColorKey = (typeof COLOR_KEYS)[number];

/**
 * カラーの値の型
 */
export type ColorValue = (typeof COLOR_VALUES)[number];
