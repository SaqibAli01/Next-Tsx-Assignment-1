import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box2.module.css';

export default function Box2() {
  return (
    <>
    
     <div  className={styles.Box2}>
      <Row>
        <Col  xs={12} lg="6" sm="12" md="6" xl="6" xxl="6">
          <div className={styles.box_stys}>
          <img src="hyndr.png"/>
          </div>
        </Col>
        <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6" className={styles.bdr_left}>
        <div className={styles.box_sty}>
         
        <h1>Why HypeIndustry and what is it</h1>
        <p>Hypeindustry is a one-of-a-kind Platform + Marketplace offering
             Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & 
             Resellers for the Footwear, Apparel & Accessory industry! Basically
              a new marketplace that allows you to buy in bulk (only) footwear, apparel etc...</p>
          </div>
        <p></p>
        </Col>
      </Row>
      
    </div>
    </>
  )
}
