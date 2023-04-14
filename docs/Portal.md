# `Portal`

```TSX
import { Portal } from 'renex';

<Portal root="#modal">
  <div></div>
</Portal>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| root | string | `body` | Selector to pass into the `querySelector`.
