import { useState } from "react";
import { MapPin, Building2, Home, School, Landmark } from "lucide-react";

export default function AppPrototype() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    type: "empresa",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Campanha Recicle Certo ♻️
      </h1>

      <div className="w-full max-w-md shadow-lg rounded-2xl bg-white p-4">
        <p className="mb-4 text-gray-600 text-center">
          Agende sua coleta gratuita de lixo eletrônico
        </p>

        <div className="grid grid-cols-4 gap-2 mb-4">
          <button onClick={() => setForm({ ...form, type: "empresa" })}>
            <Building2 className="w-5 h-5" />
          </button>
          <button onClick={() => setForm({ ...form, type: "residencia" })}>
            <Home className="w-5 h-5" />
          </button>
          <button onClick={() => setForm({ ...form, type: "escola" })}>
            <School className="w-5 h-5" />
          </button>
          <button onClick={() => setForm({ ...form, type: "orgao" })}>
            <Landmark className="w-5 h-5" />
          </button>
        </div>

        <input
          placeholder="Nome completo"
          className="border p-2 mb-2 w-full rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Telefone/WhatsApp"
          className="border p-2 mb-2 w-full rounded"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Endereço para coleta"
          className="border p-2 mb-4 w-full rounded"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded flex items-center justify-center">
          <MapPin className="w-4 h-4 mr-2" /> Agendar Coleta
        </button>
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center max-w-md">
        © 2025 Campanha Recicle Certo - Todos os direitos reservados.
      </p>
    </div>
  );
}