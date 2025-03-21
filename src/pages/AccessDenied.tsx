import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ShieldX } from 'lucide-react'; // Import the ShieldX icon from lucide-react

const AccessDenied = () => {
  return (
    <div className="mx-auto max-w-md space-y-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-destructive">Access Denied</h1>
        <p className="mt-2 text-muted-foreground">
          You don't have permission to access this page
        </p>
      </div>
      <div className="rounded-lg border border-destructive/20 bg-card p-6 shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="rounded-full bg-destructive/10 p-3">
            <ShieldX className="h-12 w-12 text-destructive" />
          </div>

          <h2 className="text-xl font-semibold">Authentication Required</h2>

          <div className="w-full space-y-3 pt-4">
            <Button className="w-full">
              <Link to="/login">Return to Login</Link>
            </Button>

            <Button variant="outline" className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
