import { createContext, useContext, useState } from "react";

import { Cycle } from "@/interfaces/cycle";

interface CyclesContextData {
  cycles: Cycle[];
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>;
}

export const CyclesContext = createContext({} as CyclesContextData);

export function CycleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  return (
    <CyclesContext.Provider value={{ cycles, setCycles }}>
      {children}
    </CyclesContext.Provider>
  );
}

const useCycles = () => useContext(CyclesContext);

export default useCycles;
