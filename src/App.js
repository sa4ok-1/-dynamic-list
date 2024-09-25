import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [services] = useState([
    { id: 1, name: "Фотографія", category: "Фотографія", price: "1300 грн" },
    { id: 2, name: "Фотомонтаж", category: "Фотографія", price: "1700 грн" },
    {
      id: 3,
      name: "Редагування фото",
      category: "Фотографія",
      price: "500 грн",
    },
    { id: 4, name: "Фотоколаж", category: "Фотографія", price: "800 грн" },
    { id: 5, name: "Друк фото", category: "Фотографія", price: "300 грн" },
    {
      id: 6,
      name: "Фотофільтрація",
      category: "Фотографія",
      price: "1300 грн",
    },
    {
      id: 7,
      name: "Оренда фотостудії",
      category: "Фотографія",
      price: "1700 грн",
    },
    {
      id: 8,
      name: "Фото на вулиці",
      category: "Фотографія",
      price: "1900 грн",
    },
    { id: 9, name: "Фото в студії", category: "Фотографія", price: "2000 грн" },
    {
      id: 10,
      name: "Відео для фотостудії",
      category: "Фотографія",
      price: "5500 грн",
    },

    { id: 11, name: "Відео", category: "Відео", price: "1900 грн" },
    { id: 12, name: "Відеомонтаж", category: "Відео", price: "1800 грн" },
    { id: 13, name: "Відео звичайне", category: "Відео", price: "1000 грн" },
    { id: 14, name: "Редагування відео", category: "Відео", price: "1200 грн" },
    { id: 15, name: "Тривале відео", category: "Відео", price: "1200 грн" },
    {
      id: 16,
      name: "Відео для весілля",
      category: "Відео",
      price: "23000 грн",
    },
    {
      id: 17,
      name: "Інтерактивне відео",
      category: "Відео",
      price: "1700 грн",
    },
    {
      id: 18,
      name: "Корпоративне відео",
      category: "Відео",
      price: "23999 грн",
    },
    {
      id: 19,
      name: "Відео для закладів освіти",
      category: "Відео",
      price: "12000 грн",
    },
    { id: 20, name: "Промовідео", category: "Відео", price: "14900 грн" },
    { id: 21, name: "Відео візитка", category: "Відео", price: "6000 грн" },
    {
      id: 22,
      name: "Довготривала зйомка",
      category: "Відео",
      price: "14200 грн",
    },

    { id: 23, name: "Монтаж", category: "Інше", price: "1500 грн" },
    {
      id: 24,
      name: "Накладення спецефектів",
      category: "Інше",
      price: "900 грн",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Фільтрація за категорією
  const filteredServices = services.filter((service) =>
    selectedCategory ? service.category === selectedCategory : true
  );

  // Обробка розгортання опису
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="price-list">
      <h1>Прайс-лист</h1>

      {/* Фільтрація за категорією */}
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Всі категорії</option>
        <option value="Фотографія">Фотографія</option>
        <option value="Відео">Відео</option>
        <option value="Інше">Інше</option>
      </select>

      {/* Відображення товарів/послуг */}
      <ul>
        {filteredServices.map((service) => (
          <li key={service.id} className="service-item">
            <div className="service-header">
              <h2>{service.name}</h2>
              <span className="service-price"> {service.price} </span>
              <button onClick={() => toggleExpand(service.id)}>
                {expandedId === service.id ? "Сховати" : "Детальніше"}
              </button>
            </div>

            {/* Можливе місце для розгортання опису  */}
            {expandedId === service.id && (
              <p>Додаткова інформація про {service.name}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
