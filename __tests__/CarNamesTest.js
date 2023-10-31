import { describe } from 'node:test';
import CarNameValidator from '../src/models/CarNameValidator';

describe('자동차 이름 유효성 테스트', () => {
  it('자동차 이름 5자 초과', () => {
    const carNames = ['KIA', 'Volvo', 'Ferrari'];

    expect(() => {
      CarNameValidator.validateCarName(carNames);
    }).toThrow('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
  });

  it('자동차 이름을 입력하지 않음', () => {
    const carNames = ['Tesla', ''];

    expect(() => {
      CarNameValidator.validateCarName(carNames);
    }).toThrow('[ERROR] 자동차 이름을 입력해주세요.');
  });

  it('자동차 이름을 아무것도 입력하지 않음', () => {
    const carNames = [''];

    expect(() => {
      CarNameValidator.validateCarName(carNames);
    }).toThrow('[ERROR] 자동차 이름을 입력해주세요.');
  });

  it('한 개의 유효한 입력', () => {
    const carNames = ['링컨'];

    expect(() => {
      CarNameValidator.validateCarName(carNames);
    }).not.toThrow();
  });

  it('다수의 유효한 입력', () => {
    const carNames = ['g70', 'g80', 'g90', '토요타'];

    expect(() => {
      CarNameValidator.validateCarName(carNames);
    }).not.toThrow();
  });
});