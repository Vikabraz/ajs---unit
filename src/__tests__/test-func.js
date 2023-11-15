import getHealthStatus from '../func-health';

// test('status at health: 50', () => {
//   const result = getHealthStatus(50);
//   expect(result).toBe('wounded');
// });

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
])(
  'testing healthStatus function with %i points and %s status',
  (hp, expected) => {
    expect(getHealthStatus(hp)).toBe(expected);
  },
);
