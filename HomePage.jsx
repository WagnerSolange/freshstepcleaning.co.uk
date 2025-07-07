import { useState } from "react";

export default function HomePage() {
  const [quoteRequest, setQuoteRequest] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setQuoteRequest({ ...quoteRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted! We'll get back to you shortly.");
  };

  return (
    <div className="p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-sky-600">FreshStep Carpet Cleaning</h1>
        <p className="text-lg text-gray-700">Professional Carpet & Upholstery Cleaning Across Bedfordshire, Hertfordshire & Greater London</p>
        <button className="text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded">Book Now</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">About Us</h2>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
          <p>FreshStep Carpet Cleaning has proudly served the local community for over 7 years, delivering exceptional carpet and upholstery cleaning services across Bedfordshire, Hertfordshire, and Greater London.</p>
          <p>We have worked with hundreds of private customers as well as trusted partners like guest houses, landlords, and estate agents. Whether it’s deep cleaning for residential carpets or large-scale commercial spaces, we approach every job with care, precision, and a customer-first attitude.</p>
          <p>Our dedicated team of four professionals works around the clock to ensure that every booking is completed on time, every time. We believe in reliable service, attention to detail, and the power of a fresh, clean space.</p>
          <p>If you're looking for trustworthy, experienced carpet cleaners who genuinely care about the results, FreshStep is your go-to team.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Our Services</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Residential Carpet Cleaning</li>
          <li>Commercial Carpet Cleaning</li>
          <li>Upholstery & Rug Cleaning</li>
          <li>Stain & Odor Removal</li>
          <li>Pet Treatment Cleaning</li>
          <li>End-of-Tenancy Carpet Cleaning</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Get a Free Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <input name="name" placeholder="Your Name" value={quoteRequest.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          <input name="email" type="email" placeholder="Your Email" value={quoteRequest.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          <input name="message" placeholder="Your Message or Service Needed" value={quoteRequest.message} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded">Submit Request</button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((id) => (
            <img key={id} src={`https://source.unsplash.com/featured/?carpetcleaning,${id}`} alt="Cleaning in Action" className="rounded-xl shadow-md" />
          ))}
        </div>
      </section>

      <section className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-sky-600">Contact Us</h2>
        <p>Email: info@freshstepcleaning.co.uk</p>
        <p>Phone: +44 1234 567890</p>
      </section>
    </div>
  );
}
