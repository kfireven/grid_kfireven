import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
        <tr>
          {config.map((col, index) => {
            return <th key={col.title + index}>{col.title}</th>;
          })}
        </tr>
     </thead>
     <tbody>
      {data.map((movie, index) => {
        const trailer = config[3].component;
        return (
          <tr key={movie[config[1].field] + index}>
            <td>{movie[config[0].field]}</td>
            <td>{movie[config[1].field]}</td>
            <td>{movie[config[2].field]}</td>
            <td>{trailer(movie[config[3].field])}</td>
          </tr>
      )})}
    </tbody>
  </table>
);

export default Grid;