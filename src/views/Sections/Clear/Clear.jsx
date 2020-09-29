import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import PageSection from "components/PageSection";

const Clear = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row />
    </PageSection>
  );
};

Clear.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clear.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clear;
