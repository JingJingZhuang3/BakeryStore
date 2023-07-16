module.exports = {
  apps: [
    {
      name: "Store_React_UI",
      script: "src/index.tsx",
      exec_interpreter: "node",
      interpreter: "ts-node",
      watch: true,
      ignore_watch: ["node_modules"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
