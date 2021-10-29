# Nanostores binding to Next.js

This is a prototype.

## Idea

1. Next.js integration

https://github.com/Eddort/nanostores-ssr/blob/main/pages/_app.js#L13
```js
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const taskId = {};
  router.open("/", taskId);
  const instances = await getInstances(taskId);
  return {
    ...appProps,
    ...{
      props: { instances },
    },
  };
};
```

- `router.open("/", taskId);` — open some route
- `const instances = await getInstances(taskId);` — collect data from stores

2. SSR router and `onRoute` handler

https://github.com/Eddort/nanostores-ssr/blob/main/nanostores/ssrRouter.js
```js
onRoute(mySecondStore, "/", async () => {
  return { secondStore: 2 };
});
```

3. after `router.open` is called will be called `onRoute`

4. we transmit the data to the Provider

```js
function MyApp({ Component, pageProps, props }) {
  return (
    <Context.Provider value={props.instances}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
```

5. and retrieve this data using the `useStore` helper.

https://github.com/Eddort/nanostores-ssr/blob/main/nanostores/ReactSsr.js
```js
if (instances && store.instanceId) {
  return instances[store.instanceId];
}
```
