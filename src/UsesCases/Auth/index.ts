import { MysqlAuth } from "../../repositories/implementations/MySqlAuth"
import { AuthCase } from "./AuthCase";
import { AuthController } from "./AuthController";

const mysqlAuth = new MysqlAuth();
const authCase = new AuthCase(mysqlAuth);

const authController = new AuthController(authCase);

export { authController };