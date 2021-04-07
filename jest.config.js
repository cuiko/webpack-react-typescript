module.exports = {
  roots: ['<rootDir>/test'],
  testRegex: 'test/(.+)_test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
