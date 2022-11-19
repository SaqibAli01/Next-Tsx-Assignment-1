
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Hype1.module.css';

export default function Seler() {
  return (
    <>
<style jsx>{`
        .container {
          // margin: 50px;
        }
        p {
          color: blue;
          text-align:justify;
          padding:10%
        }
        h1{
          text-align: center
        }
      `}</style>
      <div className={styles.Box2}>
        <Row>

          <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6" className={styles.bdr_left}>
            <div className={styles.box_sty}>

              <h1> Shipping for buyers </h1>
              <p className="container">
                Shipping for buyers
                All of our items are being shipped from several warehouses/stores in the USA and 
                worldwide, and usually ships within 24h to 5 business days depending on the 
                seller’s shipping time.
                We take care of all customs paperwork for you , so you can sleep well at night!
                <br/>
                1.
                Sellers: Just pack the shoes, tape the box(es)properly with lots of tape, request
                 your labels via email, and relax! The rest will be taken care of ☺.
                 <br/>
                2.
                Buyers: Don’t worry, we will make sure: a proper value, tariff code and description are entered and that no problems occur from the time packages leave the country and arrive in your country to clear customs!
                How much does shipping COST
                The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low,
                as we are dealing with bulk purchases, resulting in cost-effective shipping.
              </p>
            </div>
            <p></p>
          </Col>
          <Col xs={12} lg="6" sm="12" md="6" xl="6" xxl="6">
            <div>
              <img src="seler4.png" />
              <h1>How much does shipping COST</h1>
              <p>The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low, as we are dealing with bulk purchases, resulting in cost-effective shipping.</p>
            </div>
          </Col>
        </Row>

      </div>
    </>
  )
}
