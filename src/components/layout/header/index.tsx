import { Navigation, MobileNavigation } from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
