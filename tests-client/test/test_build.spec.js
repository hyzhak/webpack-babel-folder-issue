import { inside } from './inside_of_subdirectory';
import { outside } from '../../src/outside_of_subdirectory';

describe('webpack + babel building', () => {
  it('should work inside', () => {
    inside();
  });
  it('should work outside', () => {
    outside();
  });
});
