import { getReadableLength } from "./utils";

describe('Utils', () => {
  it('should return 0:00 for duration of 0 seconds', () => {
    const length = getReadableLength(0);
    expect(length).toEqual('0:00');
  });
  it('should return 0:25 for duration of 25 seconds', () => {
    const length = getReadableLength(25);
    expect(length).toEqual('0:25');
  });
  it('should return 1:00 for duration of 60 seconds', () => {
    const length = getReadableLength(60);
    expect(length).toEqual('1:00');
  });
  it('should return 2:03 for duration of 123 seconds', () => {
    const length = getReadableLength(123);
    expect(length).toEqual('2:03');
  });
});
