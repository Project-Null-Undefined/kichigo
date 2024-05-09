/**
 * 型安全な Object.keys()
 * @param obj オブジェクト
 * @returns オブジェクトのキーの配列
 */
export function getKeys<T extends Record<string, unknown>>(obj: T): Array<keyof T> {
  return Object.keys(obj);
}

/**
 * 型安全な Object.values()
 * @param obj オブジェクト
 * @returns オブジェクトの値の配列
 */
export function getValues<T extends Record<string, any>>(obj: T): Array<T[keyof T]> {
  return Object.values(obj);
}
