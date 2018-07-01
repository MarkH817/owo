const { transform } = require('../src/owo')

describe('OwO', () => {
  test('greet', () => {
    expect(transform('hello')).toBe('hewwo')
  })

  test('maintain similar capitalization', () => {
    expect(transform('Look upon me with sorrow')).toBe(
      'Wook upon me with sowwow'
    )
  })

  test('does not affect characters other than "l" or "r"', () => {
    const text = 'asdasghgb'

    expect(transform(text)).toBe(text)
  })
})
