import Image from 'next/image';
import Link from 'next/link';
import ListHeader from './listHeader';
import { useState } from 'react';

function FilesBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="filesBar">
      <div className="filesContainer">
        <div className="explorateur">
          <p>Explorateur</p>
          <Image
            src="/assets/icons/more.png"
            width={20}
            height={20}
            alt="Files icon"
          />
        </div>
        <div className="list">
          <ListHeader title="Michel-Guelin" isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={`listItems${isOpen ? ' open' : ''}`}>
            <Link href={"/"}>
              <div className="listItem">
                <Image
                  src="/assets/icons/code.png"
                  width={16}
                  height={16}
                  alt="Files icon"
                />
                <p>présentation.html</p>
              </div>
            </Link>
            <Link href={"/projets"}>
              <div className="listItem">
                <Image
                  src="/assets/icons/diese.png"
                  width={16}
                  height={16}
                  alt="Files icon"
                />
                <p>projets.css</p>
              </div>
            </Link>
            <Link href={"/contact"}>
              <div className="listItem">
                <Image
                  src="/assets/icons/js.png"
                  width={16}
                  height={16}
                  alt="Files icon"
                />
                <p>contact.js</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/avatar-debout-cropped.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: '50%'}}
        alt="Files icon"
      />
    </div>
  )
}

export default FilesBar;
