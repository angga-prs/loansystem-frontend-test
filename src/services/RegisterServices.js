import http from "../http-common";
class RegisterServices {
    create(data) {
        return http.post("/auth/signup", data);
    }
}
export default new RegisterServices();