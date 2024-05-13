import React from 'react';
import Image from 'next/image';

interface ListHeaderProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ListHeader = ({ title, isOpen, setIsOpen }: ListHeaderProps) => {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="listHeader" onClick={toggleOpen}>
      <Image
        src={`/assets/icons/chevron-${isOpen ? 'down' : 'right'}.png`}
        width={16}
        height={16}
        alt="Toggle icon"
      />
      <p>{title}</p>
    </div>
  );
};

export default ListHeader;
