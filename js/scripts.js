var translate = function(input) {
            var output = input.replace(/e/g,"3");
            var output = output.replace(/o/g,"0");

            var output = output.replace(/s/g, "z");
            var output = output.replace(/ z/g, " s");

            var output = output.replace(/I/g,"1");
            return output;
};
