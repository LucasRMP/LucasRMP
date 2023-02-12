module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@rmp/eslint-config-custom`
  extends: ['@rmp/eslint-config-custom/nextjs'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
