/** @type {import('jest').Config} */
module.exports = {
  ...require('@rmp/jest-config/nextjs'),
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css$': 'itentity-obj-proxy',
  },
}
