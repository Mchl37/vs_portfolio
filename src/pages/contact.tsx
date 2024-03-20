import React from "react";
import Layout from "@/app/layout/layout";
import "../styles/globals.css";
import { GetServerSideProps } from "next";

interface ContactPageProps {
  title: string;
  descriptionPrem: string;
  descriptionDeux: string;
}

function ContactPage({ title, descriptionPrem, descriptionDeux }: ContactPageProps) {
  return (
    <Layout title={title} descriptionPrem={descriptionPrem} descriptionDeux={descriptionDeux} />
  );
}

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async () => {
  return {
    props: {
      title: "Me contacter",
      descriptionPrem: "",
      descriptionDeux: ""
    },
  };
};

export default ContactPage;
