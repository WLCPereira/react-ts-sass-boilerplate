const config = {
  rootDir: './',
  globals: {
    NODE_ENV: 'test',
  },
  clearMocks: true,
  transform: {
    '\\.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  setupFilesAfterEnv: ['<rootDir>/config/test/setupTest.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg|png)$': 'identity-obj-proxy',
    '@Styles/(.*)': '<rootDir>/src/$1',
    '@Pages/(.*)': '<rootDir>/src/ṕages/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@BarrelComponents': '<rootDir>/src/components/index.ts'
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/coverage/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[tj]s?(x)',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/components/index.ts',
    '!<rootDir>/src/pages/index.ts',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'json', 'text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      branches: 95,
      lines: 95,
      functions: 95,
      statements: 95,
    },
    './**/': {
      branches: 95,
      lines: 95,
      functions: 95,
      statements: 95,
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suitName: 'jest test',
        outputDirectory: './coverage/',
        outputName: 'junit.xml',
        classNameTemplate: '{className} - {title}',
        ancestorSeparator: '>',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};

export default config;
