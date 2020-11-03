import { MysqlAuth } from "../../repositories/implementations/MySqlAuth"
import { ForgotPasswordCase  } from "./ForgotPasswordCase";
import { ForgotPasswordController } from "./ForgotPasswordController";

const mysqlAuth = new MysqlAuth();
const forgotPasswordCase = new ForgotPasswordCase(mysqlAuth);

const forgotPasswordController = new ForgotPasswordController(forgotPasswordCase);

export { forgotPasswordController };