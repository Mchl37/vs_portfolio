// index.tsx
import React from "react";
import Layout from "@/app/layout/layout";
import { GetServerSideProps } from 'next';

interface IndexPageProps {
  title: string;
  descriptionPrem: string;
  descriptionDeux: string;
}

function IndexPage({ title, descriptionPrem, descriptionDeux/* , children */ }: IndexPageProps) {
  return (
    <Layout title={title} descriptionPrem={descriptionPrem} descriptionDeux={descriptionDeux} />
  );
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  return {
    props: {
      title: "Michel Guelin",
      descriptionPrem: "Développeur front-end passionné et créatif, je suis en alternance à Efrei Paris, une école d’ingénieur.",
      descriptionDeux: "J’aime allier mes compétences en développement et ma sensibilité au webdesign pour créer des interfaces qui sortent de l’ordinaire."
    },
  };
};

export default IndexPage;
