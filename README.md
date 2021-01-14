# Cullen Week 5 Live Session

Welcome to Week 5, where we explore Objects in JavaScript. A new complex data structure, Objects are extremely helpful for storing and accessing data. We'll take a look at what makes up an object and how we access information on an object.

**JavaScript Topics:**

1. Objects - created with either the object literal (`{}`) or the Object constructor (new Object()).
1. Property - every object has a property and these properties are made up of key, value pairs (`key: 'value'`).
    1. Value - The value can be any kind of data `number`, `string`, `boolean`, `array`, `object`, or even a `function`.
    1. Key - The key portion of the property has to be unique (there cannot be two properties with the same key). Unless using the key as a string you cannot have dashes or spaces as part of the key. The recommendation is to use camelcase or underscores.
1. Accessing a property on an object - There are two ways in which to we can access a property on an object either with the dot operator (`.`) or with bracket notation (`[]`). Given the object `const person = { name: 'Thomas' };` you would access the `name` property with either `person.name` or `person['name']`. In order to use the bracket notation you must pass the key as a string to the brackets.
