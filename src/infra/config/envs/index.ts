interface IConfigEnvironment {
  [key: string]: string;
}

export const configEnvironments = (): IConfigEnvironment => {
  const envs = {
    DB_HOST: null,
    DB_PORT: null,
    DB_USER: null,
    DB_PASS: null,
    DB_NAME: null,
    JWT_SECRET: null,
  };

  Object.keys(envs).forEach(env => {
    if (!process.env[env]) {
      throw new Error(`Could not find variable: ${env}`);
    }
    envs[env] = process.env[env];
  });

  return envs;
};
