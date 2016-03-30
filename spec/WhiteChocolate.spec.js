define(["lib/lodash", "src/WhiteChocolate"], function(_, WhiteChocolate) {
    "use strict";
    describe("WhiteChocolate", function () {
        it("is a function", function () {
            expect(_.isFunction(WhiteChocolate)).toBe(true);
        });
    });
    describe("an instance of WhiteChocolate", function () {
        var myChocolate = new WhiteChocolate();
        it("is an object", function () {
            expect(_.isObject(myChocolate)).toBe(true);
        });
        it("is white", function () {
            expect(myChocolate.color).toBe("white");
        });
    });
});
