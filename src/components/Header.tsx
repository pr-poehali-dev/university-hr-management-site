import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;