import { AccessGuard } from '../guards/access.guard';

describe('AccessGuard', () => {
  it('should be defined', () => {
    expect(new AccessGuard()).toBeDefined();
  });
});
