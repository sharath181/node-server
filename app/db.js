const Pool = require("pg").Pool;

const pool = new Pool({
    user: "cehntnmesclxvn",
    password: "aabf93990eeb525d84c2ee2e9f8f9d9dc9dd3e99214ba14d0356698c8f8b3b06",
    host: "ec2-52-71-161-140.compute-1.amazonaws.com",
    port: 5432,
    database: "d5l097skrv9563"
});

module.exports = pool;
