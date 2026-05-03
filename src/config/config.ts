import dotenv from 'dotenv'

dotenv.config()

interface Config {
    port: number;
    nodeEnv: string;
    postgresHost: string;
    postgresPort: number;
    postgresUser: string;
    postgresPassword: string;
    postgresDb: string;
}

const config: Config = {
    port: Number(process.env['PORT']) || 4000,
    nodeEnv: process.env['NODE_ENV'] || 'development',
    postgresHost: process.env['POSTGRES_HOST'] || 'localhost',
    postgresPort: Number(process.env['POSTGRES_PORT']) || 5432,
    postgresUser: process.env['POSTGRES_USER'] || 'postgres',
    postgresPassword: process.env['POSTGRES_PASSWORD'] || '',
    postgresDb: process.env['POSTGRES_DB'] || 'postgres',
};

export default config
