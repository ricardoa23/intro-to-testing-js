// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//sayHello
describe('sayHello', function () {
        it('should be a defined function', function () {
            expect(typeof sayHello).toBe('function');
        });
        it('should return a string when called', function () {
          expect(typeof sayHello()).toBe('string');
        });
        it('should return a string of "Hello, Jane!" when executed', function () {
            expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
        it('should return a string of "Hello, Alex!" when executed', function () {
            expect(sayHello('Alex')).toBe('Hello, Alex!');
        });
        it('should return a string of "Hello, Pat!" when executed', function () {
            expect(sayHello('Pat')).toBe('Hello, Pat!');
        });
        it('should return a string of "Hello, World!" when executed', function () {
            expect(sayHello()).toBe('Hello, World!')
        });
        it('should return a string of "Hello, World!" when executed', function () {
            expect(sayHello(true)).toBe('Hello, World!');
        });
        it('should return a string of "Hello, World!" when executed', function () {
            expect(sayHello(false)).toBe('Hello, World!');
        });
});

//isFive

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive('5')).toBe(true);
    });
    it('should false when passed 4', function () {
        expect(isFive(4)).toBe(false);
    });
    it('should return when passed NaN', function () {
        expect(isFive(NaN)).toBe(false);
    });
    it('should return false when passed"CodeUp"', function () {
        expect(isFive('CodeUp')).toBe(false);
    });

})

//isEven

let randomBoolean = Boolean(Math.round(Math.random()))

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof (isEven)).toBe('function');
    });
    it('should  return a boolean when called', function () {
        expect(typeof(isEven())).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    })
    it('should return a value of true when passed -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should be true when passed "8"', function () {
        expect(isEven('8')).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it(`should return false when passed a ${randomBoolean}`, function () {
        expect(isEven(randomBoolean)).not.toBe(true);
    });
    it('should return false when passed without an argument', function () {
        expect(isEven(undefined)).toBe(false);
    });
})
//isVowel
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof (isVowel)).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof(isVowel())).toBe('boolean');
    });
    it('should return a value of true when passed "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return a value of true when passed "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return a value of false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it(`should return false when passed ${randomBoolean} `, function () {
        expect(isVowel(randomBoolean)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when not passed an argument', function () {
        expect(isVowel()).toBe(false);
    });
});
    
// add

    describe('add', function () {
        it('should be a defined function', function () {
            expect(typeof (add)).toBe('function');
        });
        it('should return a number', function () {
            expect(typeof add()).toBe('number');
        });
        it('should return 5 when passed 2, 3', function () {
            expect(add(2, 3)).toBe(5);
        });
        it('should return -12 when passed -3, -9', function () {
            expect(add(-3, -9)).toBe(-12);
        });
        it('should 11 when passed "5", 6', function () {
            expect(add('5', 6)).toBe(11);
        });
        it('should return 6 when passed "-4", "10"', function () {
            expect(add('-4', '10')).toBe(6);
        });
        it('should return NaN when passed "banana", "split"', function () {
           expect(add('banana', 'split')).toBeNaN();
        });
        it('should return NaN when passed 2, "apples"', function () {
            expect(add(2, 'apples')).toBeNaN();
        });
        it('should return NaN when not passed and argument', function () {
            expect(add()).toBeNaN();
        });
    });