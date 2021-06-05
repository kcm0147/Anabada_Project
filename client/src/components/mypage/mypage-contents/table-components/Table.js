import 'assets/css/Table.scss'

export default function Table({ headary, contentary }) {
    return (
        <table className='table-filter'>
            <thead>
                <tr>
                    {headary.map((value) => <th>{value}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>아이폰 max</td>
                    <td>2021.06.05</td>
                    <td>1,000,000</td>
                    <td>입찰 완료</td>
                </tr>
            </tbody>
        </table>
    )
}