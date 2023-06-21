<!-- 1. createAsyncThunk -->

   {
   export const fetchProduct = createAsyncThunk("updateProduct", async () => {
   const res = await axios.get("https://fakestoreapi.com/products");
   return res.data;
   });
   }

<!-- 2. Slice -->

const slice = createSlice({
name: "Product",
initialState: [],
reducers: {
updateProduct(state, action) {
state.push(action.payload);
},
},
}

<!-- 3. Extrareducer -->

 <!-- //extraReducer for asynchronous request -->

  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      <!-- //here fulfilled means that our request is fullfilled -->
      console.log("product", action.payload[0]);
      state = [...action.payload];
    },
  },
});

export default slice.reducer;
export const { updateProduct } = slice.actions; //get the action


<!-- 4. Reducer Toolkit  -->

 const dispatch = useDispatch();

  const getProduct = () => {
 
    dispatch(fetchProduct());
  };
  return (
    <div>
      <button onClick={getProduct}>Click</button>
    </div>
  );