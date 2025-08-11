import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsTab = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ContactsTab;