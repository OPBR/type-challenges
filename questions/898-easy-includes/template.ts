import { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer E, ...infer NT]
  ? Equal<E, U> extends true
    ? true
    : Includes<NT, U>
  : false
