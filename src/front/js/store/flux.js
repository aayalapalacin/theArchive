const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pc9: [],
      waist: [],
      length: [],
    },
    actions: {
      addPc9: (data) => {
        console.log("pc9 data", data);
        const store = getStore();
        setStore({ pc9: [...store.pc9, data] });
      },
    },
  };
};

export default getState;
