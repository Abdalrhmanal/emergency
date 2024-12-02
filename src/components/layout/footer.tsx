import React from 'react';
import styles from "../../app/page.module.css";


interface Team {
  id: number;
  name: string;
}

const teams: Team[] = [
  { id: 1, name: 'الدفاع المدني' },
  { id: 2, name: 'جمعية صناع' },
  { id: 3, name: 'فريق شهم' },
  { id: 4, name: 'Save Our World' },
];

const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-3">
    <div className="container text-center">
      <p>الفرق المساعدة للخدمة</p>
      <div className="d-flex flex-wrap justify-content-center">
        {teams.map((team) => (
          <button className="btn btn-link text-white" key={team.id}>
            {team.name}
          </button>
        ))}
      </div>
    </div>
  </footer>
);



export default Footer;
