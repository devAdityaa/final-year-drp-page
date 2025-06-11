
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import DrugRepurposingTable from "@/components/DrugRepurposingTable";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileSearch, Database, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const DrugRepurposing: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-3 py-1.5 px-3">Research Phase II</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              Drug Repurposing for COVID-19
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-3 mb-8"
          >
            <a href="https://cairne.eu" target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="outline" size="sm" className="gap-2">
                <Database className="w-4 h-4" /> CLAIRE Database
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </a>
            <a href="https://go.drugbank.com" target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="outline" size="sm" className="gap-2">
                <Database className="w-4 h-4" /> DrugBank
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <FileSearch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Research Overview</h2>
                <Separator className="mb-4" />
              </div>
            </div>
            
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                In the second phase of our research, we focused on identifying potential therapeutic drugs that could be repurposed 
                for targeting COVID-19-related proteins. Utilizing deep learning predictions from the first phase, we employed data from 
                the <a href="https://cairne.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline-offset-4 hover:underline transition-colors">CLAIRE</a> and <a href="https://go.drugbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline-offset-4 hover:underline transition-colors">DrugBank</a> databases 
                to explore drug-protein interactions and screen compounds with high binding potential.
              </p>
              
              <p>
                By integrating predicted protein targets with the known drug-target relationships from these databases, 
                we shortlisted and ranked the top candidate drugs based on a scoring system that considers interaction strength, 
                drug relevance, and supporting literature evidence. Each drug was carefully validated using existing scientific studies, 
                and the findings are summarized in the table below.
              </p>
              
              <p>
                These repurposed drugs offer promising candidates for further <em>in vitro</em> and <em>in vivo</em> studies, 
                potentially accelerating the path to effective COVID-19 treatments.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Candidate Drugs for Repurposing</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowTable(!showTable)}
              className="gap-2"
            >
              {showTable ? "Hide Details" : "Show Details"}
            </Button>
          </div>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showTable ? "auto" : 0,
              opacity: showTable ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            className={`overflow-hidden`}
          >
            <DrugRepurposingTable />
          </motion.div>
          
          {!showTable && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Button 
                onClick={() => setShowTable(true)}
                className="mt-4"
              >
                View Drug Data
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.main>
    </div>
  );
};

export default DrugRepurposing;
