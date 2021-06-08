import 'assets/css/Table.scss'
import { useHistory } from 'react-router-dom'

export default function Table({ headary, contentary, resultPage }) {

    const history = useHistory();

    const onClickTableRow = (e) => {
        history.push(`/item/${e.target.parentElement.id}`)
    }

    const renderingContent = () => {
        const result = [];
        // const reader = new FileReader();
        // let base64 = null;
        let key = 1;
        if (contentary === null || contentary === undefined) return;

        // reader.onloadend = () => {
        //     base64 = reader.result;
        // }

        if (resultPage) {
            for (const comp of contentary) {

                result.push(
                    <tr key={key} id={comp.itemId} onClick={onClickTableRow}>
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
        }

        else {
            for (const comp of contentary) {
                // if (comp.itemImage !== null) {
                //     reader.readAsDataURL(new File([comp.itemImage], 'item-img.png', {
                //         type: 'image/png'
                //     })
                //     );
                //     console.log(reader.result);
                // }

                result.push(
                    <tr key={key} id={comp.itemId} onClick={onClickTableRow}>
                        <td>{comp.itemImage}</td>
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