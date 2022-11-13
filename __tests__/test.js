class Random {
  constructor() {}

  static pickNumberInRange(startInclusive, endInclusive) {
    Random.#validateRange(startInclusive, endInclusive);

    startInclusive = Math.ceil(startInclusive);

    return (
      Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) +
      startInclusive
    );
  }

  static #isNumber(value) {
    return typeof value === "number";
  }

  static #validateRange(startInclusive, endInclusive) {
    if (!Random.#isNumber(startInclusive) || !Random.#isNumber(endInclusive)) {
      throw new Error("arguments must be numbers.");
    }

    if (startInclusive < Number.MIN_SAFE_INTEGER) {
      throw new Error(
        "startInclusive cannot be less than Number.MIN_SAFE_INTEGER"
      );
    }

    if (endInclusive > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        "endInclusive cannot be greater than Number.MAX_SAFE_INTEGER."
      );
    }

    if (startInclusive > endInclusive) {
      throw new Error(
        `startInclusive ${startInclusive} cannot be greater than endInclusive ${endInclusive}.`
      );
    }

    if (endInclusive - startInclusive >= Number.MAX_VALUE) {
      throw new Error("the input range is too large.");
    }
  }

  static pickNumberInList(array) {
    Random.#validateEmptyArray(array);

    return array[Random.pickNumberInRange(0, array.length - 1)];
  }

  static #validateEmptyArray(array) {
    if (!Array.isArray(array)) {
      throw new Error("the argument must be an array.");
    }

    if (!array.every((v) => Random.#isNumber(v))) {
      throw new Error("array elements must be numbers.");
    }

    if (array.length === 0) {
      throw new Error("argument array cannot be empty.");
    }
  }

  static pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    Random.#validateIntsRange(startInclusive, endInclusive, count);

    const result = [];

    for (let i = startInclusive; i <= endInclusive; i++) {
      result.push(i);
    }

    return Random.shuffle(result).slice(0, count);
  }

  static #validateIntsRange(startInclusive, endInclusive, count) {
    if (
      !Random.#isNumber(startInclusive) ||
      !Random.#isNumber(endInclusive) ||
      !Random.#isNumber(count)
    ) {
      throw new Error("arguments must be numbers.");
    }

    if (count < 0) {
      throw new Error("count cannot be less than zero.");
    }

    if (endInclusive - startInclusive + 1 < count) {
      throw new Error(
        `count: ${count} cannot be greater than the input range (endInclusive - startInclusive): ${
          endInclusive - startInclusive
        }.`
      );
    }
  }

  static shuffle(array) {
    Random.#validateEmptyArray(array);

    return array.sort(() => Math.random() - 0.5);
  }
}

const random = new Random();
const mockRandoms = (numbers) => {
  random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, random.pickUniqueNumbersInRange);
};

mockRandoms([
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
]);
