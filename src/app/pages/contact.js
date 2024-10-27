// pages/contact.js
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleMap from '../components/GoogleMap';

export default function Contact() {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <GoogleMap />
      </main>
      <Footer />
    </div>
  );
}
