import { hello } from '../../src/hello';

describe('hello', () => {
  it('returns hello', () => {
    return hello().then(r =>
      expect(r).to.eq('hello template')
    );
  });
});
