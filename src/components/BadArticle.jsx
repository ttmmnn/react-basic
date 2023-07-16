import { Content, Title } from '.';

const BadArticle = (props) => {
  return (
    <div>
      <div className="flex__row">
        <img src={'/logo512.png'} with={36} height={36} />
        <h2>{props.title}</h2>
      </div>
      <Content content={props.content} />
    </div>
  );
};

export default BadArticle;
