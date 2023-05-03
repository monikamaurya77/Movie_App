import './css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="left-container">
            <ul className="left-container-items">
                <li>Genre</li>
                <li>All Movies</li>
                <li>Action</li>
                <li>Comedy</li>
                <li>Drama</li>
                <li>More...</li>
            </ul>
        </div>
    )
}

export default Sidebar;