import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BOOKING_URL = "https://functions.poehali.dev/ab787c32-b038-4b8a-b401-3517c4659c5b";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/4588917f-473b-40cc-b7bf-9e63b4478d2c.png";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/39ab7a18-a002-45fb-b2fd-122839544297.png";

const services = [
  { icon: "Tent", label: "Палаточные места" },
  { icon: "Truck", label: "Места для автофургонов и прицепов" },
  { icon: "ShowerHead", label: "Душ" },
  { icon: "Toilet", label: "Туалет" },
  { icon: "Flame", label: "Зона для костра" },
  { icon: "UtensilsCrossed", label: "Мангалы" },
  { icon: "Zap", label: "Электричество" },
  { icon: "Wifi", label: "Wi-Fi" },
];

const prices = [
  {
    title: "Палаточное место",
    price: "500 ₽",
    per: "ночь",
    features: ["1 палатка", "Доступ к душу и туалету", "Зона для костра"],
  },
  {
    title: "Место для автофургона",
    price: "900 ₽",
    per: "ночь",
    features: [
      "Фургон или прицеп",
      "Подключение к электричеству",
      "Доступ к душу и туалету",
      "Wi-Fi",
    ],
    highlight: true,
  },
  {
    title: "Семейный участок",
    price: "1 200 ₽",
    per: "ночь",
    features: [
      "До 2 палаток или авто",
      "Мангал в аренду",
      "Электричество",
      "Приоритетный заезд",
    ],
  },
];

