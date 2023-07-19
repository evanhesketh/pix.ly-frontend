interface PhotoInterface {
  id: number,
  url: string,
  fileName: string,
  make: string | null,
  model: string | null,
  date: string | null
};

interface PhotoApiDataInterface {
  data: PhotoInterface[],
  isLoading: Boolean,
  errors: Array<any> | null
};

export type {PhotoInterface, PhotoApiDataInterface};