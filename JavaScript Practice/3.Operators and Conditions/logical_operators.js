console.log(true && false); // false
console.log(true && true); // true
console.log(true && true && false); // false
console.log(true && true && true); // true
console.log((true && true) && true); // true
console.log();
console.log(true || false); // true
console.log(true || true); // true
console.log(true || true || false); // true
console.log(true || true || true); // true
console.log((true || true) || true); // true
console.log();
console.log(!!"JavaScript"); // true
console.log(!"JavaScript"); // false
console.log(0 || "Hello"); // Hello
console.log();
console.log((false || true) || !false); // true
console.log(("" || 0) || (null || "JavaScript")); // JavaScript
console.log(!!(false || "AI") || !!0); // true
console.log((5 || "Hello") || (0 || false)); // 5
console.log((null || undefined) || (!"" || 42)); // true
