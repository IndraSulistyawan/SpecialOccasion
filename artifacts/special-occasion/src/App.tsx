import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Home } from './pages/Home';

function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-serif text-foreground mb-4">404</h1>
        <p className="text-muted-foreground font-sans">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-8 inline-block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full uppercase tracking-wider text-xs">
          Return Home
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
