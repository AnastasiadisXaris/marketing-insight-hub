
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, BarChart3, PieChart, LineChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      toast({
        title: "Επιτυχής μεταφόρτωση",
        description: `Το αρχείο ${selectedFile.name} μεταφορτώθηκε επιτυχώς.`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Σφάλμα",
        description: "Παρακαλώ επιλέξτε ένα έγκυρο αρχείο CSV.",
      });
    }
  };

  return (
    <div className="min-h-screen p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight fade-in">
          Marketing Insight Hub
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto fade-in">
          Ανεβάστε τα δεδομένα marketing σας και αποκτήστε πολύτιμες πληροφορίες
          μέσω προηγμένων αναλύσεων και οπτικοποιήσεων.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Μεταφόρτωση Δεδομένων</h2>
            <p className="text-sm text-gray-600 text-center">
              Ανεβάστε τα αρχεία CSV σας για ανάλυση
            </p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="csv-upload"
            />
            <Button
              onClick={() => document.getElementById("csv-upload")?.click()}
              className="w-full"
            >
              Επιλογή Αρχείου
            </Button>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Οπτικοποίηση</h2>
            <p className="text-sm text-gray-600 text-center">
              Δημιουργήστε διαδραστικά γραφήματα
            </p>
            <Button className="w-full" variant="secondary">
              Προβολή Γραφημάτων
            </Button>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Εξαγωγή</h2>
            <p className="text-sm text-gray-600 text-center">
              Εξάγετε τις αναλύσεις σας σε CSV ή PDF
            </p>
            <Button className="w-full" variant="secondary">
              Εξαγωγή Δεδομένων
            </Button>
          </div>
        </Card>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 card-hover">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Τάσεις Πωλήσεων</h3>
            <LineChart className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Μεταφορτώστε δεδομένα για προβολή γραφήματος</p>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Κατανομή Καναλιών</h3>
            <PieChart className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Μεταφορτώστε δεδομένα για προβολή γραφήματος</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
