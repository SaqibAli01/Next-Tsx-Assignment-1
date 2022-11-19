import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box1.module.css';

export default function Box1() {
  return (
    <>
    
     <div  className={styles.Box1}>
      <Row>
        <Col  xs lg="4" sm="12" md="6" xl="4" xxl="4">
          <div className={styles.head_per}>
            <h1>New marketplace that
               allows you to buy in bulk
            </h1>
            <p> Hypeindustry is a one-of-a-kind Platform+Marketplace offering Bulk/
              Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the
               Footwear,Apparel & Accessory industry.</p>
            <button> Read more</button>
          </div>
        </Col>
        <Col xs lg="8" sm="12" md="6" xl="8" xxl="8">
        <img src="vec.png"/>
        </Col>
      </Row>
      
    </div>
    </>
  )
}
