import React from "react";

const services = [
  { title: "Web Development", desc: "Modern and responsive web applications." },
  { title: "Cloud Services", desc: "Scalable and secure cloud infrastructure." },
  { title: "IT Consulting", desc: "Expert advice to grow your tech stack." },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
