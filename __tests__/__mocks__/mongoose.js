const mongoose = {
    model: jest.fn(()=>({find:jest.fn()})),

}
const Schema = jest.fn(()=>({}))