import React, { useEffect, useState } from "react";

const ComponentWithData = props => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [maxPage, setMaxPage] = useState(void 0);
  const [loading, setLoading] = useState(false);

  let { url, CallBack = null } = props || {};

  const getData = async () => {
    if (!url) {
      return;
    }
    setLoading(true);
    try {
      let fetchUrl = `${url}?page=${pageNo}`;
      let response = await fetch(fetchUrl);
      response = await response.json();

      let { code, data: result = [], meta: { pagination: { page, pages } = {} } = {} } = response;
      if (code == 200 && pageNo == page) {
        !maxPage && setMaxPage(pages);
        setData(data => [...data, ...result]);
      }
      setLoading(false);
    } catch (err) {
      alert(err?.message || err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (pageNo <= maxPage) {
      getData();
    }
  }, [pageNo]);

  const loadMore = () => {
    !loading && setPageNo(pageNo => pageNo + 1);
  };

  if (!CallBack) {
    return <div>Callback should be react Component</div>;
  } else {
    return <CallBack data={data} loadMore={loadMore} loading={loading} />;
  }
};

export default ComponentWithData;
