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

  const categories = [
    { icon: 'Truck', title: 'Экскаваторы', description: 'Гусеничные и колесные экскаваторы' },
    { icon: 'Construction', title: 'Краны', description: 'Башенные и автомобильные краны' },
    { icon: 'Factory', title: 'Промышленное оборудование', description: 'Производственные линии и станки' },
    { icon: 'Container', title: 'Погрузчики', description: 'Фронтальные и вилочные погрузчики' },
    { icon: 'Wrench', title: 'Дорожная техника', description: 'Асфальтоукладчики и катки' },
    { icon: 'Settings', title: 'Запчасти', description: 'Оригинальные запчасти и комплектующие' }
  ];

  const projects = [
    { title: 'Строительство ЖК "Новый город"', equipment: 'Башенные краны, 5 единиц', year: '2024' },
    { title: 'Дорожные работы М-11', equipment: 'Асфальтоукладчики, катки', year: '2023' },
    { title: 'Производственный комплекс', equipment: 'Промышленное оборудование', year: '2024' }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Construction" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-secondary">ТЕХГЛОБАЛ</h1>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'projects', label: 'Проекты' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="hidden md:block">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Спецтехника и оборудование из Китая
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Прямые поставки промышленного оборудования и строительной техники. 
                Гарантия качества, конкурентные цены, полное сопровождение.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Каталог техники
                </Button>
                <Button size="lg" variant="outline" className="bg-white hover:bg-gray-50">
                  Связаться с нами
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src="/img/428c079e-9b42-4e08-a33d-674f987f6571.jpg" 
                alt="Спецтехника"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">Работаем только с проверенными производителями</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingDown" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Лучшие цены</h3>
                <p className="text-gray-600">Прямые контракты без посредников</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
                <p className="text-gray-600">Полное сопровождение на всех этапах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Категории техники</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-primary transition-all hover-scale cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={cat.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
                      <p className="text-gray-600 text-sm">{cat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/2b4b638b-9ce4-4ea8-bdb3-e7723c197efb.jpg" 
                alt="О компании"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании ТЕХГЛОБАЛ</h2>
              <p className="text-lg text-gray-700 mb-4">
                Мы специализируемся на прямых поставках спецтехники и промышленного оборудования 
                из Китая с 2015 года.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Наша команда обеспечивает полный цикл сопровождения: от подбора техники 
                до доставки и пусконаладочных работ. Работаем с ведущими китайскими производителями, 
                гарантируя качество и надежность оборудования.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Единиц техники поставлено</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Доставка и логистика</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Подбор техники', desc: 'Анализ потребностей и подбор оптимального решения' },
              { step: '02', title: 'Оформление', desc: 'Заключение договора и оформление документов' },
              { step: '03', title: 'Доставка', desc: 'Морская/ж/д доставка с полным таможенным оформлением' },
              { step: '04', title: 'Запуск', desc: 'Доставка на объект и пусконаладочные работы' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="border-none shadow-lg hover-scale">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Building2" className="text-secondary" size={64} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.equipment}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Icon name="Calendar" size={16} />
                    {project.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Адрес офиса</div>
                      <div className="text-gray-600">г. Москва, ул. Промышленная, д. 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@techglobal.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-gray-600">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Оставьте заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Construction" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">ТЕХГЛОБАЛ</span>
            </div>
            <div className="text-center md:text-right text-white/80">
              © 2024 ТЕХГЛОБАЛ. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
