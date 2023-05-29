const initState = {
  users: [
    { id: 1, name: "Miki Tran" },
    { id: 2, name: "Code Warrious" },
    { id: 3, name: "Poo - Phoong" },
  ],
  posts: [],
};

// anh cong nhan no1
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      //return voi dang update lai state - trong th state co nhieu data
      return { ...state, users };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10001);
      let user = { id: id, name: `random - ${id}` };

      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};

export default rootReducer;
