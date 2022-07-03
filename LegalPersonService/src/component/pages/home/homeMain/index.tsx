import { Result, Typography } from 'antd';
import { Button, Form, Row, Col, Radio, Input, Checkbox, Icon } from "sanhab-components-library";
import HomeMainHook from './hook'
import ResultTable from '../../../pageDetails/home/resultTable/index'
import styles from './styles.module.sass'

const { Title } = Typography;


const Home = (props: any) => {
    const homeMainHook = HomeMainHook(props);

    const options = [
        { label: 'نام شرکت', value: 'legalName' },
        { label: 'شناسه ملی شرکت', value: 'nationalCode' },
    ];

    return (
        <div className={styles.print_wrapper}>
            <div className="form_wrapper">

                <Form className="form hideOnPrint"
                    form={homeMainHook.form}
                    onFinish={homeMainHook.onFinish}
                >
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="جستجو بر اساس"
                                name="searchType"
                                rules={[
                                    {
                                        required: true,
                                        message: "لطفا یک گزینه را انتخاب کنید",
                                    }
                                ]}>
                                <Radio.Group onChange={homeMainHook.onChangeRadio} options={options} optionType="button" />
                            </Form.Item>
                        </Col>

                        {homeMainHook.currentSearchType === "legalName" ?
                            (<>
                                <Col span={24}>
                                    <Form.Item
                                        label="آرشیو"
                                        tooltip="جستجو بر اساس اطلاعات آرشیو شده"
                                        name="isArchiveSearch">
                                        <Checkbox onChange={homeMainHook.onChangeIsArchive}></Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="نام شرکت"
                                        name="legalName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "لطفا نام شرکت را وارد کنید.",
                                            }
                                        ]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </>) : null}

                        {homeMainHook.currentSearchType === "nationalCode" ?
                            (<Col span={24}>
                                <Form.Item
                                    label="شناسه ملی شرکت"
                                    name="nationalCode"
                                    rules={[
                                        {
                                            required: true,
                                            message: "لطفا شناسه ملی شرکت را وارد کنید.",
                                        }
                                    ]}>
                                    <Input  type="number" />
                                </Form.Item>
                            </Col>) : null}


                        <Col style={{ display: 'flex', flexFlow: 'row-reverse' }} sm={24}>
                            <Button disabled={homeMainHook.currentSearchType === ""} type="primary" htmlType="submit" loading={homeMainHook.isLoadingSubmitBtn}>
                                استعلام
                        </Button>
                        </Col>
                    </Row>



                </Form >

            </div >


            {homeMainHook.showTable? <ResultTable result={homeMainHook.result} printPage={homeMainHook.printPage}/> : null}

        </div>
    )
}
export default Home;