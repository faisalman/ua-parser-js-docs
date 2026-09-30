<sup>*[`Quickstarts`](./quick-start.md) > `Using Frontend Frameworks (React / Vue / Angular / Svelte)`*</sup>

# Using Frontend Frameworks (React / Vue / Angular / Svelte)

React, Vue, Angular, and Svelte are popular tools for building web interfaces. UAParser.js can detect a visitor's browser, OS, and device after the component loads in the browser.

## Installation

Install UAParser.js using npm:

```sh [npm]
$ npm install ua-parser-js
```

## Usage

Run UAParser.js after the component loads:

::: code-group

```jsx [React]
import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

export default function VisitorInfo() {
    const [visitor, setVisitor] = useState(null);

    useEffect(() => {
        const { browser, device } = UAParser();

        setVisitor({
            browser: browser.name,
            mobile: device.is('mobile'),
        });
    }, []);

    if (!visitor) return null;

    return (
        <p>
            {visitor.mobile ? 'Mobile' : 'Desktop'} visitor using {visitor.browser}
        </p>
    );
}
```

```vue [Vue]
<script setup>
import { onMounted, ref } from 'vue';
import { UAParser } from 'ua-parser-js';

const visitor = ref(null);

onMounted(() => {
    const { browser, device } = UAParser();

    visitor.value = {
        browser: browser.name,
        mobile: device.is('mobile'),
    };
});
</script>

<template>
    <p v-if="visitor">
        {{ visitor.mobile ? 'Mobile' : 'Desktop' }} visitor using
        {{ visitor.browser }}
    </p>
</template>
```

```ts [Angular]
import { Component, afterNextRender, signal } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Component({
    selector: 'visitor-info',
    template: `
        @if (visitor(); as visitor) {
            <p>
                {{ visitor.mobile ? 'Mobile' : 'Desktop' }} visitor using
                {{ visitor.browser }}
            </p>
        }
    `,
})
export class VisitorInfo {
    visitor = signal<{ browser?: string; mobile: boolean } | null>(null);

    constructor() {
        afterNextRender(() => {
            const { browser, device } = UAParser();

            this.visitor.set({
                browser: browser.name,
                mobile: device.is('mobile'),
            });
        });
    }
}
```

```svelte [Svelte]
<script>
import { onMount } from 'svelte';
import { UAParser } from 'ua-parser-js';

let visitor = null;

onMount(() => {
    const { browser, device } = UAParser();

    visitor = {
        browser: browser.name,
        mobile: device.is('mobile'),
    };
});
</script>

{#if visitor}
    <p>
        {visitor.mobile ? 'Mobile' : 'Desktop'} visitor using {visitor.browser}
    </p>
{/if}
```

:::

::: tip
Without an argument, `UAParser()` reads current browser's `navigator.userAgent`. Running it after the component mounts also avoids server-rendering and hydration differences.
:::

## References

- [`useEffect()` Hook🡥](https://react.dev/reference/react/useEffect) *—React*
- [`onMounted()` Hook🡥](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) *—Vue.js*
- [`afterNextRender()`🡥](https://angular.dev/api/core/afterNextRender) *—Angular*
- [`onMount()` Hook🡥](https://svelte.dev/docs/svelte/lifecycle-hooks#onmount) *—Svelte*
