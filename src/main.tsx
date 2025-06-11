
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Toaster } from "@/components/ui/toaster"

createRoot(document.getElementById("root")!).render(
  <LazyMotion features={domAnimation}>
    <App />
    <Toaster />
  </LazyMotion>
);
