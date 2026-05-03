import pgPromise from "pg-promise";

import config from './config'

const pgp = pgPromise()

const db = pgp(`postgres://${config.postgresUser}:${config.postgresPassword}@${config.postgresHost}:${config.postgresPort}/${config.postgresDb}`)

export default db;
