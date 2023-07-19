interface PhotoInterface {
  id: number,
  url: string,
  fileName: string,
  make: string | null,
  model: string | null,
  date: string | null
};

export type {PhotoInterface};