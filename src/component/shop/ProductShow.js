import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, showPopup } from "../../store/actions/action";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./ProductShow.module.scss";
const ProductShow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const imageList = useSelector(
    (state) =>
      // access to state of store and get 8 first elements
      state?.ListImageInfo?.ListImage
  );

  console.log(imageList);
  const handlOnclick = (event) => {
    if (imageList) {
      const selectedItem = imageList?.filter((e) => e._id.$oid === event);
      dispatch(showPopup(selectedItem));
    }
  };
  if (imageList && imageList?.length > 0) {
    return (
      <div className={classes.ProductShow}>
        <div className={classes.ProductShowSidebar}>
          <nav id='sidebar' className='active'>
            <div className='sidebar-header' id='sidebar-title'>
              <h4>CATEGORIES</h4>
            </div>
            <div className='sidebar-header'>
              <h5>APPLE</h5>
              <p>All</p>
            </div>
            <ul className={classes.sidebarList}>
              <li className=''>IPHONE & MAC</li>
              <li className=''>IPhone</li>
              <li className=''>Ipad</li>
              <li className=''>Macbook</li>
              <li className=''>WIRELESS</li>
              <li className=''>Airpod</li>
              <li className=''>Watch</li>
              <li className=''>OTHER</li>
              <li className=''>Mouse</li>
              <li className=''>Keyboard</li>
              <li className=''>Other</li>
            </ul>
          </nav>
        </div>
        <div className={classes.ProductShowContent}>
          <Row xs={1} md={3} className='g-4'>
            {imageList.map((item) => (
              <Col key={item._id.$oid}>
                <Card
                  className={classes.imageCard}
                  onClick={() => handlOnclick(item._id.$oid)}
                >
                  <Card.Img variant='top' src={item.img1} />
                  <Card.Body>
                    <Card.Title className={classes.Cardtitle}>
                      {item.name}
                    </Card.Title>
                    <Card.Text className={classes.Cardtext}>
                      {/* change price value to number, after that change to vi style number */}
                      {parseInt(item.price).toLocaleString("vi-VN")} VND
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
};

export default ProductShow;
