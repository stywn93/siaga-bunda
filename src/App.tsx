import Layout from './components/layout'

function App() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl p-6 md:p-8">
        <header className="mb-8">
          <p className="text-sm text-muted-foreground">Overview</p>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboardku</h1>
        </header>

        <section aria-labelledby="dashboard-ready" className="rounded-lg border p-6">
          <h2 id="dashboard-ready" className="font-medium">
            Your dashboard is ready
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Add the first real dashboard view here when its data and purpose are defined.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default App
