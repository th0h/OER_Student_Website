// in charge of the navigation bar, and switches between mobile and main depending on screen size.
import MainNav from './MainNav';

export default function SiteHeader() {
  return (
    <header className="sticky flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b bg-white dark:border-gray-800 dark:bg-gray-950">
        <MainNav />
    </header>
  );
}