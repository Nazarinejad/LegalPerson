import { useState } from "react";
import { Form } from 'antd';
import api from '../../../../controler/services/home/apiRequest'
import { Notification } from 'sanhab-components-library'
import { IAlFormValues, IDataResult } from '../../../../controler/model/home/model'

function HomeMainHook(props: any) {

    const [form] = Form.useForm();
    const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState(false);
    const [isArchive, setIsArchive] = useState(false);
    const [currentSearchType, setCurrentSearchType] = useState("");
    const [showTable, setShowTable] = useState<boolean>(false);
    const [result, setResult] = useState<IDataResult>({});

    const onFinish = (values: IAlFormValues) => {
        setShowTable(false);
        setIsLoadingSubmitBtn(true);
        
        let data: IAlFormValues = {
            legalName: values.legalName,
            nationalCode: values.nationalCode,
            isArchiveSearch: values.isArchiveSearch
        }

        let apiMethod = setApiMethod();

        if (apiMethod !== undefined) {
            apiMethod(data).then((response) => { if(response?.data?.IsSucceed) {setResult(response?.data?.Result); setShowTable(true)}
            else Notification.danger({message:response?.data?.Error.Message})})
                .finally(() => { setIsLoadingSubmitBtn(false) })
        }
    }

    const setApiMethod = () => {
        
        if (currentSearchType === "legalName") {
            if (isArchive) return api.GetByArchiveName
            else return api.GetByLegalName
        }
        else if (currentSearchType === "nationalCode") return api.GetByNationalCode;
    }

    const onChangeRadio = (e: any) => {
        setShowTable(false);
        setCurrentSearchType(e.target.value)
        if(currentSearchType === "legalName"){
            form.setFieldsValue({
                nationalCode: ""
            });
        }
        else if(currentSearchType === "nationalCode"){
            form.setFieldsValue({
                legalName: "",
                isArchiveSearch: false

            });
        }
    }
    
    const onChangeIsArchive = (e: any) => {
        setIsArchive(e.target.checked)
    }

    const printPage = () => {
        window.print()
    }

    return {
        form,
        isLoadingSubmitBtn,
        currentSearchType,
        result,
        showTable,
        onFinish,
        onChangeRadio,
        onChangeIsArchive,
        printPage
    }
}

export default HomeMainHook;