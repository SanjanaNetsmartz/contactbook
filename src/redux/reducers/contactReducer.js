const initialState = [
    {
        id:0,
        name:"Sanjana",
        email:"Sanjana12@gmail.com",
        number:1234567899
    },
    {
        id:0,
        name:"Rohit",
        email:"rohit12@gmail.com",
        number:1254667899
    }
]
const contactReducer=(state=initialState, action) =>{
    switch(action.type){
        default: 
        return state
    }
}

export default contactReducer