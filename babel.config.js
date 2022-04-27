module.exports ={
    presets: [
        "next/babel",
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins : [
        ["styled-components", { "ssr": true }],
        "inline-react-svg"
    ]
};