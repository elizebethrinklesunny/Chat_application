import {takeEvery,put,call,all} from "redux-saga/effects"
import { actionType, chatError, chatSuccess,} from "./action"
import SaleService from "../../Service/SaleService"
// import { startLoader,stopLoader } from "../../Redux/Common/Loader/action";


function* chat({ payload }) {
  try {
    // yield put(startLoader());
    const data = yield call(SaleService.chat, payload);
    yield put(chatSuccess(data));
  } catch (error) {
    yield put(chatError(error));
    console.log(error);
  } finally {
    // yield put(stopLoader());
  }
}







export default function* rootsaga(){
  yield all([takeEvery(actionType.CHAT_HISTORY, chat)]);
  

  }
