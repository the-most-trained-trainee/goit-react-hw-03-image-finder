import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.buttonClose);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.buttonClose);
  }

  buttonClose = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <div
        className="Overlay"
        tabIndex={0}
        onKeyDown={this.buttonClose}
        onClick={this.props.close}
      >
        <div className="Modal">
          <img src={this.props.fullImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
