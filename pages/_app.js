import '../styles/bootstrap.min.css'
import '../styles/poup.css'
import "../styles/animate.min.css";
import "../styles/icofont.min.css";

import "react-modal-video/css/modal-video.min.css";
import 'react-tabs/style/react-tabs.css';

import '../styles/style.css'
import '../styles/responsive.css'

// For RTL Style Comment Out The Below rtl.css
// import "../styles/rtl.css";

import Layout from '../components/_App/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;