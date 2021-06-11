import 'assets/css/Table.scss'
import { useHistory } from 'react-router-dom'

export default function Table({ headary, contentary, resultPage }) {

    const history = useHistory();
    const srcPrefix = 'http://18.222.240.132:8089/images/'

    const onClickTableRow = (e) => {
        history.push(`/item/${e.target.parentElement.id}`)
    }

    const renderingContent = () => {
        const result = [];

        let key = 1;
        if (contentary === null || contentary === undefined) return;

        if (resultPage) {
            for (const comp of contentary) {

                result.push(
                    <tr key={key} id={comp.itemId} onClick={onClickTableRow}>
                        <td>
                            <img src={srcPrefix + comp.itemImage} alt='itemImage' />
                        </td>
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
        }

        else {
            for (const comp of contentary) {

                result.push(
                    <tr key={key} id={comp.itemId} onClick={onClickTableRow}>
                        <td>
                            <img src={srcPrefix + comp.itemImage} alt='itemImage' />
                        </td>
                        <td>{comp.itemName}</td>
                        <td>{comp.category}</td>
                        <td>{comp.lowerBoundPrice}</td>
                        <td>{comp.auctionStartDate}</td>
                        <td>{comp.auctionEndDate}</td>
                    </tr >)
                key++;
            }
        }
        return result
    }

    return (
        <>
            <div class='item-count-div'>Items : {contentary.length}</div>
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
        </>
    )
}