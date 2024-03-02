const babel = require("@babel/core");

const options = {
  presets: ["@babel/preset-env"],
  targets: {
    chrome: "110"
  }
};
const code = "const b = [3, 2, 1].map(n => n + 1);";

try {
  const result = babel.transformSync(code);
  console.log(result.code);
} catch (error) {
  console.error(error);
}
