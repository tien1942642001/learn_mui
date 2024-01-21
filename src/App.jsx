import FloatingActionButtonSize from "./components/FloatingActionButton";
import Alert from '@mui/material/Alert';

export default function App() {
  return (
    <>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error" hidden="true" onClose={() => {}}>This is an error Alert.</Alert>
      <FloatingActionButtonSize />
    </>
  )
}
