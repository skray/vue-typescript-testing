# typescript-testing

> A project to fiddle with testing Vue + TypeScript

This project shows two example tests to examine TypeScript usage in unit tests.

1. [HelloWorld.spec.ts](https://github.com/skray/typescript-testing/blob/master/test/unit/specs/HelloWorld.spec.ts) is an out of the box test that shows you can test components without a declared interface, but I have not found a way to get TypeScript to understand how to correctly identify which fields should be available on the `vm` instance. In this test, there are no errors thrown when trying to reference fields that do not exist on the `HelloWorld` component.
1. [HelloWorldWithInterface.spec.ts](https://github.com/skray/typescript-testing/blob/master/test/unit/specs/HelloWorldWithInterface.spec.ts) is an example of how to use an interface in your component to explicitly declare the fields available on the `vm` instance. TypeScript correctly errors when the test tries to reference a field that does not exist on the HelloWorldWithInterface component, at the expense of having to maintain an interface specifically for this purpose.

Ideally, I would like to be able to have a pattern where #1 above works to infer the appropriate type of `vm` so that I do not need to have a superfluous interface just to inform tests of the correct fields.

## Build Setup

``` bash
# install dependencies
npm install

# run unit tests
npm run unit
```
