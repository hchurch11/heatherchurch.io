import React from "react";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function BlogTile(props) {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function blogPost() {
    return (
      <Col>
        <div className="ImageContainer">
          <Image
            src={`${thumbnail}`}
            className="blog-image img-thumbnail"
            alt={truncateText(cleanTitle(title), 0, 60)}
          ></Image>
        </div>
        <div className="TDContainer">
          <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
            <h3>{truncateText(cleanTitle(title), 0, 60)}</h3>
          </a>
          <br />
          <p>{truncateText(toText(content), 0, 300) + "..."}</p>
          <br />
          <h4>{convertDate(pubDate)}</h4>
        </div>
      </Col>
    );
  }

  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
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

  return (
    <div className="BlogTile">
      <Row>{blogPost()}</Row>
    </div>
  );
}