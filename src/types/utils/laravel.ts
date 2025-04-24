type LaravelResponse<S = unknown, E = unknown> =
  | LaravelSuccess<S>
  | LaravelError<E>
  | undefined;

export interface LaravelSuccess<T = unknown> {
  success: true;
  message: string;
  data: T;
}

export interface LaravelError<T extends Array<string> | unknown = unknown> {
  success: false;
  message: string;
  errors?: T extends Array<string> ? { [k in T[number]]: string[] } : T;
}

export interface LaravelObject {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface LaravelPagination<T = unknown> {
  current_page: number;
  data: T;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url: string | null; label: string; active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export type TODO = any;

export default LaravelResponse;
