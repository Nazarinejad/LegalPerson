export interface IAlFormValues{
    isArchiveSearch:boolean
    legalName:string
    nationalCode:string
}

export interface IDataResult{
    RegisterNumber?: string
    RegisterDate?: string
    RegisterUnit?: string 
    Name?: string
    LegalPersonType?: string
    
    Residency?: string //اقامت
    Address?: string
    PostCode?:string
    BreakUpDate?: string //انحلال
    EstablishmentDate?: string //تاسیس
    // "BankRuptcyDate": "",
    // "FollowUpNo": "864190467",
    // "LastChangeDate": "1396/09/13", //تغییر اقامتگاه
    // "LicenseDate": "",
    // "LicenseNumber": "",
    NationalCode?: string
    // "ReviewTypeTitle": null
    SettleDate?: string //تسویه
    FollowUpNo?: string //تسویه
    // "TaxRestrictDate": "",
    // "UnitId": "872CB9BF82641DA7DF539BC670CA44FD"
}