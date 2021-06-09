import { useEffect } from "react";
import Page from "../components/Page";

const Registry = () => {
  useEffect(() => {
    if (document.getElementById("zola-wjs")) return;

    const firstScriptTag = document.getElementsByTagName("script")[0];
    const newZolaScriptElement = document.createElement("script");
    newZolaScriptElement.id = "zola-wjs";
    newZolaScriptElement.async = true;
    newZolaScriptElement.src = "https://widget.zola.com/js/widget.js";

    firstScriptTag.parentNode?.insertBefore(
      newZolaScriptElement,
      firstScriptTag,
    );
  }, []);

  return (
    <Page>
      <a
        className="zola-registry-embed"
        href="www.zola.com/registry/jamessiegelwedding"
        data-registry-key="jamessiegelwedding"
      >
        Our Zola Wedding Registry
      </a>
    </Page>
  );
};

export default Registry;
