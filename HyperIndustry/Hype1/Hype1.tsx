
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Hype1.module.css';

export default function Hype1() {
  return (
    <>
    
     <div  className={styles.Box2}>
      <Row>
        
        <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6" className={styles.bdr_left}>
        <div className={styles.box_sty}>
         
        <h1> Why HypeIndustry and what is it exactly? </h1>
        <p>
        Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale
         goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel
          & Accessory industry! Basically a new marketplace that allows you to buy in
           bulk (only) footwear, apparel etc... Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast.

        </p>
          </div>
        <p></p>
        </Col>
        <Col  xs={12} lg="6" sm="12" md="6" xl="6" xxl="6">
          <div className={styles.box_stys}>
          <img src="hype.png"/>
          </div>
        </Col>
      </Row>
      
    </div>
    </>
  )
}
