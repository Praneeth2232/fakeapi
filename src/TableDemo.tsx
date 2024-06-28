function TableDemo(){
  const users=
    [
        {
          "id": 1,
          "name": "Leanne Graham",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "email": "Shanna@melissa.tv",
          "phone": "010-692-6593 x09125",
          
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "email": "Nathan@yesenia.net",
          "phone": "1-463-123-4447",
          
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "email": "Julianne.OConner@kory.org",
          "phone": "493-170-9623 x156",
          
        }
       ]
    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</table>
    )
    }
    export default TableDemo;
