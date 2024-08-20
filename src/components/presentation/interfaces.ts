export interface Argument {
  name: string;
  description?: string;
  defaultValue?: unknown;
}

export interface Option {
  flags: string;
  description: string;
  defaultValue?: string | boolean | string[];
}

export interface ProgramGenrateParams {
  name: string;
  description: string;
  arguments?: Argument[];
  options?: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action?: (...args: any[]) => void;
}
