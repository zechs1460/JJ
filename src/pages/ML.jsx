import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ML from 'content/assets/images/forms/ML.jpg';

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <img src={ML} alt="Mailing Label" />
    );
  }
}

const PrintableML = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button type="button">Print Mailing Label</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default PrintableML;