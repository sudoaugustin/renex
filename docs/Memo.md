# `Memo`

```TSX
import { Memo } from 'renex';

<Memo deps={[]}>{/* ... */}</Memo>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| deps | unknown[] |  | An array of dependencies that should trigger a re-render when changed.
