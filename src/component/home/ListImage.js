import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, showPopup } from "../../store/actions/action";
import DetailItem from "./DetailItem";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./ListImage.module.scss";

const ListImage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const imageList = useSelector((state) =>
    // access to state of store and get 8 first elements
    state.ListImageInfo?.ListImage?.slice(0, 8)
  );

  const showModal = useSelector((state) => state.Popup.isPopup);
  // console.log(showModal);

  const handlOnclick = (event) => {
    if (imageList) {
      const selectedItem = imageList.filter((e) => e._id.$oid === event);
      dispatch(showPopup(selectedItem));
    }
  };

  // use boostrap to render image list
  if (imageList && imageList?.length > 0) {
    return (
      <div className={classes.ListImage}>
        <div className={classes.ListImageTitle}>
          <p>MADE THE HARD WAY</p>
          <h1>TOP TRENDING PRODUCTS</h1>
        </div>
        {/* setting 4 image card for md, 1 for xs display */}
        <Row xs={1} md={4} className='g-4'>
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
        {showModal && <DetailItem />}
      </div>
    );
  }
};

export default ListImage;
