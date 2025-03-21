import { Button } from '../components/ui/button';

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Welcome to IT Helpdesk</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Submit a Ticket</h2>
          <p className="mb-4 text-muted-foreground">
            Create a new support ticket to get help from our team.
          </p>
          <Button>Create Ticket</Button>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">View Your Tickets</h2>
          <p className="mb-4 text-muted-foreground">
            Check the status of your existing support tickets.
          </p>
          <Button variant="outline">View Tickets</Button>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Knowledge Base</h2>
          <p className="mb-4 text-muted-foreground">
            Browse our knowledge base for common issues and solutions.
          </p>
          <Button variant="secondary">Explore Articles</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
