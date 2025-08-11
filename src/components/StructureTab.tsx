import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const StructureTab = () => {
  const organizationalUnits = [
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
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Организационная структура</h3>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Добавить подразделение
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {organizationalUnits.map((unit, index) => (
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
    </div>
  );
};

export default StructureTab;