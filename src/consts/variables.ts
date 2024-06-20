import VARIABLES from '@/styles/variables.module.scss';
import { getKeys, getValues } from '@/util/object';

/**
 * ボーダーの半径
 */
export const RADIUS = {
  xs: VARIABLES.radiusXs,
  sm: VARIABLES.radiusSm,
  md: VARIABLES.radiusMd,
  lg: VARIABLES.radiusLg,
} as const;

/**
 * ボーダーの半径のキー名
 */
export const RADIUS_KEYS = getKeys(RADIUS);

/**
 * ボーダーの半径の値
 */
export const RADIUS_VALUES = getValues(RADIUS);

/**
 * ボーダーの半径の型
 */
export type Radius = typeof RADIUS;

/**
 * ボーダーの半径のキーの型
 */
export type RadiusKey = (typeof RADIUS_KEYS)[number];

/**
 * ボーダーの半径の値
 */
export type RadiusValue = (typeof RADIUS_VALUES)[number];
