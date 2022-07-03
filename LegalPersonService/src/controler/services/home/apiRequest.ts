import { HttpBaseService } from "sanhab-components-library";
import { IGetRequestBody } from "./models"
import { IAlFormValues}  from "../../model/home/model"
import HttpBaseConstant from "../HttpBaseConstant"

class HomeApiRequest extends HttpBaseService {

    GetAllErrorTypes = (): Promise<any> => {
        return this.send.get("/Enum/GetAllErrorTypes")
    }
    
    GetByLegalName = (requestBody: IAlFormValues): Promise<any> => {
        return this.send.get(`/GetByLegalName?legalName=${requestBody.legalName}`)
    }
    
    GetByArchiveName = (requestBody: IAlFormValues): Promise<any> => {
        return this.send.get(`/GetByArchiveName?legalArchiveName=${requestBody.legalName}`)
    }
    
    GetByNationalCode = (requestBody: IAlFormValues): Promise<any> => {
        return this.send.get(`/GetByNationalCode/${requestBody.nationalCode}`)
    }

   

}

export default new HomeApiRequest({ url: HttpBaseConstant.url })