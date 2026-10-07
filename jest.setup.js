// Release Pipeline V1 N+1 (REPOSITORY_REMEDIATION): Jest mocks for native modules
// that the App render test requires. Uses each library's documented Jest mock.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)
jest.mock('react-native-localize', () => require('react-native-localize/mock'))
require('react-native-gesture-handler/jestSetup')
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('react-native-device-info', () => require('react-native-device-info/jest/react-native-device-info-mock'))
