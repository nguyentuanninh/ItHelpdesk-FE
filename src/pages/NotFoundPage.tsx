import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const NotFoundPage = () => {
  useTitle('Page not found');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-6">
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
