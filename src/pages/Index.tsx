import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import DashboardContent from "@/components/DashboardContent";
import VacanciesTab from "@/components/VacanciesTab";
import DocumentsTab from "@/components/DocumentsTab";
import StructureTab from "@/components/StructureTab";
import ContactsTab from "@/components/ContactsTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <StatsCards />

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

          <TabsContent value="dashboard">
            <DashboardContent />
          </TabsContent>

          <TabsContent value="vacancies">
            <VacanciesTab />
          </TabsContent>

          <TabsContent value="documents">
            <DocumentsTab />
          </TabsContent>

          <TabsContent value="structure">
            <StructureTab />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;