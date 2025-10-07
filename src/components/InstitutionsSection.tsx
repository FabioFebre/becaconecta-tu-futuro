"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Institution {
  IES: string;
  "TIPO DE IES": string;
  "TIPO DE GESTION": string;
  "DEPARTAMENTO/REGION": string;
  "SEDE (DISTRITO)": string;
  "PROGRAMA ACADEMICO": string;
  "MODALIDAD": string;
}

const InstitutionsByRegion = () => {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    fetch("/beca18_instituciones_maestro.csv")
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText
          .trim()
          .split("\n")
          .map((row) => row.split(",").map((cell) => cell.trim()));

        const headers = rows[0];

        const data = rows.slice(1).map((row) => {
          const values = row.slice(1); 
          return Object.fromEntries(
            headers.map((h, i) => [h, values[i] || ""])
          );
        }) as Institution[];

        setInstitutions(data);

        const uniqueRegions = Array.from(
          new Set(data.map((d) => d["DEPARTAMENTO/REGION"]))
        ).sort();
        setRegions(uniqueRegions);
      });
  }, []);

  return (
    <section className="py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Lista de IES elegibles
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {regions.map((region) => (
          <AccordionItem key={region} value={region}>
            <AccordionTrigger>
              {region || "Región no especificada"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border">IES</th>
                      <th className="p-2 border">TIPO DE IES</th>
                      <th className="p-2 border">TIPO DE GESTIÓN</th>
                      <th className="p-2 border">DEPARTAMENTO/REGIÓN</th>
                      <th className="p-2 border">SEDE(DISTRITO)</th>
                      <th className="p-2 border">PROGRAMA</th>
                      <th className="p-2 border">MODALIDAD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {institutions
                      .filter((inst) => inst["DEPARTAMENTO/REGION"] === region)
                      .map((inst, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="p-2 border">{inst.IES}</td>
                          <td className="p-2 border">{inst["TIPO DE IES"]}</td>
                          <td className="p-2 border">
                            {inst["TIPO DE GESTION"]}
                          </td>
                          <td className="p-2 border">
                            {inst["DEPARTAMENTO/REGION"]}
                          </td>
                          <td className="p-2 border">
                            {inst["SEDE (DISTRITO)"]}
                          </td>
                          <td className="p-2 border">
                            {inst["PROGRAMA ACADEMICO"]}
                          </td>
                           <td className="p-2 border">
                            {inst["MODALIDAD "]}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default InstitutionsByRegion;
