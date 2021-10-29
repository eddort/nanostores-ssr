let state;
const parseString = () => {
  if (state) return state;
  const appCustomPropsString =
    document.getElementById("__NEXT_DATA__")?.innerHTML;

  state = JSON.parse(appCustomPropsString).props.props.instances;
  return state;
};
export const nextJsHydrate = (instanceId) => parseString() && parseString()[instanceId];
