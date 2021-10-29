import App from "next/app";
import { targetTask, Context, getInstances, router } from "../nanostores";
import "../styles/globals.css";

function MyApp({ Component, pageProps, props }) {
  return (
    <Context.Provider value={props.instances}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

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

export default MyApp;
