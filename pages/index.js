import Head from 'next/head'
import React from "react";
import styles from '../styles/Home.module.scss'
import {connect} from "react-redux";
import {store} from "./_app";

function Home() {
    return (<React.Fragment>
            <Head>
                <title>Web Truyện | Trần Chí Hiếu</title>
                <meta name="parsely-type" content="post"/>
                <meta name="parsely-title" content="Build an SEO-friendly head component for NextJS/React"/>
                <meta name="parsely-link" content="http://localhost:3000"/>
                <meta name="parsely-image-url"
                      content="https://tincongnghe24h.net/wp-content/uploads/2021/02/giai-nen-file-img.jpg"/>
                <meta name="parsely-author" content="Trần Chí Hiếu"/>
            </Head>
        </React.Fragment>
    )
}

Home.getInitialProps = (context, props) => {
    return {props: {}};
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => ({})
export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);
