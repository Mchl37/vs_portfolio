import Image from 'next/image';

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="iconsTop">
        <Image
          src="/assets/icons/files.png"
          width={20}
          height={20}
          alt="Files icon"
        />
        <Image
          src="/assets/icons/search.png"
          width={20}
          height={20}
          alt="Files icon"
        />
        <Image
          src="/assets/icons/source-control.png"
          width={20}
          height={20}
          alt="Files icon"
        />
        <Image
          src="/assets/icons/debug.png"
          width={20}
          height={20}
          alt="Files icon"
        />
        <Image
          src="/assets/icons/extensions.png"
          width={20}
          height={20}
          alt="Files icon"
        />
      </div>
      <div className="iconsBot">
        <Image
          src="/assets/icons/account.png"
          width={20}
          height={20}
          alt="Files icon"
        />
        <Image
          src="/assets/icons/gear.png"
          width={20}
          height={20}
          alt="Files icon"
        />
      </div>
    </div>
  )
}

export default LeftBar;
