import React from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";

import Card from "./card";

const ModalContainer = styled("div")`
  display: block;
  background: rgba(0, 0, 0, 0.4);
`;

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalRoot = document.getElementById("modal");
    this.el = document.createElement("div");

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    requestAnimationFrame(() =>
      this.setState({
        loaded: true
      })
    );
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    const { close, title, children } = this.props;

    return ReactDOM.createPortal(
      <ModalContainer
        id="panel-modal"
        className={`modal ${this.state.loaded ? "show" : ""}`}
      >
        <div className="modal-dialog">
          <div className="modal-content p-0 b-0">
            <div className="panel panel-color panel-primary">
              <div className="panel-heading">
                <button type="button" onClick={close} className="close m-t-5">
                  ×
                </button>
                <h3 className="panel-title">{title}</h3>
              </div>
              <div className="panel-body" style={{ padding: 20 }}>
                <Card>{children}</Card>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>,
      this.el
    );
  }
}
