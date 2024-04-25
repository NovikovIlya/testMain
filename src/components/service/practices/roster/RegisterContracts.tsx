import {
    Button,
    Checkbox,
    CheckboxProps,
    Col, DatePicker,
    GetProp,
    List,
    Radio,
    Row,
    Select,
    Space, Table,
    TableProps,
    Typography
} from 'antd'
import React, {useEffect, useState} from 'react'
import './RegisterContracts.scss'
import {
    TitleHeadCell
} from "../../businessTrip/NewBusinessTrip/archive/stepTwo/tableStepTwo/titleHeadCell/TitleHeadCell";
import {EditSvg} from "../../../../assets/svg/EditSvg";
import {PointsSvg} from "../../../../assets/svg/PointsSvg";

type PropsType = {
    setIsCreate: (value: boolean) => void
    setIsPreview: (value: boolean) => void
    setIsFinalReview: (value: boolean) => void
    setEdit: (value: string) => void
    setPreview: (value: string) => void
}

interface ColumnsTableCompressedView {
    key: string
    contractFacility: string
    dateFiling: string
    contractType: string
    dateConclusionContract: string
}

const columnsCompressedView: TableProps<ColumnsTableCompressedView>['columns'] = [
    {
        title: <TitleHeadCell title={'Наименование организации'}/>,
        dataIndex: 'contractFacility',
        align: "left",
        width: 150,
        render: (text, record) =>
            <div className={'flex items-center'}>
                    <span className={'underline flex w-[200px]'}>
                        {text}
                    </span>
                <Button
                    type="text"
                    icon={<EditSvg/>}
                    onClick={() => console.log(record.key)}
                />
            </div>

    },
    {
        title: <TitleHeadCell title={'Дата заполнения'}/>,
        dataIndex: 'dateFiling',
        align: "center",
        width: 150
    },
    {
        title: <TitleHeadCell title={'Тип договора'}/>,
        dataIndex: 'contractType',
        align: "center",
        width: 150

    },
    {
        title: <TitleHeadCell title={'Дата заключения договора'}/>,
        dataIndex: 'dateConclusionContract',
        align: "center",
        width: 150
    },
    {
        title:
            <Button
                type="text"
                className="opacity-50"
                icon={<PointsSvg/>}
            />,
        width: 200,
        align: 'center',
        render: (record) =>
            <Button
                type="text"
                className="opacity-50"
                icon={<PointsSvg/>}
                onClick={() => console.log(record.key)}
            />,
    }
]


const optionsNameSpecialty = [
    {
        value: '',
        label: 'Все'
    },
    {
        value: '31.08.01 Акушерство и гинекология',
        label: '31.08.01 Акушерство и гинекология'
    }
]
const optionsTypeContract = [
    {value: '', label: 'Все'},
    {value: 'Бессрочный', label: 'Бессрочный'},
    {value: 'С пролонгацией', label: 'С пролонгацией'}
]
const optionsNameOrg = [
    {value: '', label: 'Все'},
    {
        value: 'Лечебно-профилактическое учреждение по договору',
        label: 'Лечебно-профилактическое учреждение по договору'
    }
]

const mockData: ColumnsTableCompressedView[] = [
    {
        key: '1',
        contractFacility: 'Лечебно-профилактическое учреждение по договору',
        dateFiling: '00.00.00, 00:00',
        contractType: 'Бессрочный',
        dateConclusionContract: '12.12.2012'
    },
    {
        key: '2',
        contractFacility: 'Лечебно-профилактическое учреждение по договору',
        dateConclusionContract: '12.12.2012',
        contractType: 'Бессрочный',
        dateFiling: '00.00.00, 00:00'
    },
]
export const RegisterContracts = () => {
    const [tableData, setTableData] = useState<ColumnsTableCompressedView[]>(mockData)

    return (
        <section className="container registerContracts">
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Text className=" text-[28px] mb-14">
                        Реестр договоров
                    </Typography.Text>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className={'mt-12'}>
                <Col span={12} className={'flex items-center gap-0'}>
                    <Col span={8} className={'flex items-center gap-2'}>
                        <span className={'whitespace-nowrap'}>Количество мест</span>
                        <Select
                            popupMatchSelectWidth={false}
                            defaultValue={""}
                            options={[{value: 100, label: 100}]}
                        />
                    </Col>
                    <Col span={16} className={'flex gap-2 items-center'} style={{paddingRight: 0, paddingLeft: 16}}>
                        <span className={'whitespace-nowrap'}>Дата заключения договора</span>
                        <DatePicker className={'w-full'}/>
                    </Col>
                </Col>
                <Col span={3} offset={9}>
                    <Button type={"primary"}>Создать договор</Button>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className={'mt-4'}>
                <Col span={12} className={'flex items-center gap-2'}>
                    <Col span={8}>
                        <span className={'whitespace-nowrap'}>Наименование организации</span>
                    </Col>
                    <Col span={16}>
                        <Select
                            popupMatchSelectWidth={false}
                            defaultValue=""
                            className="w-full"
                            options={optionsNameOrg}
                        />
                    </Col>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className={'mt-4'}>
                <Col span={12} className={'flex items-center gap-2'}>
                    <Col span={8}>
                        <span className={'whitespace-nowrap'}>Наименование специальности</span>
                    </Col>
                    <Col span={16}>
                        <Select
                            popupMatchSelectWidth={false}
                            defaultValue=""
                            className="w-full"
                            options={optionsNameSpecialty}
                        />
                    </Col>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className={'mt-4'}>
                <Col span={12} className={'flex items-center gap-2'}>
                    <Col span={8}>
                        <span className={'whitespace-nowrap'}>Тип договора</span>
                    </Col>
                    <Col span={16}>
                        <Select
                            popupMatchSelectWidth={false}
                            defaultValue=""
                            className="w-full"
                            options={optionsTypeContract}
                        />
                    </Col>
                </Col>
            </Row>
            <Row className="mt-4 flex items-center">
                <Col span={12} flex="50%">
                    <Radio.Group defaultValue="compressedView" buttonStyle="solid">
                        <Radio.Button
                            value="compressedView"
                            className="!rounded-l-full">
                            Посмотреть в сжатом виде
                        </Radio.Button>
                        <Radio.Button
                            value="tableView"
                            className="!rounded-r-full">
                            Посмотреть данные в таблице
                        </Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={8} offset={4}>
                    <div className={'flex gap-2 items-center'}>
                        <span className={'mr-2'}>Сортировка</span>
                        <Select
                            popupMatchSelectWidth={false}
                            defaultValue="1"
                            className="w-full"
                            options={[{value: '1', label: 'Все'}]}/>
                    </div>

                </Col>
            </Row>

            <Table
                columns={columnsCompressedView}
                pagination={false}
                size={"middle"}
                dataSource={tableData}
                rowSelection={{type: "checkbox"}}
            />

        </section>
    )
}
