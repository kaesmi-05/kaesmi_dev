import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('KZT');
  const [exchangeRates, setExchangeRates] = useState({
    KZT: 1,
    USD: 0.0021,
    EUR: 0.0019,
    RUB: 0.18,
    UAH: 0.077
  });

  const services = [
    {
      id: 0,
      title: "Одностраничный сайт (Landing Page)",
      description: "Современный одностраничный сайт для продвижения продукта или услуги. Оптимизирован для конверсии, адаптирован под все устройства.",
      basePrice: 20000,
      features: ["Адаптивный дизайн", "Оптимизация под SEO", "Форма обратной связи", "Интеграция с соцсетями", "Аналитика посещений"]
    },
    {
      id: 1,
      title: "Сайт-визитка",
      description: "Классический сайт-визитка для представления вас или вашего бизнеса в интернете. Несколько страниц с основной информацией.",
      basePrice: 20000,
      features: ["До 5 страниц", "Адаптивный дизайн", "Галерея работ", "Контакты и карта", "Базовое SEO"]
    },
    {
      id: 2,
      title: "Корпоративный сайт",
      description: "Полнофункциональный сайт для компании с системой управления контентом, новостным разделом и каталогом продукции.",
      basePrice: 100000,
      isFrom: true,
      features: ["Индивидуальный дизайн", "Система управления (CMS)", "Многостраничная структура", "Новостной блог", "Админ-панель"]
    },
    {
      id: 3,
      title: "Интернет-магазин",
      description: "Полноценная платформа для онлайн-продаж с каталогом товаров, корзиной, системой оплаты и личным кабинетом покупателя.",
      basePrice: 100000,
      isFrom: true,
      features: ["Каталог товаров", "Корзина и оформление заказа", "Система оплаты", "Личный кабинет", "Управление заказами"]
    }
  ];

  const portfolioItems = [
    { id: 1, title: "Сайт для кофейни", category: "Landing Page", image: "coffee.jpg" },
    { id: 2, title: "Интернет-магазин одежды", category: "E-commerce", image: "fashion.jpg" },
    { id: 3, title: "Корпоративный портал", category: "Корпоративный", image: "corporate.jpg" },
    { id: 4, title: "Сайт-портфолио дизайнера", category: "Сайт-визитка", image: "portfolio.jpg" },
    { id: 5, title: "Сайт для турагентства", category: "Корпоративный", image: "travel.jpg" },
    { id: 6, title: "Лендинг для стартапа", category: "Landing Page", image: "startup.jpg" },
  ];

  // Форматирование цены
  const formatPrice = (price, currencyCode) => {
    const convertedPrice = price * exchangeRates[currencyCode];
    const currencySymbols = {
      KZT: 'тг',
      USD: '$',
      EUR: '€',
      RUB: '₽',
      UAH: '₴'
    };
    
    const formattedPrice = convertedPrice.toLocaleString('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    return `${services[activeService].isFrom && currencyCode !== 'KZT' ? 'от ' : ''}${formattedPrice} ${currencySymbols[currencyCode]}`;
  };

  const handleServiceClick = (id) => {
    setActiveService(id);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.");
    e.target.reset();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Шапка сайта */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <span className="logo-text">WebDev Pro</span>
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Услуги</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Портфолио</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Обо мне</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Контакты</a>
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main>
        {/* Герой-секция */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Профессиональная разработка сайтов любой сложности</h1>
              <p className="subtitle">Создаю современные, быстрые и адаптивные веб-сайты, которые привлекают клиентов и способствуют развитию бизнеса.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Обсудить проект</a>
                <a href="#services" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Посмотреть услуги</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-snippet">
                <pre>{`<WebDeveloper>\n  <Skills>\n    <Skill>React</Skill>\n    <Skill>JavaScript</Skill>\n    <Skill>CSS/HTML</Skill>\n    <Skill>UI/UX Design</Skill>\n  </Skills>\n</WebDeveloper>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Секция услуг */}
        <section id="services" className="services">
          <div className="container services-container">
            <h2 className="section-title">Мои услуги</h2>
            <p className="section-subtitle">Выберите подходящий вариант или закажите индивидуальный проект</p>
            
            <div className="services-tabs">
              {services.map(service => (
                <button 
                  key={service.id}
                  className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="service-tab-content">
                    <span className="service-title">{service.title.split(' ')[0]}</span>
                    <span className="service-price">{formatPrice(service.basePrice, 'KZT')}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="service-details">
              <div className="service-info">
                <h3>{services[activeService].title}</h3>
                <p className="service-description">{services[activeService].description}</p>
                
                <div className="price-section">
                  <div className="price-display">
                    <div className="price-main">
                      {formatPrice(services[activeService].basePrice, currency)}
                    </div>
                    <div className="currency-selector-small">
                      <button 
                        className={`currency-option ${currency === 'KZT' ? 'active' : ''}`}
                        onClick={() => setCurrency('KZT')}
                      >
                        KZT
                      </button>
                      <button 
                        className={`currency-option ${currency === 'USD' ? 'active' : ''}`}
                        onClick={() => setCurrency('USD')}
                      >
                        USD
                      </button>
                      <button 
                        className={`currency-option ${currency === 'EUR' ? 'active' : ''}`}
                        onClick={() => setCurrency('EUR')}
                      >
                        EUR
                      </button>
                      <button 
                        className={`currency-option ${currency === 'RUB' ? 'active' : ''}`}
                        onClick={() => setCurrency('RUB')}
                      >
                        RUB
                      </button>
                    </div>
                  </div>
                </div>
                
                <h4 className="features-title">Что входит:</h4>
                <ul className="features-list">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <a href="#contact" className="btn-secondary order-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Заказать эту услугу</a>
              </div>
              
              <div className="service-illustration">
                <div className="illustration-placeholder">
                  <div className="device-mockup">
                    <div className="device-screen"></div>
                  </div>
                  <div className="illustration-text">
                    <h4>Срок разработки:</h4>
                    <p>{activeService <= 1 ? "3-5 рабочих дней" : "от 10 рабочих дней"}</p>
                    
                    <h4>Технологии:</h4>
                    <p>React, JavaScript, CSS3, HTML5, адаптивная верстка</p>
                    
                    <div className="currency-hint">
                      <span>Цена в {currency}: {formatPrice(services[activeService].basePrice, currency)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция портфолио */}
        <section id="portfolio" className="portfolio">
          <div className="container portfolio-container">
            <h2 className="section-title">Мои работы</h2>
            <p className="section-subtitle">Примеры реализованных проектов</p>
            
            <div className="portfolio-grid">
              {portfolioItems.map(item => (
                <div key={item.id} className="portfolio-item">
                  <div className="portfolio-image">
                    <div className={`image-placeholder ${item.category === 'Landing Page' ? 'landing' : 
                                    item.category === 'E-commerce' ? 'ecommerce' : 
                                    item.category === 'Корпоративный' ? 'corporate' : 'visiting'}`}>
                      <div className="image-overlay">{item.title}</div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <span className="portfolio-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция "Обо мне" */}
        <section id="about" className="about">
          <div className="container about-container">
            <div className="about-content">
              <h2 className="section-title">Обо мне</h2>
              <p className="about-description">Я профессиональный веб-разработчик с 5-летним опытом создания сайтов различной сложности. Специализируюсь на разработке современных, адаптивных и высокопроизводительных веб-приложений.</p>
              
              <div className="skills">
                <div className="skill">
                  <h4>Frontend разработка</h4>
                  <p>React, JavaScript, TypeScript, Vue.js, HTML5, CSS3, SASS</p>
                </div>
                <div className="skill">
                  <h4>Дизайн и UX/UI</h4>
                  <p>Адаптивный дизайн, Figma, Adobe XD, пользовательские интерфейсы</p>
                </div>
                <div className="skill">
                  <h4>Дополнительные технологии</h4>
                  <p>Git, Webpack, REST API, Node.js, MongoDB, Firebase</p>
                </div>
              </div>
              
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-text">Реализованных проектов</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-text">Довольных клиентов</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5 лет</div>
                  <div className="stat-text">Опыта разработки</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция контактов */}
        <section id="contact" className="contact">
          <div className="container contact-container">
            <h2 className="section-title">Свяжитесь со мной</h2>
            <p className="section-subtitle">Обсудим ваш проект и найдем оптимальное решение</p>
            
            <div className="contact-content">
              <div className="contact-info">
                <h3>Контактная информация</h3>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@webdevpro.kz</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Телефон</h4>
                    <p>+7 (777) 123-45-67</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Локация</h4>
                    <p>Алматы, Казахстан</p>
                    <p className="location-subtext">Работаю с клиентами по всему миру</p>
                  </div>
                </div>
                
                <div className="currency-note">
                  <h4>Международные клиенты</h4>
                  <p>Принимаю оплату в разных валютах. Используйте переключатель валют в разделе услуг.</p>
                </div>
              </div>
              
              <div className="contact-form">
                <form onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ваше имя</label>
                      <input type="text" id="name" required placeholder="Иван Иванов" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" required placeholder="example@mail.com" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Интересующая услуга</label>
                      <select id="service">
                        <option value="">Выберите услугу</option>
                        <option value="landing">Одностраничный сайт</option>
                        <option value="visiting">Сайт-визитка</option>
                        <option value="corporate">Корпоративный сайт</option>
                        <option value="ecommerce">Интернет-магазин</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="budget">Бюджет</label>
                      <input 
                        type="number" 
                        id="budget" 
                        placeholder="20000"
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Опишите ваш проект</label>
                    <textarea id="message" rows="5" placeholder="Расскажите о вашем проекте, целях и пожеланиях..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary submit-btn">Отправить заявку</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="logo-footer">
              <span className="logo-text">WebDev Pro</span>
              <p>Профессиональная разработка сайтов</p>
            </div>
            
            <div className="footer-links">
              <h4>Услуги</h4>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Одностраничный сайт</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Сайт-визитка</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Корпоративный сайт</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Интернет-магазин</a>
            </div>
            
            <div className="footer-contact">
              <h4>Контакты</h4>
              <p>hello@webdevpro.kz</p>
              <p>+7 (777) 123-45-67</p>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} WebDev Pro. Все права защищены.</p>
            <p className="currency-disclaimer">Курсы валют: USD ≈ 0.0021, EUR ≈ 0.0019, RUB ≈ 0.18</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;