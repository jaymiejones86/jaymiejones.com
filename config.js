// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://dev.jaymiejones.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'sendgrid',
        //      host: 'smtp.sendgrid.net',
        //      options: {
        //          service: 'Sendgrid',
        //          auth: {
        //              user: '', // Super secret username
        //              pass: ''  // Super secret password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://jaymiejones.com',
        mail: {
          transport: 'SMTP',
            host: 'smtp.mailgun.org',
              options: {
                service: 'Mailgun',
                  auth: {
                  user: process.env.JJ_MAILGUN_USER,
                  pass: process.env.JJ_MAILGUN_PASS
             }
           }
        },
        database: {
            client: 'mysql',
            connection: {
              host: 'localhost',
              user: process.env.JJ_GHOST_USER,
              password: process.env.JJ_GHOST_PASS,
              database: process.env.JJ_GHOST_DB,
              charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through Github
    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
