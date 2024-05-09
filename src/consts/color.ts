import COLOR from '@/styles/colors.module.scss';
import { getKeys, getValues } from '@/util/object';

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
