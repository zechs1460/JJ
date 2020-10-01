import React from 'react';
import PrintableML from './ML';
import PrintableRX from './RX';
import PrintableFixed from './Fixed';

class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>
        <PrintableML />
        <hr />
        <PrintableRX />
        <hr />
        <PrintableFixed />
      </div>
    );
  }
}

export default ComponentToPrint;