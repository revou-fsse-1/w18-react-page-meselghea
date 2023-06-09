import Header from './components/headerContainer'
import Form from './formContainer';
function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-pink-600 ">
      <Header />
      
        <h2 className="mt-4 text-xl font-semibold text-white">List of member photos</h2>
        <Form />
        
        </div>
  )
  }
  export default App;
