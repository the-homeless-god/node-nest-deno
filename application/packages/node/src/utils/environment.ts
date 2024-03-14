import dotenv from 'dotenv';

dotenv.config();

export const getEnironmentKey = (name: string): string => {
  const env = process.env[name];

  if (env) {
    return env;
  }

  const error = new Error(`${name} is not defined at .env file`);
  console.error(error);

  throw error;
};

export const URL: string = getEnironmentKey('URL');
export const PORT: string = getEnironmentKey('PORT');
export const FULL_URL = `${URL}:${PORT}`;
