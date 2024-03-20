import React from "react";
import Layout from "@/app/layout/layout";
import "../styles/globals.css";
import { GetServerSideProps } from "next";

interface ProjetsPageProps {
  title: string;
  descriptionPrem: string;
  descriptionDeux: string;
}

function ProjetsPage({ title, descriptionPrem, descriptionDeux }: ProjetsPageProps) {
  return (
    <Layout title={title} descriptionPrem={descriptionPrem} descriptionDeux={descriptionDeux} />
  );
}

export const getServerSideProps: GetServerSideProps<ProjetsPageProps> = async () => {
  return {
    props: {
      title: "Mes projets",
      descriptionPrem: "",
      descriptionDeux: ""
    },
  };
};

export default ProjetsPage;
