<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](api/index.md) &gt; [@eva/eva.js](api/eva.js.md) &gt; [ObserverInfo](api/eva.js.observerinfo.md)

## ObserverInfo type

Normailized observer info

<b>Signature:</b>

```typescript
export declare type ObserverInfo = Record<ComponentName, ObserverValue[]>;
```

## Example


```typescript
{
  Transform: [{ prop: ['size'], deep: false }],
  OtherComponent: [{ prop: ['style', 'transform'], deep: true }]
}

```

