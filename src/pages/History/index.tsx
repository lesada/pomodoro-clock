import { Container, List, Status, Title } from "./styles";

function History() {
  return (
    <Container>
      <Title>My history</Title>
      <List>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Created at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>00:25:00</td>
              <td>2021-05-26 14:00:00</td>
              <td>
                <Status $status="completed">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>00:25:00</td>
              <td>2021-05-26 14:00:00</td>
              <td>
                <Status $status="interrupted">Interrupted</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </List>
    </Container>
  );
}

export default History;
