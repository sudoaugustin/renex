# `Effect`

```TSX
import { Effect } from 'renex';

const Theme = () => (
  <Effect
    initial={false}
    callback={(isDark, setDark) => {
      document.body.className = isDark ? 'dark' : 'light'
    }}
  >
    {(isDark, setDark) => { /* RENDER */ }}
  </Effect>
);


// If you need more control on the data type

const Theme = () => (
  <Effect<'light' | 'dark' | 'dim'>
    initial={false}
    callback={(theme) => {
      // NOTE: The setTimeout is use only to show the effect cleanup.
      const timeout = setTimeout(() => (document.body.className = theme), 1000);
      return () => clearTimeout(timeout);
    }}
  >
    {(theme, setTheme) => { /* RENDER */ }}
  </Effect>
);
```
## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `div` | HTML tag to return. Use `''` to return `Fragment`.
| initial | any |  | Initial value to pass into `useState` hook.
| callback | (state, setState) => void \| Function | | A function to call inside `useEffect` everytime state changes. Can also return cleanup function.

If `as` is not `''`, u can also pass HTML attributes like `className, onClick, ...` to the component.