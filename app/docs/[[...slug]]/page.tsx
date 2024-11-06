import React from "react";

const CathAll = ({ params }: { params: { slug: string[] } }) => {
  const getData = (arrData: string[]) => {
    return arrData.map((data, index) => (
      <h1 key={index}>
        param : {index + 1} | data: {data}
      </h1>
    ));
  };
  return (
    <div>
      {params.slug?.length > 0 ? (
        <>
          <h1>This is slug page with url length {params?.slug.length} where</h1>
          {getData(params?.slug)}
        </>
      ) : (
        <h1>
          This is Docs page, enter something in URL to proceed [...slug] /
          catch-all
        </h1>
      )}
    </div>
  );
};

export default CathAll;
