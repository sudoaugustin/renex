# `Toggle`

```TSX
import { Toggle } from 'renex';

// Toggle boolean by default
<Toggle>
  {(isDark, toggle) => { /* ... */ }}
</Toggle>


// Toggle between given options
<Toggle options={['light','dark']}>
  {(theme, toggle) => { /* ... */ }}
</Toggle>


// If you need more control on the data type
<Toggle options={['light','dark'] as const}>
  {/* ... */}
</Toggle>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| initial | string | number | boolean  | Initial value to pass into `useState` hook.
| onValueChange | (value: string | number | boolean):void  | Handler to call when the value of `Toggle` changes.