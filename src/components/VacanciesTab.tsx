import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const VacanciesTab = () => {
  const vacancies = [
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
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Открытые вакансии</h3>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Новая вакансия
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vacancies.map((vacancy, index) => (
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
    </div>
  );
};

export default VacanciesTab;