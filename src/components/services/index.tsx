import React from 'react';
import Link from 'next/link';

interface Service {
  id: number;
  name: string;
  bgColor: string;
}

const services: Service[] = [
  { id: 1, name: 'الإسعاف والطوارئ', bgColor: 'bg-danger' },
  { id: 2, name: 'خدمة النقل', bgColor: 'bg-success' },
  { id: 3, name: 'مراكز الإيواء', bgColor: 'bg-primary' },
];

const HotServices: React.FC = () => (
  <div className="container my-4">
    <h3>خدمات الخط الساخن</h3>
    <div className="row g-3">
      {services.map((service) => (
        <div className="col-12 col-md-4" key={service.id}>
          <Link href="#AreasListWithServices">
            <div className={`card text-white ${service.bgColor}`} style={{ cursor: 'pointer' }}>
              <div className="card-body text-center">
                <h5 className="card-title">{service.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default HotServices;
