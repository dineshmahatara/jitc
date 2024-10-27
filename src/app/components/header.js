// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact2">Contact2</Link></li>
        </ul>
      </nav>
    </header>
  );
}
