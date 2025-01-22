module.exports = {
    apps: [
      {
        name: 'pm2test',
        script: './server.js',
        instances: 'max', 
        exec_mode: 'cluster',
        watch: false,
        env: {
          NODE_ENV: 'production',
          PORT: 3000
        },
        env_development: {
          NODE_ENV: 'development',
          PORT: 3000
        },
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        output: "./logs/output.log",
        error: "./logs/error.log"
      }
    ]
  };
  