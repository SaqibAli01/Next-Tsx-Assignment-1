
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box5.module.css';

export default function Box3() {
    return (
        <>

            <div className={styles.Box5}>
                <Row>
                    <Col xs={6} lg="6" sm="6" md="6" xl="6" xxl="6" className={styles.cols_one}>



                        <div className={styles.img_1}>

                            <img src='Vectorpi.png' />

                        </div>



                        <div className={styles.p_1}>
                            <h1> Shipping for buyers </h1>
                        </div>





                        <div className={styles.p_1}>
                            <p>
                                All of our items are being shipped from several warehouses/stores
                                in the USA and worldwide, and usually ships within 24 H to 5 business
                                days depending on the seller’s shipping time.
                            </p>
                        </div>





                        <div className={styles.p_1}>

                            <button>Read More</button>
                        </div>




                    </Col>
                    <Col xs={6} lg="6" sm="6" md="6" xl="6" xxl="6" className={styles.cols_one}>



                        <div className={styles.img_1}>

                            <img src='Vectorpi.png' />

                        </div>




                        <div className={styles.p_1}>
                            <h1> Shipping for sellers </h1>
                        </div>





                        <div className={styles.p_1}>
                            <p>
                                Once you have approved the purchase, you can request for your labels by email at: shipping@hypeindustry.com! Make sure to include:
                                Buyer’s details...
                            </p>
                        </div>





                        <div className={styles.p_1}>

                            <button>Read More</button>
                        </div>




                    </Col>
                </Row>



            </div>
        </>
    )
}
