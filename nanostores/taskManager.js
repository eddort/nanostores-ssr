export const createTaskManager = () => {
  let tasks = 0;
  let resolves = [];

  return {
    startTask() {
      tasks += 1;
      return () => {
        tasks -= 1;
        if (tasks === 0) {
          let prevResolves = resolves;
          resolves = [];
          for (let i of prevResolves) i();
        }
      };
    },

    task(promise) {
      let endTask = this.startTask();
      return promise.finally(endTask);
    },

    allTasks() {
      if (tasks === 0) {
        return Promise.resolve();
      } else {
        return new Promise((resolve) => {
          resolves.push(resolve);
        });
      }
    },

    cleanTasks() {
      tasks = 0;
    },
  };
};
