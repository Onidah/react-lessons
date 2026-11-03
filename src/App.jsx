import Checkbox from "./components/Checkbox"
import Form from "./components/Form"
import Input from "./components/Input"
import Password from "./components/Password"
import Radio from "./components/Radio"
import RegisterForm from "./components/RegisterForm"

function App() {

  return (
    <div>
      <Input/>
      <Password/>
      <Form/>
      <Checkbox/>
      <Radio/>
      <hr />
      <h1>Register form</h1>
      <RegisterForm/>
    </div>
  )
}

export default App
