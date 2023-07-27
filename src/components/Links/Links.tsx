import {Link, useLocation} from "react-router-dom";
import './index.css'

const Links: React.FC<{label: string, value: string}> = ({value,label}) => {
    const location= useLocation()

    return (
        <div>
            <Link to={label} className={location.pathname.includes(`${label}`) ? 'link active-link' : 'link'}>
                {value}
            </Link>
        </div>
    );
};

export default Links;