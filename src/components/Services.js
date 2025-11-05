import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2 className="section-title">Services</h2>
      <div className="grid">
        <div className="card">
          <h3>Website Development</h3>
          <p>I create beautiful, responsive, and fast-loading websites from scratch that are tailored to your business needs.</p>
        </div>
        <div className="card">
          <h3>WordPress Specialist</h3>
          <p>I specialize in WordPress development, including custom themes, plugins, and e-commerce solutions.</p>
        </div>
        <div className="card">
          <h3>Maintenance & Support</h3>
          <p>I offer monthly maintenance plans to keep your website secure, updated, and running smoothly.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
