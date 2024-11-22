import React from 'react';
import data from '../src/data/doc_data.json';
import Section from '../src/components/Section';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/app-sidebar";

const Documentation: React.FC = () => {
  const { doc_body, sections } = data;

  return (
    <SidebarProvider>
              <AppSideBar />
              <SidebarTrigger />
    <section className="p-2 tablet:p-4 laptop:p-10 rounded-lg max-w-screen-xl mx-auto text-center tablet:text-left">
      <div id="doc_body">
        <h1>{doc_body.title}</h1>
        <p id="doc_intro">{doc_body.intro}</p>
        <br />
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </section>
    </SidebarProvider>
  );
};

export default Documentation;