const assert = require("assert");

const val = require("./helpers/validation");

describe("val.validation(typed_word)", function() {
    it("should return true for words in the dictionary", function(){
        assert(val.validation("oswego") === true);
    });

    it("should return false for words not in the dictionary", function(){
        assert(val.validation("volcano") === false);
    });
});
