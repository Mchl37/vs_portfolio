import Image from "next/image";
import { Alice } from "next/font/google";
import { useRouter } from "next/router";

const alice = Alice({ subsets: ["latin"], weight: "400" });

interface HeaderSectionProps {
  title: string;
}

function HeaderSection(props: HeaderSectionProps) {
  const { title } = props;
  const router = useRouter();
  const page = router.pathname.split("/")[1];

  const images = {
    "": {
      src: "/assets/images/avatar-penche-mobile.png",
      width: 137,
      height: 273,
      id: "avatar-mobile-accueil",
    },
    projets: {
      src: "/assets/images/avatar-pc-mobile.png",
      width: 90,
      height: 90,
      id: "avatar-mobile-projets",
    },
    contact: {
      src: "/assets/images/avatar-phone-mobile.png",
      width: 55,
      height: 80,
      id: "avatar-mobile-contact",
    },
  };

  const imageConfig = images[page as keyof typeof images];

  return (
    <div className="headerSection">
      <div className="title">
        <h2 className={alice.className}>{title}</h2>
        <Image
          src={imageConfig.src}
          width={imageConfig.width}
          height={imageConfig.height}
          alt="Avatar"
          id={imageConfig.id}
          className="avatar-mobile"
        />
      </div>
      <div className="headerIllustration">
        <Image
          src="/assets/images/avatar-assis-cropped.png"
          width={285.49}
          height={206.29}
          alt="Avatar assis"
        />
      </div>
    </div>
  );
}

export default HeaderSection;
