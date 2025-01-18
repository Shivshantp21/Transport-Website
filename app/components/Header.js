import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/bookings">Bookings</Link>
    </nav>
  </header>
);

export default Header;
