// import React, { useEffect, useState } from "react";
import React from "react";
import { getArticle } from "../../utils/data-local";
import { useParams } from "react-router-dom";
import DetailList from "../component/DetailList";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: getArticle(props.id),
    };
  }

  render() {
    return <DetailList {...this.state.articles} />;
  }
}

/*
function DetailPage() {
  const [article, setArticle] = useState({
    id: "",
    title: "",
    body: "",
    createdAt: "",
  });

  const { id } = useParams();
  useEffect(() => {
    async function fetchWithData() {
      const { data } = getArticle(id);
      setArticle(data);
    }
    fetchWithData();
  }, [id]);

  return (
    <section>
      <DetailList {...article} />
    </section>
  );
}
*/

// export default DetailPage;
export default DetailPageWrapper;
