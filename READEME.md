## Installation


```
npm i vue-laravel-errors
```

## Usage

# As a plugin (globally)

```js
import vue from "vue"
import vueLaravelErrors from "vue-laravel-errors"

Vue.use(vueLaravelErrors, { type : "object" || "array"})//if options are omitted returns default laravel error object
```

# As a mixin (can be used this way locally in a component)

```js
import {vueLaravelErrors} from 'vue-laravel-errors/src/vueLaravelErrors'

export default {
    mixins: [vueLaravelErrors("object" || "array")],//can be called without passing an argument to get default laravel error object
    name: "YourAwesomeComponent",
    ...
}
```

if object is used the errors variable will be an object with the laravel validation as key and the message as value
```js
{ laravel_validation_key: laravel_validation_message }
```
if array is used the errors variable will be an array with all laravel validation messages
```js
[laravel_validation_message, laravel_validation_message, laravel_validation_message]
```

# Usage in Component

Consider we have a normal post request that sends some form data to be validated through an ajax request
```js
axios.post('endpoint')
     .then(response)
     .catch( error => {
         this.fillErrors(error.response.data.errors)
     })
```
we can then just use the fillErrors function and pass it the errors we got back from our backend.

afterwards in the template we can access the errors variable as follows

## - if errors is an object

```vue
<!-- Quite an important field to validate lol -->
<template>
  <input name="name" type="text"/>
  <span class="error">{{ errors.name }}</span>
</template>
```

## - if errors is an array we can loop
```vue
<!-- At the top or bottom of your form maybe -->
<template>
  <span class="error" v-for="error in errors">{{ errors }}</span>
</template>
```


And that is it, as simple as that yes!


## Contribution

All contributions are welcome just open a pull request and explain what you did :D

## License

MIT License

Copyright (c) 2020 Sohaib Sherif

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

