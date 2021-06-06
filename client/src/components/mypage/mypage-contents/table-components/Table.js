import 'assets/css/Table.scss'

export default function Table({ headary, contentary, resultPage }) {

    const renderingContent = () => {
        const result = [];
        let key = 1;
        if (contentary === null || contentary === undefined) return;

        if (resultPage)
            for (const comp of contentary) {
                result.push(<tr key={key}>
                    <td>{comp.itemImage}</td>
                    <td>{comp.itemName}</td>
                    <td>{comp.category}</td>
                    <td>{comp.lastAuctionDate}</td>
                    <td>{comp.lastAuctionPrice}</td>
                    <td>{comp.lastUserPrice}</td>
                    <td>{comp.result ?
                        <span className='success-span'>낙찰</span> :
                        <span className='fail-span'>패찰</span>}</td>
                </tr>)
                key++;
            }

        else
            for (const comp of contentary) {
                result.push(<tr key={key}>
                    <td>{comp.itemImage}</td>
                    <td>{comp.itemName}</td>
                    <td>{comp.category}</td>
                    <td>{comp.lowerBoundPrice}</td>
                    <td>{comp.auctionStartDate}</td>
                    <td>{comp.auctionEndDate}</td>
                </tr>)
                key++;
            }
        return result
    }

    return (
        <table className='table-filter'>
            <thead>
                <tr>
                    {headary.map((value) => <th key={value}>{value}</th>)}
                </tr>
            </thead>
            <tbody>
                {renderingContent()}
            </tbody>
        </table>
    )
}