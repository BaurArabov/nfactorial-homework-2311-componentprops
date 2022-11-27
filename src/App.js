import './App.css';

import Header from './components/Header';
import Content from './components/Content';

function App() {

  const articles = [
    {
      id: 1,
      authorName:'Baur Arabov',
      topic: 'World',
      dateDm:'22 November',
      titleText:'7 Practical CSS Tips',
      descriptionText:'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
      img:require('../src/images/thread1.png'),
    },
    {
      id: 2,
      authorName:'Aruzhan Zhaubassar',
      topic: 'IT world',
      dateDm:'13 March',
      titleText:'Automatic Tasks',
      descriptionText:'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner ...',
      img:require('../src/images/thread2.png'),
    },
    {
      id: 3,
      authorName:'Samat Kalshabekov',
      topic: 'Cybersecurity',
      dateDm:'8 February',
      titleText:'Random Sentence',
      descriptionText:'Our goal is to make this tool as useful as possible. For anyone who uses this tool and comes up with a way we can improve it ...',
      img:require('../src/images/thread3.png'),
    },
  ];
  return (
    <div className="App">
      <Header/>
      {/* <Content /> */}
      {articles.map(article=>
      <Content key={article.id} authorName={article.authorName} topic={article.topic} dateDm={article.dateDm} titleText={article.titleText} descriptionText={article.descriptionText} img={article.img}/>
      )}
    </div>
  );
}

export default App;
