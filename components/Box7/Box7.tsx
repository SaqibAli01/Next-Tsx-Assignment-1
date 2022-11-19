import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box7.module.css';

export default function Box7() {
    return (
        <>

            <div className={styles.Box7}>
                <Row>

                    <Col xs={12} lg="12" sm="12" md="12" xl="12" xxl="12">
                        <div className={styles.hding}>
                            <h1>HypeIndustry</h1>
                        </div>
                    </Col>

                    <Col xs={12} lg="12" sm="12" md="12" xl="12" xxl="12">
                        <div className={styles.btns}>
                            <h3 className={styles.selr}>become a Seller </h3>
                            <h3>create a listing </h3>
                            <h3>seller fees </h3>
                            <h3>CONDITION OF ITEMS </h3>
                        </div>
                    </Col>

                    <Col xs={12} lg="12" sm="12" md="12" xl="12" xxl="12">

                        <h6>How do I sell on HypeIndustry?
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </h6>
                        <p className={styles.pp}>To ensure the quality and authenticity of all items on our marketplace,
                             we only allow a select group of stores and sellers that have passed our verification process, 
                             to sell on our platform. We encourage you to request to become a seller by filling out all
                              the required information.
                             We’ll notify you as soon as your request has been approved.</p>
                        
                        <hr/>
                        <h6>I requested to become a SELLER, how long will it take to get approved?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </h6>
                        <hr/>
                        <h6>How do I delete my Account?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </h6>
                        <hr/>
                        <h6>Can I share my seller privileges with others?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </h6>
                        <hr/>
                        <h6>Can I create several Seller Accounts?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </h6>
                        <hr/>
                        <h6>How do I become a seller if I have a store outside the USA?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </h6>
                        <hr/>


                    </Col>


                </Row>



            </div>
        </>
    )
}
