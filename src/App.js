import Article from './components/Article';
import './App.css';

function App() {
  const authorName = 'Torahack';
  const now = new Date();
  return (
    <div>
      <Article
        title={'新・日本一わかりやすいReact入門1'}
        content={'今日のトピックはpropsのデータの受け渡しについて。'}
        order={3}
        isPublished={true}
        authorName={authorName}
        updatedAt={now}
      />
      <Article
        title={'新・日本一わかりやすいReact入門2'}
        content={'今日のトピックはuseStateについて。'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門3'}
        content={'今日のトピックはuseEffectについて。'}
      />
    </div>
  );
}
export default App;
