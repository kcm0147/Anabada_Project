import 'assets/css/Sidebar.scss'

export default function Sidebar(props) {

    const onClickFoldBtn = () => {
        props.sidebarref.current.style.right = '-200px'
    }

    return (
        <div className='sidebar-main-box' ref={props.sidebarref}>
            <button onClick={onClickFoldBtn}>사이드바 접기</button>
        </div>
    )
}