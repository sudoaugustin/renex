# `Storage`

```TSX
import { Storage } from 'renex';

<Storage name="token" initial={false}>
  {(token, setToken,removeToken) => { /* ... */ }}
</Storage>

// If you want to avoid unnecessary re-renders
<Storage.Action name="token">
  {(setToken,removeToken) => { /* ... */ }}
</Storage.Action>

// If you need more control on the data type
<Storage<'light' | 'dark' | 'dim'> >
  {/* ... */}
</Storage>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| name | string |  | Local storage key.
| initial | any |  | Intital value that will be used in server render and if the value is not found in local storage
| serializer | (value: T):string | `JSON.stringify` | Function to serialize value into a string to be saved in local storage
| deserializer | (value: string):T | `JSON.parse` | Function to deserialize string value from local storage to value

## Global synchronization

```TSX
<Storage name="token">{(token)=><p>{token}</p>}</Storage>

<Storage.Action name="token">{(setToken)=><button onClick={()=>setToken(...)}/>}</Storage.Action>
```

In the above code, `Storage` and `Storage.Action` are separate components(they can also be in separate files) which subscribe to `token` in local storage. When we change the `token` value from `Storage.Action`, it rerenders `Storage` components with `name='token'`.


## Tabs synchronization

`Storage` subscribes to [storage event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event). So the local storage changes in one tab updates the state in all other tab.