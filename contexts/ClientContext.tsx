import  { createContext, useContext, useState, ReactNode } from 'react';
import { Client } from '../constants/clients_mock';



interface ClientContextProps {
  client: Client | null;
  setClientInfo: (newClient: Client) => void;
}

const ClientContext = createContext<ClientContextProps | null>(null);

export function ClientProvider({children}:{children: ReactNode}) {
  const [client, setClient] = useState<Client | null>(null);

  const setClientInfo = (newClient: Client) => {
    setClient(newClient);
  };

  return (
    <ClientContext.Provider value={{
      client,
      setClientInfo
    }}>
      {children}
    </ClientContext.Provider>
  );
}

export const useClient = (): ClientContextProps => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};
