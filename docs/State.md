# `State`

```TSX
import { State } from 'renex';

<State initial={false}>
  {(state, setState) => { /* ... */ }}
</State>


// If you need more control on the data type
<State<'light' | 'dark' | 'dim'> >
  {/* ... */}
</State>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `div` | HTML tag to return. Use `''` to return `Fragment`.
| initial | any |  | Initial value to pass into `useState` hook.

If `as` is not `''`, u can also pass HTML attributes like `className, onClick, ...` to the component.