
import React, { useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface DrugData {
  DrugBankID: string;
  Name: string;
  LiteraryEvidence: string;
}

const drugData: DrugData[] = [
  {
    DrugBankID: "DB08231",
    Name: "Myristic acid",
    LiteraryEvidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8573761/"
  },
  {
    DrugBankID: "DB07159",
    Name: "Tamatinib",
    LiteraryEvidence: "https://www.researchgate.net/publication/341324097_Is_Fostamatinib_a_possible_drug_for_COVID-19_-_A_computational_study"
  },
  {
    DrugBankID: "DB00157",
    Name: "NADH",
    LiteraryEvidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7472248/"
  },
  {
    DrugBankID: "DB03147",
    Name: "Flavin adenine dinucleotide",
    LiteraryEvidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7152904/#:~:text=It%20is%20also%20exciting%20to,treatment%20of%20the%20COVID%2D19."
  },
  {
    DrugBankID: "DB08865",
    Name: "Crizotinib",
    LiteraryEvidence: "https://www.sciencedirect.com/science/article/pii/S0042682222000812"
  },
  {
    DrugBankID: "DB02567",
    Name: "PD173955",
    LiteraryEvidence: "https://www.cell.com/cell-reports/fulltext/S2211-1247(21)00254-0?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2211124721002540%3Fshowall%3Dtrue"
  },
  {
    DrugBankID: "DB00142",
    Name: "Glutamic acid",
    LiteraryEvidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9488784/#:~:text=Increased%20glutamic%20acid%2C%20and%20reduced,in%20patients%20with%20severe%20disease."
  },
  {
    DrugBankID: "DB03467",
    Name: "Naringenin",
    LiteraryEvidence: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7361426/"
  },
  {
    DrugBankID: "DB02656",
    Name: "LY-294002",
    LiteraryEvidence: "https://www.sciencedirect.com/science/article/pii/S0010482522003936"
  }
];

const DrugRepurposingTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const filteredDrugs = useMemo(() => {
    return drugData.filter(drug => 
      drug.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      drug.DrugBankID.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by drug name or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-9 pr-4"
          />
        </div>
        {searchTerm && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSearchTerm("")} 
            className="flex items-center gap-1"
          >
            Clear
          </Button>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full overflow-auto rounded-lg border shadow-sm bg-white dark:bg-gray-800"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-[120px] font-bold">DrugBank ID</TableHead>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Literary Evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {filteredDrugs.map((drug) => (
                <motion.tr
                  key={drug.DrugBankID}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredRow(drug.DrugBankID)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`border-b transition-colors ${
                    hoveredRow === drug.DrugBankID ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-muted/50'
                  }`}
                >
                  <TableCell className="font-medium">
                    <a
                      href={`https://go.drugbank.com/drugs/${drug.DrugBankID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center group"
                    >
                      {drug.DrugBankID}
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </TableCell>
                  <TableCell>{drug.Name}</TableCell>
                  <TableCell>
                    <a 
                      href={drug.LiteraryEvidence} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center group"
                    >
                      View Evidence <ExternalLink className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </TableCell>
                </motion.tr>
              ))}
              {filteredDrugs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                    No results found for "{searchTerm}"
                  </TableCell>
                </TableRow>
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
      </motion.div>
      
      <div className="text-sm text-muted-foreground text-right mt-2">
        {filteredDrugs.length} drug{filteredDrugs.length !== 1 ? 's' : ''} found
      </div>
    </div>
  );
};

export default DrugRepurposingTable;
