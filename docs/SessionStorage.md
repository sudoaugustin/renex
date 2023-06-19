# `SessionStorage`

```TSX
import { SessionStorage } from 'renex';

<SessionStorage name="token" initial={false}>
  {(token, setToken,removeToken) => { /* ... */ }}
</SessionStorage>

// If you want to avoid unnecessary re-renders
<SessionStorage.Set name="token">
  {(setToken) => { /* ... */ }}
</SessionStorage.Set>

<SessionStorage.Remove name="token">
  {(removeToken) => { /* ... */ }}
</SessionStorage.Remove>

<SessionStorage.Action name="token">
  {(setToken,removeToken) => { /* ... */ }}
</SessionStorage.Action>

// If you need more control on the data type
<SessionStorage<'light' | 'dark' | 'dim'> >
  {/* ... */}
</SessionStorage>
```

## Props

| Name | Type | Default | Description 
| :--- | :--- | :------ | :----------
| as | string | `Fragment` | HTML tag to render.
| name | string |  | Session storage key.
| initial | any |  | Intital value that will be used in server render and if the value is not found in session storage
| serializer | `(value: T):string` | `JSON.stringify` | Function to serialize value into a string to be saved in session storage
| deserializer | `(value: string):T` | `JSON.parse` | Function to deserialize string value from session storage to value

## Global synchronization

```TSX
<SessionStorage name="token">{(token)=><p>{token}</p>}</SessionStorage>

<SessionStorage.Action name="token">{(setToken)=><button onClick={()=>setToken(...)}/>}</SessionStorage.Action>
```

In the above code, `SessionStorage` and `SessionStorage.Action` are separate components(they can also be in separate files) which subscribe to `token` in session storage. When we change the `token` value from `SessionStorage.Action`, it rerenders `SessionStorage` components with `name='token'`.
