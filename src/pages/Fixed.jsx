import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Fixed from 'content/assets/images/forms/Fixed.jpg';

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <img src={Fixed} alt="Fixed RX Prescription Form" />
    );
  }
}

const PrintableFixed = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button type="button">Print Fixed RX Prescription</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default PrintableFixed;