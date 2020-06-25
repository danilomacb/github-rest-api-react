import React, { useEffect, useState } from "react";

function Test() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    async function getReadme() {
      let response = await fetch(
        "https://api.github.com/repos/danilomacb/react-portfolio/contents/README.md"
      );

      response = await response.json();
      response = await fetch(response.download_url);
      response = await response.text();

      setReadme(response);
    }

    getReadme();
  }, []);

  return <div>{readme}</div>;
}

export default Test;
