export const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newPeople,
      isModalOpned: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpned: true,
      modalContent: "Please Enter Value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpned: false,
      modalContent: "",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpned: true,
      modalContent: "Item deleted",
    };
  }
};
