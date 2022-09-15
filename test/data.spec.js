import {filGry, filHuf, filRav, filSly} from '../src/data.js';
import {sortDataAZ, sortDataZA} from '../src/data.js';
import {humanos} from '../src/data.js';
import characters from '../src/main.js';
// import {porcentaje} from '../src/main.js';


describe('filtrados', () => {
  it('comrueba que filGry es una función', () => {
    console.log(typeof filGry)
    expect(typeof filGry).toBe('function');
    //expect(typeof filGry).not.toBe('number');
  })
});

describe('filtrados', () => {
  it('comrueba que filHuf es una función', () => {
    console.log(typeof filHuf)
    expect(typeof filHuf).toBe('function');
  })
});

describe('filtrados', () => {
    it('comrueba que filRav es una función', () => {
      console.log(typeof filRav)
      expect(typeof filRav).toBe('function');
    });
});

describe('filtrados', () => {
  it('comrueba que filSly es una función', () => {
    console.log(typeof filSly)
    expect(typeof filSly).toBe('function');
  });
});

describe('ordenados', () => {
  it('comrueba que sortDataAZ es una función', () => {
    console.log(typeof sortDataAZ)
    expect(typeof sortDataAZ).toBe('function');
  });
});

describe('ordenados', () => {
  it('comrueba que sortDataZA es una función', () => {
    console.log(typeof sortDataZA)
    expect(typeof sortDataZA).toBe('function');
  });
});

describe('especieHumanos', () => {
  it('comrueba que humanos es una función', () => {
    console.log(typeof humanos)
    expect(typeof humanos).toBe('function');
  });
});

test('Gryffindor se encuentra en filGry', () => {
  expect(characters.house).toContain('Gryffindor');
  expect(new filGry(characters)).toContain('Gryffindor');
});

test('Hufflepuff se encuentra en filHuf', () => {
  expect(characters.house).toContain('Hufflepuff');
  expect(new filHuf(characters)).toContain('Hufflepuff');
});

test('Ravenclaw se encuentra en filRav', () => {
  expect(characters.house).toContain('Ravenclaw');
  expect(new filGry(characters)).toContain('Ravenclaw');
});

test('Slytherin se encuentra en filSly', () => {
  expect(characters.house).toContain('Slytherin');
  expect(new filSly(characters)).toContain('Slytherin');
});

test('Human se encuentra en humanos', () => {
  expect(characters.species).toContain('Human');
  expect(new humanos(characters)).toContain('Human');
});
 
/*test('a mayor que b', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});*/

/*describe('Operaciones matemáticas', () => {
  
  test('Realizamos la multiplicacion', () => {
      expect(multiplicar(numHum,100)).toBe(?));
  });*/

/*describe('Operaciones matemáticas', () => {
  test('Realizamos la division', () => {
      expect(dividir((numHum*100),characters.length)).toBe(porcentaje);
  });
});*/