import { formatDistanceToNow } from "date-fns";

import useCycles from "@/contexts/cycles";
import { Cycle } from "@/interfaces/cycle";

import { Container, List, Status, Title } from "./styles";

function History() {
  const { cycles } = useCycles();

  function getCycleStatus(cycle: Cycle) {
    if (cycle.interruptedDate) return "interrupted";
    if (cycle.finishedDate) return "completed";
    return "pending";
  }

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
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, { addSuffix: true })}
                </td>
                <td>
                  <Status $status={getCycleStatus(cycle)}>
                    {getCycleStatus(cycle)}
                  </Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </List>
    </Container>
  );
}

export default History;
