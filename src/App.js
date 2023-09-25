import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <div className="container">
      <h2 className="mb-5">Redux Toolkit Query CRUD</h2>
      <PostsList />
    </div>
  )
}
export default App
