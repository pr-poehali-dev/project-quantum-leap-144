import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Leaf, MapPin, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ЗЕЛЁНЫЙ ЗВУК</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                Афиша
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
                Меню
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Music className="w-3 h-3 mr-1" />
                    Живая музыка и растения
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Где музыка
                    <span className="text-primary block">растёт вместе с нами</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Уникальное сочетание живых акустических выступлений и ботанической красоты. Наслаждайтесь
                    авторским кофе в окружении пышной зелени, открывая для себя новых артистов.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Забронировать столик
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Сегодняшнее шоу
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Акустическое выступление"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-green-plants-and-hanging-gardens-in-cafe.jpg"
                  alt="Атмосфера с растениями"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/artisan-coffee-and-pastries-on-wooden-table.jpg"
                  alt="Авторский кофе"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Камерная площадка"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">АТМОСФЕРА ЗЕЛЁНОГО ЗВУКА</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Наш подход, где музыка, природа и сообщество соединяются в единое целое
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Открывай</h3>
              <p className="text-muted-foreground">
                Мы помогаем открывать новые звуки и артистов в камерной обстановке, где каждая нота находит отклик.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Соединяйся</h3>
              <p className="text-muted-foreground">
                Соединяйся с природой и сообществом в нашем ботаническом оазисе, созданном для осознанного слушания.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Расти</h3>
              <p className="text-muted-foreground">
                Наблюдай, как артисты и сообщество расцветают в пространстве, которое питает творчество и подлинные связи.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Сетка событий */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">БЛИЖАЙШИЕ КОНЦЕРТЫ</h2>
            <Button variant="outline">Вся афиша</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Выступление Анны Лесной"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Сегодня</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Анна Лесная</h3>
                <p className="text-muted-foreground mb-4">Инди-фолк с ботаническими историями</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    20:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    25 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="Трио Оранжерея"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Завтра
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Трио «Оранжерея»</h3>
                <p className="text-muted-foreground mb-4">Джаз-фьюжн со звуками природы</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    19:30
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    30 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/electronic-ambient-musician-with-synthesizers-and-.jpg"
                  alt="Мох и Схемы"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  В эти выходные
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Мох и Схемы</h3>
                <p className="text-muted-foreground mb-4">Эмбиент-электроника с датчиками растений</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    21:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    40 мест
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Выращиваем звук в живых пространствах</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  «Зелёный Звук» — это больше, чем площадка. Это экосистема, где музыка и природа создают
                  симбиотический опыт. Наше пространство украшают более 200 тщательно подобранных растений,
                  которые реагируют на звуковые частоты, создавая живой, дышащий фон для камерных выступлений.
                </p>
                <p>
                  Каждый уголок рассказывает историю роста — от кофе с ферм, принадлежащих музыкантам, до
                  акустического дизайна, который позволяет музыке и природе расцветать вместе.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-muted-foreground">Живых растений</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-muted-foreground">Артистов в месяц</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Интерьер Зелёного Звука"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы испытать музыку, которая растёт?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Присоединяйтесь к нашему сообществу любителей музыки и ценителей растений. Забронируйте место
            для незабываемого вечера, где звук и природа объединяются.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Забронировать столик
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <MapPin className="w-4 h-4 mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">ЗЕЛЁНЫЙ ЗВУК</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Где музыка и природа создают незабываемые впечатления. Приходите на камерные выступления
                в наш ботанический оазис.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Рассылка
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Садовая, 123</p>
                <p>Музыкальный квартал</p>
                <p>Ежедневно 7:00 - 23:00</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Живая музыка</p>
                <p>Мастер-классы</p>
                <p>Частные мероприятия</p>
                <p>Резиденции артистов</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Зелёный Звук. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
