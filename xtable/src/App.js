import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {
  const [sortedData, setSortedData] = useState(data);
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => {
        data.sort((a,b) => {
          const [y1,m1,d1] = a.date.split('-');
          const [y2,m2,d2] = b.date.split('-');
          if(y1 < y2) return -1;
          else if(y1 > y2) return 1;
          else {
            if(m1 < m2) return -1;
            else if(m1 > m2) return 1;
            else {
              if(d1 < d2) return -1;
              else if(d1 > d2) return 1;
              else return 0;
            }
          }
        });
        const newData = [...data]
        setSortedData(newData)
      }}>Sort by Date</button>
      <button onClick={() => {
        data.sort((a,b) => a.views-b.views)
        const newData = [...data];
        setSortedData(newData);
      }}>Sort by Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {sortedData.map((item,idx) => <tr key={idx}><td>{item.date}</td><td>{item.views}</td><td>{item.article}</td></tr>)}
      </table>
    </div>
  );
}

export default App;
