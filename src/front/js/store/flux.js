const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pc9: [],
      waist: [],
      length: [],
    },
    actions: {
      addPc9: (data) => {
        const store = getStore();
        setStore({ pc9: [...store.pc9, data] });
      },
      addWaist: (data) => {
        const store = getStore();
        setStore({ waist: [...store.pc9, data] });
      },
      addLength: (data) => {
        const store = getStore();
        setStore({ length: [...store.pc9, data] });
      },
    },
  };
};

export default getState;
