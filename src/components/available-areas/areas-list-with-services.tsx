"use client";
import React, { useState } from "react";

interface Information {
  id: number;
  responsible: string;
  openTime: string;
  whatsappNumber: string;
}

interface Service {
  id: number;
  name: string;
  informations: Information[];
}

interface Area {
  id: number;
  name: string;
  services: Service[];
}

const areas: Area[] =
  [
    {
      "id": 1,
      "name": " ريف حلب",
      "services": [
        {
          "id": 1,
          "name": "الإستجابة الطارئة",
          "informations": [
            {
              "id": 1,
              "responsible": "منظمة دارنا",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681570673"
            },
            {
              "id": 2,
              "responsible": "منظمة دارنا",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681542506"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": " ريف ادلب",
      "services": [
        {
          "id": 1,
          "name": "الإستجابة الطارئة",
          "informations": [
            {
              "id": 1,
              "responsible": "منظمة دارنا",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681570673"
            },
            {
              "id": 2,
              "responsible": "منظمة دارنا",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681542506"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "ادلب وما حولها",
      "services": [
        {
          "id": 1,
          "name": "الإستجابة الطارئة",
          "informations": [
            {
              "id": 1,
              "responsible": "الدفاع المدني",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681140091"
            },
            {
              "id": 2,
              "responsible": "الدفاع المدني",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681583507"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "معرة مصرين وما حولها",
      "services": [
        {
          "id": 1,
          "name": "الإستجابة الطارئة",
          "informations": [
            {
              "id": 1,
              "responsible": "الدفاع المدني",
              "openTime": "24 ساعة",
              "whatsappNumber": "905309190343"
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "الشمالي ريف حلب الغربي منطقة عفرين",
      "services": [
        {
          "id": 1,
          "name": "الإستجابة الطارئة",
          "informations": [
            {
              "id": 1,
              "responsible": "الدفاع المدني",
              "openTime": "24 ساعة",
              "whatsappNumber": "908508855558"
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "جميع المناطق",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "سيريا ريليف",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681148756"
            },
            {
              "id": 2,
              "responsible": "سيريا ريليف",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681574603"
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "سرمدا دارة عزة وماحولها",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "جمعية الاخاء للإغاثة",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681513009"
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "ادلب وما حولها",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "جمعية عطاء",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681592575"
            }
          ]
        }
      ]
    },
    {
      "id": 9,
      "name": "دارة عزة",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "فريق الطوارئ",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681119299"
            }
          ]
        }
      ]
    }, {
      "id": 10,
      "name": "الاتارب",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "فريق الطوارئ",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681119299"
            }
          ]
        }
      ]
    }, {
      "id": 11,
      "name": "سرمدا وما حولها",
      "services": [
        {
          "id": 1,
          "name": "نقل",
          "informations": [
            {
              "id": 1,
              "responsible": "فريق الطوارئ",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681119299"
            }
          ]
        }
      ]
    },
    {
      "id": 12,
      "name": "ادلب",
      "services": [
        {
          "id": 1,
          "name": " طوارئ",
          "informations": [
            {
              "id": 1,
              "responsible": "فريق ملهم",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681574603"
            }
          ]
        }, {
          "id": 2,
          "name": "نقل ",
          "informations": [
            {
              "id": 1,
              "responsible": "فريق ملهم",
              "openTime": "24 ساعة",
              "whatsappNumber": "352681574603"
            }
          ]
        }
      ]
    }
  ]
  ;

const AreasListWithServices: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleAreaClick = (area: Area) => {
    setSelectedArea(area);
    setSelectedService(null);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div id="AreasListWithServices" className="container my-4" style={{ backgroundColor: "#051139", padding: "20px" }}>
      <h3 className="text-white">المناطق المتاحة للخدمة</h3>
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {areas.map((area) => (
          <div className="col" key={area.id}>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => handleAreaClick(area)}
            >
              {area.name}
            </button>
          </div>
        ))}
      </div>

      {selectedArea && (
        <>
          <h4 className="mt-4 text-white">الخدمات المتاحة في {selectedArea.name}</h4>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {selectedArea.services.map((service) => (
              <div className="col" key={service.id}>
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => handleServiceClick(service)}
                >
                  {service.name}
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedService && (
        <div className="mt-4 p-4 border rounded">
          <h5>تفاصيل الخدمة</h5>
          <div className="row">
            {selectedService.informations.map((info) => (
              <div className="col-12 col-sm-6 col-md-4" key={info.id} style={{ marginTop: "15px" }}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">الجهة المسؤولة: {info.responsible}</h5>
                    <p className="card-text">
                      <strong>وقت الفتح:</strong> {info.openTime}
                    </p>
                    <p className="card-text">
                      <strong>رقم الواتساب:</strong>
                    </p>
                    <div className="media-body">
                      <h6>
                        <a
                          href={`https://wa.me/${info.whatsappNumber}`}
                          target="_blank"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {info.whatsappNumber}
                        </a>
                      </h6>
                      <p>Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <a
                      href={`https://wa.me/${info.whatsappNumber}`}
                      target="_blank"
                      className="btn btn-primary w-100"
                    >
                      تواصل عبر واتساب
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AreasListWithServices;
