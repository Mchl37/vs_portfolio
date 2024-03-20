import React from 'react';
import { Montserrat } from "next/font/google";
import IndexContentSection from "@/components/indexContentSection";
import ProjetsContentSection from "@/components/projetsContentSection";
import ContactContentSection from "@/components/contactContentSection";
import TopBar from "../../components/topBar";
import LeftBar from "../../components/leftBar";
import FilesBar from "../../components/filesBar";
import TabsBar from "../../components/tabsBar";
import HeaderSection from "../../components/headerSection";
import BotBar from "../../components/botBar";
import { useRouter } from 'next/router';

const montserrat = Montserrat({ subsets: ["latin"] });

interface LayoutProps {
  title: string;
  descriptionPrem: string;
  descriptionDeux: string;
}

export default function Layout({ title, descriptionPrem, descriptionDeux }: LayoutProps) {
  console.log("title:", title);
  console.log("descriptionPrem:", descriptionPrem);
  console.log("descriptionDeux:", descriptionDeux);

  const router = useRouter();

  let sectionComponent;

  switch (router.pathname) {
    case "/":
      sectionComponent = <IndexContentSection descriptionPrem={descriptionPrem} descriptionDeux={descriptionDeux} />;
      break;
    case "/projets":
      sectionComponent = <ProjetsContentSection />;
      break;
    case "/contact":
      sectionComponent = <ContactContentSection />;
  }

  return (
    <>
      <main className={`${montserrat.className} main`}>
        <div className="container">
          <TopBar />
          <LeftBar />
          <FilesBar />
          <TabsBar />
          <HeaderSection title={title} />
          {sectionComponent}
          <BotBar />
        </div>
      </main>
    </>
  );
}
