import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa ...</td>
              <td>25 minutos</td>
              <td>há 2 dias</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Tarefa ...</td>
              <td>25 minutos</td>
              <td>há 2 dias</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Tarefa ...</td>
              <td>25 minutos</td>
              <td>há 2 dias</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Tarefa ...</td>
              <td>25 minutos</td>
              <td>há 2 dias</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Tarefa ...</td>
              <td>25 minutos</td>
              <td>há 2 dias</td>
              <td>Em andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
