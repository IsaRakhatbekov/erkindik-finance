module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-env": {
          targets: {
            esmodules: true, // только современные браузеры
          },
          // отключить полифилы, если нужно
          useBuiltIns: false,
        },
      },
    ],
  ],
};
