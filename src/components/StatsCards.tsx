import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const StatsCards = () => {
  return (
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
  );
};

export default StatsCards;