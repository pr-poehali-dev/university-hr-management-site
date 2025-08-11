import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DocumentsTab = () => {
  const documentsToSign = [
    "Приказ о назначении - Петров И.И.",
    "Трудовой договор - Сидорова М.А.",
    "Изменения в штатное расписание",
    "Положение о премировании"
  ];

  const documentTemplates = [
    "Трудовой договор",
    "Приказ о приеме на работу",
    "Служебная записка",
    "Заявление на отпуск"
  ];

  return (
    <div className="space-y-6">
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
              {documentsToSign.map((doc, index) => (
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
              {documentTemplates.map((template, index) => (
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
    </div>
  );
};

export default DocumentsTab;