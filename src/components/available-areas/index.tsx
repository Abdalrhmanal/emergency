import React from 'react';

interface Area {
  id: number;
  name: string;
}

const areas: Area[] = [
  { id: 1, name: 'ريف دمشق' },
  { id: 2, name: 'ريف حلب' },
  { id: 3, name: 'اللاذقية' },
  { id: 4, name: 'درعا' },
];

const AvailableAreas: React.FC = () => (
  <div className="container my-4">
    <h3>المناطق المتاحة للخدمة</h3>
    <div className="row row-cols-2 row-cols-md-4 g-3">
      {areas.map((area) => (
        <div className="col" key={area.id}>
          <button className="btn btn-outline-primary w-100">{area.name}</button>
        </div>
      ))}
    </div>
  </div>
);

export default AvailableAreas;
