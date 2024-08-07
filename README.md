# eslint-plugin-gmm

自定义hst eslint 规则

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-gmm`:

```sh
npm install eslint-plugin-gmm --save-dev
```

## Usage

Add `gmm` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "gmm"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "gmm/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


