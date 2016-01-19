Module Starter Kit
==================

I created this repo to make a quick start while developing new modules. It includes babel es6, gulp, mocha, chai and publishing tasks.


## Usage
If you want to use it you can follow this steps:

**Clone the repo:**

```
git clone git@github.com:alidavut/module-starter-kit.git your-module
```
**Remove .git:**

```
cd your-module
rm -rf .git
```

After this you need to install gulp and mocha globally.

```
npm install gulp mocha -g
```

## Publishing

You can publish your module with the standard npm command.

```
npm publish
```

Some gulp tasks will be executed before and after this command to compile the code and clean the temporary directory.

## Tests

Run test with:

```
npm test
```

You can also run individual tests like:

```
mocha test/src/hello.js
```

I also recommend you to run tests with nodemon:

```
nodemon -x mocha test/src/hello.js
```

I'm waiting for you ideas to make it better. Thanks.
