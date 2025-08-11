import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">
                HR Система Университета
              </h1>
              <p className="text-muted-foreground">
                Управление кадровыми процессами и аналитика
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Создать
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Users" size={24} className="text-primary" />
                <Badge variant="secondary">+12%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-sm text-muted-foreground">Всего сотрудников</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Briefcase" size={24} className="text-accent" />
                <Badge variant="secondary">8</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-sm text-muted-foreground">Открытые вакансии</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="FileText" size={24} className="text-blue-600" />
                <Badge variant="secondary">Новые</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-sm text-muted-foreground">Документы на подпись</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="TrendingUp" size={24} className="text-green-600" />
                <Badge variant="secondary">↑ 5.2%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-sm text-muted-foreground">Эффективность HR</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="BarChart" size={16} />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="vacancies" className="flex items-center gap-2">
              <Icon name="Briefcase" size={16} />
              Вакансии
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <Icon name="FileText" size={16} />
              Документы
            </TabsTrigger>
            <TabsTrigger value="structure" className="flex items-center gap-2">
              <Icon name="Building" size={16} />
              Структура
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              Контакты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Аналитика найма
                  </CardTitle>
                  <CardDescription>Статистика по месяцам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Январь</span>
                      <Progress value={75} className="w-32" />
                      <span className="text-sm font-medium">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Февраль</span>
                      <Progress value={60} className="w-32" />
                      <span className="text-sm font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Март</span>
                      <Progress value={90} className="w-32" />
                      <span className="text-sm font-medium">18</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Апрель</span>
                      <Progress value={45} className="w-32" />
                      <span className="text-sm font-medium">9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={20} />
                    Распределение по факультетам
                  </CardTitle>
                  <CardDescription>Количество сотрудников</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Информатика</span>
                      </div>
                      <span className="text-sm text-muted-foreground">245</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Экономика</span>
                      </div>
                      <span className="text-sm text-muted-foreground">198</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">Математика</span>
                      </div>
                      <span className="text-sm text-muted-foreground">156</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium">Администрация</span>
                      </div>
                      <span className="text-sm text-muted-foreground">89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Недавняя активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border-l-4 border-blue-500 bg-blue-50">
                    <Icon name="UserPlus" size={16} className="text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Новый сотрудник добавлен</p>
                      <p className="text-xs text-muted-foreground">Иванов А.В. - Кафедра ИТ</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2ч назад</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 border-l-4 border-green-500 bg-green-50">
                    <Icon name="FileCheck" size={16} className="text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Документ утвержден</p>
                      <p className="text-xs text-muted-foreground">Приказ о назначении №124</p>
                    </div>
                    <span className="text-xs text-muted-foreground">4ч назад</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 border-l-4 border-orange-500 bg-orange-50">
                    <Icon name="AlertTriangle" size={16} className="text-orange-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Требуется внимание</p>
                      <p className="text-xs text-muted-foreground">Истекает срок договора у 5 сотрудников</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1д назад</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vacancies" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Открытые вакансии</h3>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Новая вакансия
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Преподаватель программирования",
                  department: "Факультет информатики",
                  type: "Полная занятость",
                  salary: "60,000 - 80,000 ₽",
                  status: "active"
                },
                {
                  title: "Заведующий кафедрой",
                  department: "Кафедра математики",
                  type: "Полная занятость", 
                  salary: "90,000 - 120,000 ₽",
                  status: "urgent"
                },
                {
                  title: "Лаборант",
                  department: "Лаборатория физики",
                  type: "Частичная занятость",
                  salary: "25,000 - 35,000 ₽",
                  status: "active"
                }
              ].map((vacancy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant={vacancy.status === "urgent" ? "destructive" : "default"}>
                        {vacancy.status === "urgent" ? "Срочно" : "Активна"}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                    <CardTitle className="text-base">{vacancy.title}</CardTitle>
                    <CardDescription>{vacancy.department}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        {vacancy.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="DollarSign" size={14} />
                        {vacancy.salary}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">Подробнее</Button>
                      <Button size="sm" variant="outline">Изменить</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Управление документами</h3>
              <Button>
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить документ
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Требуют подписи</CardTitle>
                  <CardDescription>Документы ожидающие утверждения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Приказ о назначении - Петров И.И.",
                      "Трудовой договор - Сидорова М.А.",
                      "Изменения в штатное расписание",
                      "Положение о премировании"
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="FileText" size={16} className="text-blue-600" />
                          <span className="text-sm">{doc}</span>
                        </div>
                        <Button size="sm">Подписать</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Шаблоны документов</CardTitle>
                  <CardDescription>Стандартные формы и бланки</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Трудовой договор",
                      "Приказ о приеме на работу",
                      "Служебная записка",
                      "Заявление на отпуск"
                    ].map((template, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="FileType" size={16} className="text-green-600" />
                          <span className="text-sm">{template}</span>
                        </div>
                        <Button size="sm" variant="outline">Скачать</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="structure" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Организационная структура</h3>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить подразделение
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ректорат",
                  head: "Иванов А.В.",
                  employees: 12,
                  departments: 3
                },
                {
                  name: "Факультет информатики",
                  head: "Петров Б.Г.",
                  employees: 245,
                  departments: 8
                },
                {
                  name: "Экономический факультет", 
                  head: "Сидорова М.И.",
                  employees: 198,
                  departments: 6
                },
                {
                  name: "Математический факультет",
                  head: "Козлов Д.А.",
                  employees: 156,
                  departments: 5
                },
                {
                  name: "Административный отдел",
                  head: "Федорова Е.П.",
                  employees: 89,
                  departments: 4
                },
                {
                  name: "Студенческий отдел",
                  head: "Морозов К.С.",
                  employees: 67,
                  departments: 3
                }
              ].map((unit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Building" size={18} />
                      {unit.name}
                    </CardTitle>
                    <CardDescription>Руководитель: {unit.head}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Сотрудники:</span>
                        <span className="font-medium">{unit.employees}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Кафедры:</span>
                        <span className="font-medium">{unit.departments}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Контакты отдела кадров</h3>
              <Button>
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Основные контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={18} className="text-blue-600" />
                    <div>
                      <p className="font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Приёмная</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={18} className="text-blue-600" />
                    <div>
                      <p className="font-medium">hr@university.ru</p>
                      <p className="text-sm text-muted-foreground">Общий email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={18} className="text-blue-600" />
                    <div>
                      <p className="font-medium">ул. Университетская, д. 1</p>
                      <p className="text-sm text-muted-foreground">Корпус А, кабинет 205</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={18} className="text-blue-600" />
                    <div>
                      <p className="font-medium">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Приёмные часы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ключевые сотрудники</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Иванова Елена Петровна</p>
                      <p className="text-sm text-muted-foreground">Начальник отдела кадров</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Петров Алексей Иванович</p>
                      <p className="text-sm text-muted-foreground">Специалист по подбору</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Сидорова Мария Андреевна</p>
                      <p className="text-sm text-muted-foreground">Документооборот</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;