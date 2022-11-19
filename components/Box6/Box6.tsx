
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box6.module.css';

export default function Box6() {
    return (
        <>

            <div className={styles.Box6}>
                <Row>

                    <Col xs={3} lg="3" sm="3" md="3" xl="3" xxl="3" className={styles.cols_one}>

                        <div className={styles.hding}>
                            <h1>HypeIndustry</h1>
                        </div>

                        <div className={styles.p_1}>
                            <h6> HypeIndustry Concept </h6>
                            <h6> Buying Guide </h6>
                            <h6>Selling Guide </h6>
                        </div>

                    </Col>


                    <Col xs={3} lg="3" sm="3" md="3" xl="3" xxl="3" className={styles.cols_one}>
                        <div className={styles.hding}>
                            <h1>Hype Offers</h1>
                        </div>

                        <div className={styles.p_1}>
                            <h6>Footwear </h6>
                            <h6>Appard</h6>
                            <h6>Accessories </h6>
                        </div>
                    </Col>
                    <Col xs={3} lg="3" sm="3" md="3" xl="3" xxl="3" className={styles.cols_one}>

                        <div className={styles.hding}>
                            <h1>Shipping</h1>
                        </div>

                        <div className={styles.p_1}>
                            <h6>Shipping for buyers </h6>
                            <h6> Shipping for sellers</h6>
                            
                        </div>
                    </Col>
                    <Col xs={3} lg="3" sm="3" md="3" xl="3" xxl="3" className={styles.cols_one}>

                        <div className={styles.hding}>
                            <h1>Contact Us</h1>
                        </div>

                        <div className={styles.p_1}>
                            <h6> shipping@hypeindustry.com</h6>
                            <h6> sales@hypindustry.com </h6>
                           
                        </div>

                    </Col>
                </Row>


            <p className={styles.btms}>© 2022 HypeIndustry</p>
            </div>
        </>
    )
}
