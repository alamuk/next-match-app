import { ZodIssue } from 'zod';

type ActionResult<T> =
  | { status: 'success'; data: T; message: string }
  | { status: 'error'; error: string | ZodIssue[] };
