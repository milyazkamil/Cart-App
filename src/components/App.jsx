import Hero from "./Hero";
import Header from "./Header";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main className="main">
        <div className="loading"></div>
      </main>
    )
  }

  return (
    <>
      <main className="main">
        <Header />
        <Hero />
      </main>
    </>
  )
}
export default App;