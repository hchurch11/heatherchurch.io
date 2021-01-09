import React from "react";

export default function BlogTile(props) {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function blogPost() {
    /*  return (
      <div className="ImageContainer card-group">
        <div className="card">
          <img
            src={`${thumbnail}`}
            className="card-img-top"
            alt={truncateText(cleanTitle(title), 0, 60)}
          />

          <div className="card-body">
            <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
              <h3 className="card-title">
                {truncateText(cleanTitle(title), 0, 60)}
              </h3>
            </a>
            <br />
            <p className="card-text">
              {truncateText(toText(content), 0, 300) + "..."}
            </p>
            <br />
            <p className=" card-footer text-muted">{convertDate(pubDate)}</p>
          </div>
        </div>
      </div>
    ); */
    return (
      <div className="section">
        <div className="media">
          <img
            src={`${thumbnail}`}
            className="align-self-start mr-3"
            alt={truncateText(cleanTitle(title), 0, 60)}
          />
          <div className="media-body">
            <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
              <h3 className="mt-0">{truncateText(cleanTitle(title), 0, 60)}</h3>
            </a>
            <p>{truncateText(toText(content), 0, 300) + "..."}</p>
            <p className="text-muted">{convertDate(pubDate)}</p>
          </div>
        </div>
      </div>
    );
  }

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", " ");
    return checkTitle;
  }

  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }

  function toText(block) {
    let tag = document.createElement("div");
    tag.innerHTML = block;
    block = tag.innerText;
    return block;
  }

  function convertDate(date) {
    let dateArray = date.slice(0, 10).split("-");
    let year = dateArray.shift();
    dateArray.push(year);
    console.log(date);
    return `Published: ${dateArray.join("/")}`;
  }

  return <div className="BlogTile ">{blogPost()}</div>;
}
