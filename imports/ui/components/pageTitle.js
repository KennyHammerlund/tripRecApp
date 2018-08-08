import React from "react";
import ReactDOMServer from "react-dom/server";

export class PageTitle extends React.Component {
  componentDidMount() {
    this.addTextToTitle();
  }
  componentDidUpdate() {
    this.addTextToTitle();
  }

  addTextToTitle() {
    const flatten = ReactDOMServer.renderToStaticMarkup(
      <span>{this.props.children}</span>
    ).replace(/(<([^>]+)>)/gi, "");
    const doc = document.createElement("div");
    doc.innerHTML = flatten;

    const unescaped =
      doc.childNodes.length === 0 ? "" : doc.childNodes[0].nodeValue;

    document.title = `APA${unescaped ? ` | ${unescaped}` : ""}`;
  }

  render() {
    const { children, hide } = this.props;
    if (hide) return null;
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <h3 className="page-title h4">{children}</h3>
          </div>
        </div>
      </div>
    );
  }
}

PageTitle.defaultProps = {
  children: <i>&nbsp;</i>
};

export default PageTitle;
