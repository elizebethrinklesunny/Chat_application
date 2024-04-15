import {all} from "redux-saga/effects"

import Chat from '../Chat/saga'


export default function* rootSaga(){
    yield all([
       
        Chat(),
      
        
        
        
    ])
}