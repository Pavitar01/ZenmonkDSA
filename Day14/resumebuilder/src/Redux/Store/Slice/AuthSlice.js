import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoggedIn:false,
    loggedId:0,
    users:[],
    resumes:[
    ]
}
export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        addUser:(state, action)=>{
            state.loggedId = action.payload
            const newUser = action.payload;
            const existingUser = state.users.find((user)=> user == newUser);
            if(!existingUser){
                state.users.push(newUser)
            }
            state.isLoggedIn= true;
        },
        addResume:(state, action)=>{
           
            const ind = state.resumes.findIndex(x=> x.id===state.loggedId)
            if(ind === -1){
                state.resumes.push({id:state.loggedId, resumes:[action.payload]})
            }else{
                state.resumes[ind].resumes.push(action.payload)
            }
        }

    }
});
export const {addUser, addResume} = authSlice.actions;
export default authSlice.reducer;