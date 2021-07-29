import { Test, TestingModule } from '@nestjs/testing';
import { DelivryStatusResolver } from './delivry-status.resolver';

describe('DelivryStatusResolver', () => {
  let resolver: DelivryStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DelivryStatusResolver],
    }).compile();

    resolver = module.get<DelivryStatusResolver>(DelivryStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
