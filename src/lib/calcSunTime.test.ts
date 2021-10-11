import {} from '@testing-library/react';
import { calcSunriseTime, calcSunsetTime } from './calcSunTime';

describe('useSunriseTime のテスト', () => {
  test('座標を引数として渡すと日出時刻の文字列が返ってくる', () => {
    const result = calcSunriseTime(26.212481, 127.680895);
    expect(result).toMatch(/[0-9]+\:[0-9]+\:[0-9]+/);
  });

  test('白夜、極夜で日出しない場合は "Invalid Date" が返ってくる', () => {
    const result = calcSunriseTime(-90, 0, new Date('2021-06-15'));
    expect(result).toMatch('Invalid Date');
  });
});

describe('useSunsetTime のテスト', () => {
  test('座標を引数として渡すと日没時刻の文字列が返ってくる', () => {
    const result = calcSunsetTime(26.212481, 127.680895);
    expect(result).toMatch(/[0-9]+\:[0-9]+\:[0-9]+/);
  });

  test('白夜、極夜で日没しない場合は "Invalid Date" が返ってくる', () => {
    const result = calcSunsetTime(-90, 0, new Date('2021-01-15'));
    expect(result).toMatch('Invalid Date');
  });
});
