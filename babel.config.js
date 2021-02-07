module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true, // 使用尚在“提议”阶段特性的 polyfill
        },
      },
    ],
    "@babel/typescript",
  ],
  // plugins: [
  //   "@babel/proposal-class-properties",
  //   "@babel/proposal-object-rest-spread",
  // ],
};
