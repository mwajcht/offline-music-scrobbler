export type ReturnType<T> = T extends (...args: Array<any>) => infer R
  ? R
  : never;

export type Omit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export interface Dict<T> {
  [key: string]: T;
}

export type ReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K];
};

export function getReadableLength(durationInSeconds: number) {
  if (durationInSeconds === null) {
    return '';
  }
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
