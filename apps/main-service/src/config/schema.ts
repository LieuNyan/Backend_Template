import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['local', 'development', 'production']).default('local'),
  PORT_MAINSERVICE: z.coerce.number(),
  DATABASE_URL: z.string().min(10).startsWith('postgresql://'),
});

export type Env = z.infer<typeof envSchema>;
