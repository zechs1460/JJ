import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import RX from 'content/assets/images/forms/RX.jpg';

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <img src={RX} alt="Presciption RX Form" />
    );
  }
}

const PrintableRX = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button type="button">Print RX Prescription</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default PrintableRX;