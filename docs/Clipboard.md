# `Clipboard`

```TSX
import { Clipboard } from 'renex';

<Clipboard>
  {({text, error, isCopied, read, copy}) => { /* ... */ }}
</Clipboard>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| timeout | number | 2000 | The time in milliseconds to reset `isCopied`.
| onError | (err: Error): void |  | Function to call when there is an error while reading or writing to clipboard.
| onSuccess | (text: string): void |  | Function to call when writing to clipboard is succeed.

### Note 

Due to the [security issue](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText#security) with clipboard, `text` will be `undefined` until `read` is called inside a user event such as `onClick`, `onFocus`, `onMouseEnter`.