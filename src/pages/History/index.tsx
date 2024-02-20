import { formatDistanceToNow } from "date-fns";
import { Trash } from "phosphor-react";

import Button from "@/components/Button";
import useCycles from "@/contexts/cycles";
import { Cycle } from "@/interfaces/cycle";

import { Container, List, Status, Title } from "./styles";

function History() {
  const { cycles, setCycles } = useCycles();

  function getCycleStatus(cycle: Cycle) {
    if (cycle.interruptedDate) return "interrupted";
    if (cycle.finishedDate) return "completed";
    return "pending";
  }

  function clearCycles() {
    localStorage.removeItem("@pomodoro/cycles");
    setCycles([]);
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
      <Button variant="danger" disabled={!cycles.length} onClick={clearCycles}>
        <Trash size={24} />
        Clear history
      </Button>
    </Container>
  );
}

export default History;
