import {} from '@testing-library/react';
import { useSunriseTime, useSunsetTime } from './useSunsetTime';

describe('useSunriseTime のテスト', () => {
  test('座標を引数として渡すと日出時刻の文字列が返ってくる', () => {
    const result = useSunriseTime(26.212481, 127.680895);
    expect(result).toMatch(/[0-9]+\:[0-9]+\:[0-9]+/);
  });
});

describe('useSunsetTime のテスト', () => {
  test('座標を引数として渡すと日没時刻の文字列が返ってくる', () => {
    const result = useSunsetTime(26.212481, 127.680895);
    expect(result).toMatch(/[0-9]+\:[0-9]+\:[0-9]+/);
  });
});
