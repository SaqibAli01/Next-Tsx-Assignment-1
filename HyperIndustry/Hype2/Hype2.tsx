
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Hype1.module.css';

export default function Hype2() {
  return (
    <>
    
     <div  className={styles.Box2}>
      <Row>
      <Col  xs={12} lg="6" sm="12" md="6" xl="6" xxl="6">
          <div className={styles.box_stys}>
          <img src="hype22.png"/>
          </div>
        </Col>
        
        <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6" className={styles.bdr_left}>
        <div className={styles.box_sty}>
         
        <h1 className={styles.bg_blacks}> 20 years of relationships + experience </h1>
        <p>
        The idea of building a B2B marketplace, came to us a few years ago. Experiencing the
         process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve 
         encountered issues and restrictions , we also faced lots of question from sellers and 
         buyers, shipping issues etc... But at the end of this journey, 
        we are now providing answers and solutions that will help our network and partners!
        </p>
          </div>
        <p></p>
        </Col>
        
      </Row>
      
    </div>
    </>
  )
}
