import React, { Component } from "react";

import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

import "./Merchandise.scss";

import flashDrive from "../../assets/images/Flashdrive.png";
import hat from "../../assets/images/Hat.png";
import mLongSleeve from "../../assets/images/MensLongsleeve.png";
import mTee from "../../assets/images/MensT.png";
import mug from "../../assets/images/Mug.png";
import wTee from "../../assets/images/Womenst.png";

class Merchandise extends Component {
  state = { show: false, index: 0 };

  hideModal = () => {
    this.setState({ show: false, index: 0 });
  };

  render() {
    const merchandise = [
      {
        item: flashDrive,
        price: "10",
        title: "Flash Drive",
        id: 0,
        content:
          "Download you favorite DJ-Aerostar Videos to this and show them to your friends"
      },
      {
        item: hat,
        price: "17",
        title: "Hat",
        id: 1,
        content: "These are more expensive at the live show, just saying..."
      },
      {
        item: mLongSleeve,
        price: "22",
        title: "Men's Long Sleeve",
        id: 2,
        content: "For my outside shows up north"
      },
      {
        item: mTee,
        price: "18",
        title: "Men's Tee",
        id: 3,
        content: "For your everyday swag"
      },
      {
        item: mug,
        price: "10",
        title: "Coffee Mug",
        id: 4,
        content: "This holds the elixir of life itself"
      },
      {
        item: wTee,
        price: "18",
        title: "Women's Tee",
        id: 5,
        content: "Ladies have style too..."
      }
    ];

    return (
      <div className="container card mt-3">
        <h2 className="text-center mt-3 mb-0">Merchandise</h2>
        <div className="row card-body ">
          {merchandise.map((merch, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 mb-3"
                key={merch.id}
                onClick={() => this.setState({ show: true, index })}
              >
                <Card
                  content={merch.content}
                  image={merch.item}
                  linkText="Buy now"
                  title={merch.title}
                  to={"#"}
                />
              </div>
            );
          })}
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <div className="container-fluid">
              <div className="card m-3">
                <div className="card-body modal_body">
                  <div className="media" style={{flexDirection: 'column'}}>
                    <img
                      src={merchandise[this.state.index].item}
                      alt={merchandise[this.state.index].title}
                      className="img-fluid"
                    />
                    <div className="media-body">
                      <div className="modal-text ml-3">
                        <h4 className='mt-2'>{merchandise[this.state.index].title}</h4>
                        <section className='mb-2'>
                          {merchandise[this.state.index].content}
                        </section>
                      </div>
                    </div>
                  </div>
                    <a href="https://amazon.com" className="btn btn-danger buy-button">
                      Buy Now!
                    </a>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Merchandise;
