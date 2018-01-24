// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]

const filterQs = xs => curry(filter(curry(match(/q/i))))(xs);
