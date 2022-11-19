import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Box3.module.css';

export default function Box3() {
  return (
    <>
    
     <div  className={styles.Box2}>
      <Row>
       
        <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6" className={styles.bdr_left}>
        <div className={styles.box_stys}>
         
       
        <p>Buy cheaper because of the bulk volume discount and resell
             worldwide to make a small margin and keep the volume and
              recurrence active! The key to make your money fast .</p>
        <button> Read More</button>
          </div>
        </Col>
        <Col  xs={12} lg="6" sm="12" md="6" xl="6" xxl="6">
          <div className={styles.box_sty}>
          <img src="fac.png"/>
          </div>
        </Col>
      </Row>
      
    </div>
    </>
  )
}
