
import { IDataResult } from "../../../../controler/model/home/model";
import { Button, Icon, Row } from 'sanhab-components-library'

interface IProps {
    result: IDataResult
    printPage: () => void
}
const ResultTable = (props: IProps) => {

    return (
        <>
            <Row className="btn_wrapper">
                <Button onClick={props.printPage} className="p-x-8 print_btn m-y-16" style={{ float: "left" }}><Icon iconType="print" ></Icon></Button>
            </Row>

            <div className="printable_column_wrapper">

                <div className="single_block">
                    <div className="label">شماره ثبت</div>
                    <div className="content">{props.result.RegisterNumber}</div>
                </div>

                <div className="single_block">
                    <div className="label">تاریخ ثبت</div>
                    <div className="content">{props.result.RegisterDate}</div>
                </div>

                {/* <div className="single_block">
                    <div className="label">واحد ثبت اصلی</div>
                    <div className="content">{props.result.ParentRegisterUnit}</div>
                </div> */}

                <div className="single_block">
                    <div className="label">واحد ثبت فرعی</div>
                    <div className="content">{props.result.RegisterUnit}</div>
                </div>

                <div className="single_block">
                    <div className="label">نام شرکت</div>
                    <div className="content">{props.result.Name}</div>
                </div>

                <div className="single_block">
                    <div className="label">نوع شرکت</div>
                    <div className="content">{props.result.LegalPersonType}</div>
                </div>

                <div className="single_block">
                    <div className="label">محل اقامت</div>
                    <div className="content">{props.result.Residency}</div>
                </div>

                <div className="single_block">
                    <div className="label">کد پستی</div>
                    <div className="content">{props.result.PostCode}</div>
                </div>

                <div className="single_block">
                    <div className="label">تاریخ انحلال شرکت</div>
                    <div className="content">{props.result.BreakUpDate}</div>
                </div>

                {/* <div className="single_block">
                    <div className="label">تاریخ درخواست انحلال</div>
                    <div className="content">{props.result.BreakUpPaperDate}</div>
                </div> 

                <div className="single_block">
                    <div className="label">شماره درخواست انحلال</div>
                    <div className="content">{props.result.BreakUpPaperNumber}</div>
                </div>

                <div className="single_block">
                    <div className="label">تاریخ درخواست تغییر اقامتگاه</div>
                    <div className="content">{props.result.ResidencyPaperDate}</div>
                </div>

                <div className="single_block">
                    <div className="label">تاریخ درخواست ختم تسویه شرکت</div>
                    <div className="content">{props.result.SettlePaperDate}</div>
                </div>*/}

                <div className="single_block">
                    <div className="label">تاریخ ختم تسویه شرکت</div>
                    <div className="content">{props.result.SettleDate}</div>
                </div>

                <div className="single_block">
                    <div className="label">شناسه ملی</div>
                    <div className="content">{props.result.NationalCode}</div>
                </div>

                {/* <div className="single_block">
                    <div className="label">شماره درخواست ختم تسویه شرکت</div>
                    <div className="content">{props.result.SettlePaperNumber}</div>
                </div> 

                <div className="single_block">
                    <div className="label">تاریخ درخواست ادغام شرکت</div>
                    <div className="content">{props.result.UmlautPaperDate}</div>
                </div>

                <div className="single_block">
                    <div className="label">تاریخ ادغام شرکت</div>
                    <div className="content">{props.result.UmlautDate}</div>
                </div>

                <div className="single_block">
                    <div className="label">شماره نامه ادغام شرکت</div>
                    <div className="content">{props.result.UmlautPaperNumber}</div>
                </div>*/}

                <div className="single_block">
                    <div className="label">شماره پیگیری</div>
                    <div className="content">{props.result.FollowUpNo}</div>
                </div>
                
                <div className="single_block">
                    <div className="label">آدرس</div>
                    <div className="content">{props.result.Address}</div>
                </div>

            </div>
        </>
    );
}

export default ResultTable;