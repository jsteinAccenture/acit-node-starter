/* eslint-env jest */

import toBeType from 'jest-tobetype';

import Discovery from '../../../src/lib/watson/discovery';

expect.extend(toBeType);

const discovery = new Discovery();

//
// Test helper functions
//

//
// Begin Tests
//

// Global variables for testing
describe('smoke test', () => {
  test('confirm we get a response from Watson', async () => {
    expect.assertions(1);
    await expect(discovery.query('')).resolves.toBeDefined();
  });
});

describe('unit test', () => {
  test('validate query output structure from Watson', async () => {
    expect.assertions(6);
    const response: Object = await discovery.query('');
    expect(response).toBeType('object');
    expect(response.matching_results).toBeType('number');
    expect(response.results).toBeType('array');
    expect(response.results[0]).toBeType('object');
    expect(response.results[0].result_metadata).toBeType('object');
    expect(response.results[0].text).toBeType('string');
  });
});

describe('unit test', () => {
  test('validate collection output structure from Watson', async () => {
    expect.assertions(3);
    const response: Object = await Discovery.getCollections();
    expect(response).toBeType('object');
    expect(response.collections).toBeType('array');
    expect(response.collections[0]).toBeType('object');
  });
});
