import React from 'react';

interface IndexContentSectionProps {
  descriptionPrem: string;
  descriptionDeux: string;
}

function IndexContentSection(props: IndexContentSectionProps) {
  const { descriptionPrem, descriptionDeux } = props;

  return (
    <div className="indexContentSection">
      <p>{descriptionPrem}</p>
      <p>{descriptionDeux}</p>
    </div>
  );
}

export default IndexContentSection;
