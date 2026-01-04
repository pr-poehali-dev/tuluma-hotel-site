import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: '',
    guests: '',
    message: ''
  });

  const houses = [
    {
      id: 1,
      name: 'Большой дом №1',
      size: '100 м²',
      capacity: '8-10 человек',
      description: 'Просторный дом с панорамными окнами, камином и террасой с видом на реку',
      image: 'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg'
    },
    {
      id: 2,
      name: 'Большой дом №2',
      size: '100 м²',
      capacity: '8-10 человек',
      description: 'Уютный дом с сауной, зоной барбекю и видом на лес',
      image: 'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg'
    },
    {
      id: 3,
      name: 'Малый дом №1',
      size: '50 м²',
      capacity: '4-5 человек',
      description: 'Компактный дом для небольшой компании с террасой и мангалом',
      image: 'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg'
    },
    {
      id: 4,
      name: 'Малый дом №2',
      size: '50 м²',
      capacity: '4-5 человек',
      description: 'Уединённый домик в лесу, идеален для спокойного отдыха',
      image: 'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg'
    },
    {
      id: 5,
      name: 'Гостиница',
      size: '40 мест',
      capacity: 'до 40 человек',
      description: 'Комфортабельная гостиница с отдельными номерами и общей зоной отдыха',
      image: 'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg'
    }
  ];

  const services = [
    { icon: 'Flame', title: 'Сауна и баня', description: 'Традиционная русская баня с панорамными окнами' },
    { icon: 'Waves', title: 'Рыбалка', description: 'Рыбалка на реке Тулума и водохранилище' },
    { icon: 'TreePine', title: 'Прогулки по лесу', description: 'Экологические тропы и природные маршруты' },
    { icon: 'Bike', title: 'Велопрокат', description: 'Велосипеды для прогулок по окрестностям' },
    { icon: 'UtensilsCrossed', title: 'Зоны барбекю', description: 'Оборудованные места для приготовления пищи' },
    { icon: 'ParkingSquare', title: 'Парковка', description: 'Охраняемая парковка для гостей' }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/5f25d582-0d2b-442f-a63e-0ede36431c60.jpg',
    'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/7cfeaf8d-2808-4e24-983d-e89d3086a59f.jpg',
    'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/b231c2f2-3f97-419c-a43d-fc98871e78ee.jpg',
    'https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/5f25d582-0d2b-442f-a63e-0ede36431c60.jpg'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', dates: '', guests: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Тулума</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('accommodation')} className="hover:text-primary transition-colors">Размещение</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/de6a668c-479a-42c6-87ed-b633f910e049/files/5f25d582-0d2b-442f-a63e-0ede36431c60.jpg')`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">Отдых в гармонии с природой</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Гостиничный комплекс на берегу реки Тулума в посёлке Верхнеполомский
            </p>
            <Button size="lg" onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-primary">О комплексе</h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              Наш гостиничный комплекс расположен в живописном посёлке Верхнеполомский на берегу реки Тулума, 
              рядом с водохранилищем. Мы предлагаем комфортный отдых в экологически чистом месте, 
              где современные удобства гармонично сочетаются с природной красотой.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Icon name="Home" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-semibold mb-2">4 дома</h3>
                <p className="text-muted-foreground">От 50 до 100 м²</p>
              </div>
              <div className="text-center">
                <Icon name="Hotel" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-semibold mb-2">Гостиница</h3>
                <p className="text-muted-foreground">На 40 мест</p>
              </div>
              <div className="text-center">
                <Icon name="Trees" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-semibold mb-2">Экология</h3>
                <p className="text-muted-foreground">Чистая природа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">Размещение</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house, index) => (
              <Card key={house.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={house.image} alt={house.name} className="w-full h-56 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl">{house.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {house.size} • {house.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{house.description}</p>
                  <Button className="w-full mt-4" onClick={() => scrollToSection('booking')}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <Icon name={service.icon} size={48} className="mx-auto mb-4 text-secondary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">Галерея</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={image} alt={`Фото ${index + 1}`} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-primary">Бронирование</h2>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Заявка на бронирование</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами для подтверждения</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Имя</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Телефон</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Даты заезда</label>
                    <Input
                      required
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder="01.06.2026 - 05.06.2026"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Количество гостей</label>
                    <Input
                      required
                      type="number"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="4"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Комментарий</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Дополнительные пожелания..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Посёлок Верхнеполомский</p>
                    <p className="text-muted-foreground">Урмутская область, Россия</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-secondary" />
                  <a href="tel:+79999999999" className="hover:text-primary transition-colors">+7 (999) 999-99-99</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-secondary" />
                  <a href="mailto:info@tuluma.ru" className="hover:text-primary transition-colors">info@tuluma.ru</a>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>Как добраться</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Комплекс расположен на берегу реки Тулума, в 5 минутах езды от центра посёлка Верхнеполомский. 
                  Мы находимся рядом с водохранилищем, что делает наше место идеальным для любителей природы и рыбалки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Гостиничный комплекс «Тулума»</p>
          <p className="opacity-80">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
