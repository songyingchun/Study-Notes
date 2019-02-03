module.exports = {
    "plugins": [
        "html"
    ],
    "env": {
        "node": true,
        "jquery": true,
        "es6": true,
        "browser": true
    },
    "globals": {
        "angular": false
    },
    "parser": "babel-eslint",
    "rules": {
        "no-extra-boolean-cast": 1,
        "no-extra-semi": 1,
        "no-extra-parens": 0,
        "no-empty": 1,
        "no-use-before-define": [
            0,
            "nofunc"
        ],
        "complexity": [
            0,
            10
        ],
        "comma-dangle": [
            0,
            "never"
        ],
        "no-global-assign": [
            "error",
            {}
        ],
        "no-var": 0,
        "no-const-assign": 2,
        "no-class-assign": 2,
        "no-debugger": 1,
        "no-console": 0,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-invalid-regexp": 2,
        "no-func-assign": 2,
        "valid-typeof": 1,
        "no-unreachable": 2,
        "no-unexpected-multiline": 2,
        "no-sparse-arrays": 1,
        "no-shadow-restricted-names": 2,
        "no-undef": 1,
        "no-unused-vars": 1,
        "no-cond-assign": 2,
        "no-native-reassign": 2,
        "no-mixed-spaces-and-tabs": 0,
        "no-irregular-whitespace": 0,
        "no-else-return": 0,
        "no-multi-spaces": 0,
        "key-spacing": [
            0,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "block-scoped-var": 1,
        "consistent-return": 1,
        "accessor-pairs": 1,
        "dot-location": [
            1,
            "property"
        ],
        "no-lone-blocks": 1,
        "no-labels": 1,
        "no-extend-native": 1,
        "no-floating-decimal": 1,
        "no-loop-func": 1,
        "no-new-func": 1,
        "no-self-compare": 1,
        "no-sequences": 1,
        "no-throw-literal": 1,
        "no-return-assign": [
            1,
            "always"
        ],
        "no-redeclare": [
            1,
            {
                "builtinGlobals": true
            }
        ],
        "no-unused-expressions": [
            0,
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "no-useless-call": 1,
        "no-useless-concat": 1,
        "no-void": 1,
        "no-with": 1,
        "space-infix-ops": 0,
        "valid-jsdoc": [
            0,
            {
                "requireParamDescription": true,
                "requireReturnDescription": true
            }
        ],
        "no-warning-comments": [
            1,
            {
                "terms": [
                    "todo",
                    "fixme",
                    "any other term"
                ],
                "location": "anywhere"
            }
        ],
        "curly": 0
    }
}