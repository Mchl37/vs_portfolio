import Image from "next/image";
import { Alice } from "next/font/google";

const alice = Alice({ subsets: ["latin"], weight: "400" });

interface HeaderSectionProps {
  title: string;
}

function HeaderSection(props: HeaderSectionProps) {
  const { title } = props;
  
  return (
    <div className="headerSection">
      <div className="title">
        <h2 className={ alice.className }>{title}</h2>
      </div>
      <div className="headerIllustration">
        <Image
          src="/assets/images/avatar-assis.png"
          width={285.49}
          height={206.29}
          style={{ marginBottom: '-44.5px' }}
          alt="Avatar assis"
        />
      </div>
    </div>
  )
}

export default HeaderSection;
