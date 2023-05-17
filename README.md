# Sveltekit Flash ⚡️

![](https://img.shields.io/github/license/maximux13/sveltekit-flash)
![](https://img.shields.io/npm/dm/@maximux13/sveltekit-flash)
![](https://img.shields.io/npm/v/@maximux13/sveltekit-flash)

## Introduction

[Sveltekit Flash](https://github.com/maximux13/sveltekit-flash) is a little helper
to display flash messages in your [Sveltekit](https://kit.svelte.dev/) application.

## Demo

You can find a demo [here](https://sveltekit-flash.vercel.app/demo).

## Installation

To install Sveltekit Flash, simply run:

```bash
pnpm install @maximux13/sveltekit-flash
```

## Configuration

1. Add the following to your `src/hooks.server.(js|ts)`:

```javascript
import createFlashHandler from '@maximux13/sveltekit-flash';

/** @type {import('./$types.js').Handle} */
export const handle = createFlashHandler();
```

or if you already have a `handle` function:

```javascript
import { sequence } from '@sveltejs/kit';
import createFlashHandler from '@maximux13/sveltekit-flash';

/** @type {import('./$types.js').Handle} */
const handler = () => {
  // your existing handler
}

export const handle = sequence(
  createFlashHandler()
  handler,
);
```

### Options

You can pass an options object to the `createFlashHandler` function:

| Option | Type     | Default                                        | Description                                                                                                                      |
| ------ | -------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| name   | string   | `__flash`                                      | The name of the session cookie.                                                                                                  |
| levels | string[] | `['success','info','warning','error','debug']` | The levels of messages.<br/>**Note**: each value would be a added as a property of flash:<br/>eg: `flash.success(message, tags)` |

## Usage

1. Use it in your endpoints:

```javascript
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types.js').Actions} */
export const actions = {
  default: async (event) => {
    // your code here

    // add a success message
    event.locals.flash.success('Form submitted successfully');

    // you can also add an info, warning, error or debug message
    event.locals.flash.info('This is an info message');

    // or add a custom level message
    event.locals.flash('custom', 'Something went wrong');

    throw redirect(302, '/message');
  }
};
```

2. Get the messages on your load function or in your actions

```javascript
/** @type {import('./$types.js').PageServerLoad} */
export async function load(event) {
  const messages = event.locals.messages;

  return { messages };
}
```

3. Display the messages in your template

```svelte
<script>
  /** @type {import('./$types.js').PageData} */
  export let data;

  const { messages } = data;
</script>

<ul>
  {#each messages as message}
    <li>{message.type}: {message.message}</li>
  {/each}
</ul>
```

## License

This project is licensed under the MIT License.
