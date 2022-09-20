import { sortDataAZ, sortDataZA, filterByProperty } from '../src/data.js';


describe('Function filterByProperty', () => {
  it('should be a function', () => {
    expect(typeof filterByProperty).toBe('function');
  })

  it('should filter by house correctly', () => {
    const data = [
      { 'house': 'Gryffindor' },
      { 'house': 'Gryffindor' },
      { 'house': 'Hufflepuf' },
      { 'house': 'Ravenclaw' },
      { 'house': 'Gryffindor' },
      { 'house': 'Hufflepuf' },
      { 'house': 'Ravenclaw' },
      { 'house': 'Gryffindor' },
      { 'house': 'Slytherin' },
    ];

    const arrExpected = [
      { 'house': 'Gryffindor' },
      { 'house': 'Gryffindor' },
      { 'house': 'Gryffindor' },
      { 'house': 'Gryffindor' },
    ];

    const arrResult = filterByProperty(data, 'house', 'Gryffindor');

    expect(arrResult).toStrictEqual(arrExpected);

  })

  it('should sortDataAZ by house correctly', () => {
    const data = [
      { 'name': 'Vicente' },
      { 'name': 'Amparo' },
      { 'name': 'Sonia' },
      { 'name': 'Zoilo' },
      { 'name': 'Diana' },
      { 'name': 'Benito' },
      { 'name': 'Guadalupe' },
      { 'name': 'Patricia' },
      { 'name': 'Hector' },
      { 'name': 'Karla' },
    ];

    const arrExpected = [
      { 'name': 'Amparo' },
      { 'name': 'Benito' },
      { 'name': 'Diana' },
      { 'name': 'Guadalupe' },
      { 'name': 'Hector' },
      { 'name': 'Karla' },
      { 'name': 'Patricia' },
      { 'name': 'Sonia' },
      { 'name': 'Vicente' },
      { 'name': 'Zoilo' },
    ];

    const arrResult = sortDataAZ(data, 'name');

    expect(arrResult).toStrictEqual(arrExpected);

  })

  it('should sortDataZA by house correctly', () => {
    const data = [
      { 'name': 'Vicente' },
      { 'name': 'Amparo' },
      { 'name': 'Sonia' },
      { 'name': 'Zoilo' },
      { 'name': 'Diana' },
      { 'name': 'Benito' },
      { 'name': 'Guadalupe' },
      { 'name': 'Patricia' },
      { 'name': 'Hector' },
      { 'name': 'Karla' },
    ];

    const arrExpected = [
      { 'name': 'Zoilo' },
      { 'name': 'Vicente' },
      { 'name': 'Sonia' },
      { 'name': 'Patricia' },
      { 'name': 'Karla' },
      { 'name': 'Hector' },
      { 'name': 'Guadalupe' },
      { 'name': 'Diana' },
      { 'name': 'Benito' },
      { 'name': 'Amparo' },
    ];

    const arrResult = sortDataZA(data, 'name');

    expect(arrResult).toStrictEqual(arrExpected);

  })

});

describe('ordenados', () => {
  it('comrueba que sortDataAZ es una función', () => {
    expect(typeof sortDataAZ).toBe('function');
  });
});

describe('ordenados', () => {
  it('comrueba que sortDataZA es una función', () => {
    expect(typeof sortDataZA).toBe('function');
  });
});
