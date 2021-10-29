import { targetTask, Context } from "../nanostores";
import "../styles/globals.css";

function MyApp({ Component, pageProps, props }) {
  // console.log(pageProps, '?>??', props.taskId)
  return (
    <Context.Provider value={props.taskId}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

MyApp.getInitialProps = async function (...ss) {
  const taskId = {};
  await targetTask(taskId);

  return {
    props: { taskId },
  };
};

export default MyApp;
