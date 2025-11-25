import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const courses = [
    {
      id: 1,
      title: "Основы программирования",
      duration: "3 месяца",
      level: "Начальный",
      description: "Изучите основы Python и JavaScript. Научитесь писать первые программы и понимать логику кода.",
      icon: "Code2"
    },
    {
      id: 2,
      title: "Веб-разработка",
      duration: "6 месяцев",
      level: "Средний",
      description: "Создавайте современные веб-сайты с React, TypeScript и Node.js. От простых страниц до полноценных приложений.",
      icon: "Globe"
    },
    {
      id: 3,
      title: "Анализ данных",
      duration: "4 месяца",
      level: "Средний",
      description: "Работа с большими данными, визуализация и машинное обучение. Pandas, NumPy и scikit-learn.",
      icon: "BarChart3"
    },
    {
      id: 4,
      title: "Кибербезопасность",
      duration: "5 месяцев",
      level: "Продвинутый",
      description: "Защита систем и данных. Изучите методы атак и защиты, сетевую безопасность и криптографию.",
      icon: "Shield"
    }
  ];

  const teachers = [
    {
      id: 1,
      name: "Анна Петрова",
      role: "Senior разработчик",
      experience: "12 лет в IT",
      photo: "https://cdn.poehali.dev/projects/a22e0f00-c719-480a-a84b-5e63abee2cf7/files/b56c57eb-9ea4-4838-8fc8-a3f0efd6433a.jpg"
    },
    {
      id: 2,
      name: "Дмитрий Соколов",
      role: "Data Scientist",
      experience: "8 лет в аналитике",
      photo: "https://cdn.poehali.dev/projects/a22e0f00-c719-480a-a84b-5e63abee2cf7/files/b56c57eb-9ea4-4838-8fc8-a3f0efd6433a.jpg"
    },
    {
      id: 3,
      name: "Елена Иванова",
      role: "Fullstack Engineer",
      experience: "10 лет разработки",
      photo: "https://cdn.poehali.dev/projects/a22e0f00-c719-480a-a84b-5e63abee2cf7/files/b56c57eb-9ea4-4838-8fc8-a3f0efd6433a.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold font-heading">Компьютерные куры</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
              <a href="#courses" className="text-foreground/80 hover:text-primary transition-colors">Курсы</a>
              <a href="#teachers" className="text-foreground/80 hover:text-primary transition-colors">Преподаватели</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Записаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Обучение IT <br />
                <span className="text-primary">с нуля</span> до <span className="text-secondary">профи</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Практические курсы программирования от ведущих специалистов индустрии. 
                Начните карьеру в IT уже сегодня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Выбрать курс
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a22e0f00-c719-480a-a84b-5e63abee2cf7/files/36ede192-969b-4a77-887d-e2bc751c35aa.jpg" 
                alt="Обучение IT" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">О нас</h2>
            
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Центр повышения квалификации<br />
                  "Современные информационные технологии"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base leading-relaxed">
                <p className="text-muted-foreground">
                  Центр повышения квалификации "Современные информационные технологии" – преемник лучших традиций 
                  методической службы, основанной более 10 лет назад.
                </p>
                <p className="text-muted-foreground">
                  Центром руководит <span className="font-semibold text-foreground">Заслуженный деятель науки РФ Иванов И.И.</span> В составе 
                  лаборатории работают доктора и кандидаты технических, физико-математических и педагогических наук.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Target" className="text-primary" size={24} />
                  Приоритетные направления деятельности Центра
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Консультативно-методическая поддержка</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Разработка и внедрение в педагогическую практику современных информационных 
                      и коммуникационных образовательных технологий
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Информатизация образовательного процесса</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Развитие на базе интернет-технологий системы дистанционного образования
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Программы курсов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите направление и начните путь в IT. Все курсы включают практические задания и поддержку менторов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={course.icon as any} className="text-primary" size={24} />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Наши преподаватели</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Учитесь у лучших специалистов, которые работают в крупнейших IT-компаниях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={teacher.id} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={teacher.photo} 
                      alt={teacher.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                    />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>{teacher.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы? Мы всегда рады помочь и ответить на любые вопросы о наших курсах
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@computerhens.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h3 className="text-xl font-bold font-heading">Компьютерные куры</h3>
              </div>
              <p className="text-background/80">
                Образовательная платформа для всех, кто хочет освоить IT
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#courses" className="hover:text-background transition-colors">Курсы</a></li>
                <li><a href="#teachers" className="hover:text-background transition-colors">Преподаватели</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Анализ данных</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Кибербезопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Компьютерные куры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;