const gallery = [
  {
    src: "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/39ab7a18-a002-45fb-b2fd-122839544297.png",
    alt: "Природа Забайкалья — цветущий багульник",
  },
  {
    src: "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/31fb22bc-d81f-4531-afa8-827af1eb901b.png",
    alt: "Река Шилка с высоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/050d42b2-9a5e-46d5-8653-e18fbb7c19bd.png",
    alt: "Закат над сопками Забайкалья",
  },
  {
    src: "https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/db5e5d39-ee3e-4dd4-b0d7-92294b9f347f.png",
    alt: "Горная река Забайкалья",
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", place_type: "Палаточное место" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(BOOKING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <img src={LOGO_URL} alt="Кемпинг Пикник" className="h-16 object-contain" />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                О нас
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Удобства
              </a>
              <a href="#prices" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Цены
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Галерея
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </div>
            <Button size="sm" className="hidden md:flex">
              Забронировать место
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/90 text-white border-0 text-sm px-4 py-1">
              <Icon name="MapPin" size={14} className="mr-1" />
              Прямо у трассы — не нужно съезжать с маршрута
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Остановись,
              <span className="block text-green-300">отдохни,</span>
              наберись сил!
            </h1>
            <p className="text-xl text-white/85 mb-10 max-w-2xl">
              Уютный кемпинг «Пикник» — всё необходимое для комфортного ночлега
              и отдыха после долгой дороги. Душ, мангалы, Wi-Fi и тишина природы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                <Icon name="CalendarCheck" size={20} className="mr-2" />
                Забронировать место
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                О нас
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-balance text-stone-800">
                Идеальное место для уставших в дороге
              </h2>
              <div className="space-y-5 text-lg text-stone-600">
                <p>
                  Кемпинг «Пикник» создан специально для путешественников на автомобиле.
                  Мы понимаем, как важно после долгой дороги найти уютное место, где можно
                  по-настоящему отдохнуть и набраться сил.
                </p>
                <p>
                  Расположены прямо у трассы — не нужно делать крюк. Заезжай, расслабляйся,
                  выспись, утром продолжай путь. Или остань на пару дней — природа здесь
                  того стоит.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-stone-500 text-sm mt-1">мест для стоянки</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-stone-500 text-sm mt-1">заезд в любое время</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5 км</div>
                  <div className="text-stone-500 text-sm mt-1">от трассы М-5</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/062e4bcd-6e9d-4a8b-a476-a37f23ece9a8/bucket/31fb22bc-d81f-4531-afa8-827af1eb901b.png"
                  alt="Река Шилка, Забайкальский край"
                  className="w-full h-[480px] object-cover"
                />
              </Card>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={18} className="text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">4.9 / 5</div>
                    <div className="text-xs text-stone-500">на Яндекс.Картах</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Удобства
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Всё для комфортного отдыха</h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Мы позаботились о том, чтобы вы чувствовали себя как дома — только лучше
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card
                key={s.label}
                className="p-6 text-center hover:shadow-md transition-shadow border-stone-100 rounded-2xl"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={s.icon} size={26} className="text-primary" />
                </div>
                <p className="font-medium text-stone-700 text-sm leading-snug">{s.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="prices" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Цены
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Прозрачные тарифы</h2>
            <p className="text-xl text-stone-500">Без скрытых платежей и сюрпризов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((p) => (
              <Card
                key={p.title}
                className={`p-8 rounded-2xl ${p.highlight ? "border-primary border-2 shadow-xl relative" : "border-stone-100"}`}
              >
                {p.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    Популярный выбор
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-stone-800 mb-2">{p.title}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-primary">{p.price}</span>
                  <span className="text-stone-400 mb-1">/ {p.per}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-stone-600">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${p.highlight ? "bg-primary hover:bg-primary/90" : "variant-outline"}`}
                  variant={p.highlight ? "default" : "outline"}
                >
                  Забронировать
                </Button>
              </Card>
            ))}
          </div>

          {/* Форма */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="p-8 rounded-2xl border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">Онлайн-бронирование</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-1 block">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-1 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-1 block">Дата заезда</label>
                  <input
                    type="date"
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-stone-600 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-stone-600 mb-1 block">Тип места</label>
                  <select className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Палаточное место</option>
                    <option>Место для автофургона</option>
                    <option>Семейный участок</option>
                  </select>
                </div>
              </div>
              <Button className="w-full mt-6 text-lg py-3 bg-primary hover:bg-primary/90">
                <Icon name="CalendarCheck" size={18} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-center text-sm text-stone-400 mt-3">
                Мы перезвоним в течение 30 минут для подтверждения
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Галерея
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Смотрите сами</h2>
            <p className="text-xl text-stone-500">Территория кемпинга и зоны отдыха</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <Card
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i === 0 ? "h-80 md:h-full" : "h-48"} hover:scale-105 transition-transform duration-500`}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Готовы к остановке?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Забронируйте место прямо сейчас — и следующий привал будет самым уютным за всю поездку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              <Icon name="CalendarCheck" size={20} className="mr-2" />
              Забронировать место
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Как нас найти</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="p-6 rounded-2xl border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Адрес</h4>
                    <p className="text-stone-500">Забайкальский край, Шилкинский район, ул. Забелина, д. 8</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Телефон</h4>
                    <p className="text-stone-500">+7 (995) 554-13-21</p>
                    <p className="text-sm text-stone-400">Ежедневно, круглосуточно</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                    <p className="text-stone-500">kufarova1989@mail.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 rounded-2xl border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Заезд и выезд</h4>
                    <p className="text-stone-500">Заезд: в любое время (24/7)</p>
                    <p className="text-stone-500">Выезд: до 12:00</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="rounded-2xl overflow-hidden h-96 border-stone-100">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=116.0366,51.8595&z=14&pt=116.0366,51.8595,pm2rdm&text=%D0%A8%D0%B8%D0%BB%D0%BA%D0%B0%2C+%D1%83%D0%BB.+%D0%97%D0%B0%D0%B1%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0%2C+8"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Кемпинг Пикник на карте"
                className="w-full h-full"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={LOGO_URL} alt="Кемпинг Пикник" className="h-12 object-contain brightness-[10] opacity-90" />
            <p className="text-stone-400 text-center">
              Уютный кемпинг прямо у трассы — для тех, кто в пути
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-stone-600 text-stone-300 hover:bg-stone-700 bg-transparent">
                Телеграм
              </Button>
              <Button variant="outline" size="sm" className="border-stone-600 text-stone-300 hover:bg-stone-700 bg-transparent">
                ВКонтакте
              </Button>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-500 text-sm">
            &copy; 2025 Кемпинг «Пикник». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;