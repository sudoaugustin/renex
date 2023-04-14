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
| as | string | `Fragment` | HTML tag to render.
| initial | any |  | Initial value to pass into `useState` hook.
