import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const products = [
    { 
      title: 'Самосвалы', 
      image: '/img/07cbbdf7-dce4-4794-ac61-15a9c5c3f2ed.jpg',
      models: '15+ моделей',
      capacity: 'От 20 до 60 тонн'
    },
    { 
      title: 'Экскаваторы', 
      image: '/img/e50783b7-2b30-4978-b2bc-e7c773ff881e.jpg',
      models: '12+ моделей',
      capacity: 'От 1.5 до 50 тонн'
    },
    { 
      title: 'Бетоносмесители', 
      image: '/img/e063ee9d-7813-4c97-9511-a5f3bb4d4c9b.jpg',
      models: '8+ моделей',
      capacity: 'От 6 до 16 м³'
    },
    { 
      title: 'Автокраны', 
      image: '/img/bdb82aad-fd94-4ccf-9083-1c13e8cb61a3.jpg',
      models: '10+ моделей',
      capacity: 'От 25 до 200 тонн'
    },
    { 
      title: 'Погрузчики', 
      image: '/img/428c079e-9b42-4e08-a33d-674f987f6571.jpg',
      models: '9+ моделей',
      capacity: 'От 3 до 8 тонн'
    },
    { 
      title: 'Дорожная техника', 
      image: '/img/2b4b638b-9ce4-4ea8-bdb3-e7723c197efb.jpg',
      models: '6+ моделей',
      capacity: 'Катки и укладчики'
    }
  ];

  const stats = [
    { number: '15+', label: 'Лет на рынке' },
    { number: '500+', label: 'Единиц техники' },
    { number: '200+', label: 'Клиентов' },
    { number: '100%', label: 'Гарантия качества' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <Icon name="Truck" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">ТЕХГЛОБАЛ</h1>
                <p className="text-xs text-gray-500">Спецтехника из Китая</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'products', label: 'Продукция' },
                { id: 'about', label: 'О компании' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/07cbbdf7-dce4-4794-ac61-15a9c5c3f2ed.jpg" 
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Промышленная техника из Китая
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              ТЕХГЛОБАЛ — прямой поставщик спецтехники и промышленного оборудования. 
              Гарантия, сервис, конкурентные цены.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Каталог техники
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 uppercase text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-gray-600 text-lg">Широкий ассортимент спецтехники и промышленного оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-lg hover-scale cursor-pointer group">
                <div className="relative h-64 bg-white overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3 text-secondary">{product.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Package" size={16} />
                      {product.models}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Weight" size={16} />
                      {product.capacity}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-secondary">О компании ТЕХГЛОБАЛ</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>ТЕХГЛОБАЛ</strong> — надежный партнер в поставках спецтехники и 
                  промышленного оборудования из Китая с 2009 года.
                </p>
                <p>
                  Мы работаем напрямую с ведущими китайскими производителями, 
                  что позволяет предложить нашим клиентам лучшие цены и качество.
                </p>
                <p>
                  Наша команда обеспечивает полное сопровождение от подбора техники 
                  до пусконаладочных работ. Гарантия на всю технику, сервисное обслуживание.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" className="text-primary mx-auto mb-2" size={40} />
                    <div className="font-bold text-lg">Сертификация</div>
                    <div className="text-sm text-gray-600">ISO 9001</div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" className="text-primary mx-auto mb-2" size={40} />
                    <div className="font-bold text-lg">Гарантия</div>
                    <div className="text-sm text-gray-600">До 3 лет</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/428c079e-9b42-4e08-a33d-674f987f6571.jpg" 
                className="rounded-lg shadow-xl"
                alt="Техника 1"
              />
              <img 
                src="/img/e50783b7-2b30-4978-b2bc-e7c773ff881e.jpg" 
                className="rounded-lg shadow-xl mt-8"
                alt="Техника 2"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Этапы работы</h2>
            <p className="text-gray-600 text-lg">От заявки до запуска техники</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Search', title: 'Подбор', desc: 'Анализируем ваши потребности и подбираем оптимальное решение' },
              { icon: 'FileText', title: 'Договор', desc: 'Заключаем договор, оформляем всю необходимую документацию' },
              { icon: 'Ship', title: 'Доставка', desc: 'Доставка морем/ж/д с полным таможенным оформлением' },
              { icon: 'Settings', title: 'Запуск', desc: 'Доставка на объект, монтаж и пусконаладочные работы' }
            ].map((step, idx) => (
              <Card key={idx} className="relative pt-8 border-none shadow-lg">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <CardContent className="text-center p-6">
                  <Icon name={step.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Оставьте заявку и наш специалист свяжется с вами в течение часа
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Icon name="Phone" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Офис в Москве</h3>
                        <p className="text-gray-600">г. Москва, ул. Промышленная, д. 15, оф. 305</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Телефон</h3>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                        <p className="text-gray-600">+7 (800) 555-35-35 (бесплатно)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-gray-600">info@techglobal.ru</p>
                        <p className="text-gray-600">sales@techglobal.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-xl bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" className="h-12" />
                    <Input type="tel" placeholder="Телефон" className="h-12" />
                    <Input type="email" placeholder="Email" className="h-12" />
                    <Textarea placeholder="Интересующая техника" rows={4} />
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ТЕХГЛОБАЛ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Надежный поставщик спецтехники из Китая с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Самосвалы</li>
                <li>Экскаваторы</li>
                <li>Бетоносмесители</li>
                <li>Автокраны</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+7 (495) 123-45-67</li>
                <li>info@techglobal.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            © 2024 ТЕХГЛОБАЛ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
