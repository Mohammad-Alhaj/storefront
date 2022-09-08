const initialState = [];

export default function server(state = initialState, action) {
  const { type, payload } = action;
  // CRUD methods API
  switch (type) {
    case "GET":
      return payload;
    // case "PUT":
    //     console.log('payload PUT',payload);
    //   return [...state]

      
    // category
    case "computers & accessories":
        console.log("state computer",state);
      let result = state.filter((ele) => {
        return ele.category === type;
      });
    //   console.log("result", state);
      return result;

    case "book":
        console.log("state book",state);

      let results = state.filter((ele) => {
        return ele.category === type;
      });
      console.log("results", results);

      return results;

    case "all":
        console.log("state all",state);
        console.log({initialState});
      console.log({ state });
      return state;
    default:
      return state;
  }
}
