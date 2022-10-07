module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './styles/tailwind.config.js',
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'none',
    endOfLine: 'auto'
}