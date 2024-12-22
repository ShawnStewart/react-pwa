/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OneOrMore } from '../type-utils';

type DeepMerge<T1, T2> = {
  [K in keyof T1 | keyof T2]: K extends keyof T1
    ? K extends keyof T2
      ? T1[K] extends object
        ? T2[K] extends object
          ? DeepMerge<T1[K], T2[K]> // Recursively merge nested objects
          : T2[K] // Use T2's value if not an object
        : T2[K] // Use T2's value if T1's value is not an object
      : T1[K] // Use T1's value if not in T2
    : K extends keyof T2
      ? T2[K] // Use T2's value if not in T1
      : never;
};

type DeepMergeAll<T extends any[]> = T extends [infer F, ...infer R]
  ? R extends any[]
    ? DeepMerge<F, DeepMergeAll<R>>
    : F
  : unknown;

/**
 * Deeply merges two or more objects. Objects with the same keys are recursively merged.
 * Arrays are concatenated by default. Other types are overwritten by the last object.
 * @param objects - The objects to merge.
 * @returns A new deeply merged object.
 */
export function deepMerge<T extends OneOrMore<object>>(...objects: T) {
  const isObject = (item: any): item is object => {
    return item && typeof item === 'object' && !Array.isArray(item);
  };

  return objects.reduce(
    (acc, obj) => {
      if (!obj) return acc;

      Object.keys(obj).forEach((key) => {
        const accValue = (acc as any)[key];
        const objValue = (obj as any)[key];

        if (Array.isArray(accValue) && Array.isArray(objValue)) {
          // Concatenate arrays
          (acc as any)[key] = accValue.concat(objValue);
        } else if (isObject(accValue) && isObject(objValue)) {
          // Recursively merge objects
          (acc as any)[key] = deepMerge(accValue, objValue);
        } else {
          // Overwrite with new value
          (acc as any)[key] = objValue;
        }
      });

      return acc;
    },
    {} as T[0],
  ) as DeepMergeAll<T>;
}
