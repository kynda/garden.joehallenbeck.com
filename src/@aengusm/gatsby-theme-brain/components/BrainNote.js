import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";


const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferencePreviews != null) {
    references = note.inboundReferencePreviews.map((ref) => (
      <li>
        <a href={"/container/"+ref.source}>{ref.source}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h3>Linked References</h3>
          <ul>{references}</ul>
        </>
      );
    }
  }

  let externalRefBlock = [];
  if (note.externalInboundReferences !== null) {
    let refs = note.externalInboundReferences.map((ref) => (
      <li>
        <a href={ref.sourceUrl}>
          {ref.siteName}/{ref.sourcePage}
        </a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));
    if (refs.length > 0) {
      externalRefBlock = (
        <>
          <h3>External References</h3>
          <ul>{refs}</ul>
        </>
      );
    }
  }

  return (
      <Layout>
        <SEO title={note.title} />
        <div>
          <h1>{note.title}</h1>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          {referenceBlock}
          {externalRefBlock}
        </div>
    </Layout>
  );
};

export default BrainNote;
