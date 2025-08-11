import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const DashboardContent = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default DashboardContent;