import React from 'react';

const BoardComponent = ({ members }) => {
  const membersArray = members?.members || [];

  return (
    <div>
      <h3>게시판</h3>
      <h4>
        <a href="/add">추가</a> <a href="/search">검색</a>
        <br />
        <br />
        목록
      </h4>
      <table border="1" width="600" align="center">
        <thead>
          <tr>
            <td>이름</td>
            <td>내용</td>
          </tr>
        </thead>
        <tbody>
          {membersArray.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardComponent;
