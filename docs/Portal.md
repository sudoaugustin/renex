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
| fallback | boolean | `false` | If true the children element will be returned instead of `null`.
