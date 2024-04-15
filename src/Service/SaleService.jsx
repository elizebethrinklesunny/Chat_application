import axios from "axios";

class SaleService {
  constructor(callback) {
    this.callback = callback;
  }

  async chat(payload) {
    const response = await axios.get(
      `https://661cb96de7b95ad7fa6ae9da.mockapi.io/message/chat`,
      payload
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  }

  
}
export default new SaleService();
