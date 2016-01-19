import { hello } from '../../src';

describe('index', () => {
  it ('exports hello', () => {
    expect(hello).to.not.be.undefined;
  });
});
