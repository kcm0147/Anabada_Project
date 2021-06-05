import 'assets/css/Table.scss'

export default function Table({ headary, contentary }) {

    const renderingContent = () => {
        const result = [];
        for (const comp of contentary) {
            result.push(<tr>
                <td>{comp.itemImage}</td>
                <td>{comp.itemName}</td>
                <td>{comp.category}</td>
                <td>{comp.lowerBoundPrice}</td>
                <td>{comp.auctionStartDate}</td>
                <td>{comp.auctionEndDate}</td>
            </tr>)
        }
        return result
    }

    return (
        <table className='table-filter'>
            <thead>
                <tr>
                    {headary.map((value) => <th>{value}</th>)}
                </tr>
            </thead>
            <tbody>
                {renderingContent()}
            </tbody>
        </table>
    )
}