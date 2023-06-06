import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'React Course';
  const parts = [
    {
      id: 1,
      name: 'Part 1',
      excercises: 10,
    },
    {
      id: 2,
      name: 'Part 2',
      excercises: 7,
    },
    {
      id: 3,
      name: 'Part 3',
      excercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
