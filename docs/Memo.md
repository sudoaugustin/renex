# `Memo`

```TSX
import { Memo } from 'renex';

<Memo deps={[]}>{/* ... */}</Memo>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `div` | HTML tag to return. Use `''` to return `Fragment`.
| deps | unknown[] |  | An array of dependencies that should trigger a re-render when changed.


If `as` is not `''`, u can also pass HTML attributes like `className, onClick, ...` to the component.