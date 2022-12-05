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
    it('should return a number when called', function () {
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