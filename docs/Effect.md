# `Effect`

```TSX
import { Effect } from 'renex';

<Effect
  initial={false}
  callback={(state, setState) => {
    /* ... */
  }}
>
  {(state, setState) => { /* ... */ }}
</Effect>


// If you need more control on the data type
<Effect<'light' | 'dark' | 'dim'>>
  ...
</Effect>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| initial | any |  | Initial value to pass into `useState` hook.
| callback | (state, setState) => void \| Function | | A function to call inside `useEffect` everytime state changes. Can also return cleanup function.