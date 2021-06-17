//Basic example of a react functional component, a standard function that returns a react element

import {Row} from 'reactstrap';

const Footer = () => {
    return(
        <footer>
            <Row>
                <p>&copy; Eleven Fifty 2021</p>
            </Row>
        </footer>
    )
}

export default Footer;