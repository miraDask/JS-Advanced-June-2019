let solve = (function () {
    return {
        add: (vec1, vec2) => {
            let result = [];
            result.push(vec1[0] + vec2[0]);
            result.push(vec1[1] + vec2[1]);
            return result;
        },
        multiply: (vec, scalar) => {
            return vec.map(n => n * scalar);
        },
        length: (vec) => {
            return Math.sqrt(vec[0] ** 2 + vec[1] ** 2);
        },
        dot: (vec1, vec2) => {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
        },
        cross: (vec1, vec2) => {
            return vec1[0] * vec2[1] - vec1[1] * vec2[0];
        }
    }
})();

