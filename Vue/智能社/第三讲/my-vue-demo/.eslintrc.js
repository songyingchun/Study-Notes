module.exports = {
    extends: [
        'plugin:vue/essential'
    ],
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "window": true,
        "document": true,
        "$": true,
        "global": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    rules: {
        "quotes": [1, "single"],
        "no-console": "off"
    }
}