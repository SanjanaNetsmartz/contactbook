const initialState = [
    {
        id:0,
        name:"Sanjana",
        email:"Sanjana12@gmail.com",
        number:1234567899
    },
    {
        id:1,
        name:"Akash",
        email:"Akash12@gmail.com",
        number:1254667899
    }
]
const contactReducer=(state=initialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            //console.log(action.payload)
            state=[...state, action.payload];
            return state;
        default: 
        return state
    }
}

export default contactReducer