module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      textColor:{
        'base':({opacityValue})=>`rgba(var(--color-text-base),${opacityValue})`,
        'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
        third:'var(--color-text-third)',
    },
    backgroundColor:{
      'base':({opacityValue})=>`rgba(var(--color-text-base),${opacityValue})`,
      'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
      third:'var(--color-third)',
    }
    },
  },
  plugins: [],
}
