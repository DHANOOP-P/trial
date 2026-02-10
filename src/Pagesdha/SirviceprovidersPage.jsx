import { FaUserTie, FaUserAlt } from "react-icons/fa";
import Component4 from "../Components-dha/Component4";

const providers = [
  { id: 1, name: "John", role: "Plumber", icon: <FaUserTie size={32} /> },
  { id: 2, name: "Alex", role: "Electrician", icon: <FaUserAlt size={32} /> },
  { id: 3, name: "Emma", role: "Cleaner", icon: <FaUserAlt size={32} /> },
  { id: 4, name: "Chris", role: "Mechanic", icon: <FaUserTie size={32} /> },
  { id: 5, name: "Sophia", role: "Painter", icon: <FaUserAlt size={32} /> },
  { id: 6, name: "Daniel", role: "Carpenter", icon: <FaUserTie size={32} /> },
  { id: 7, name: "Olivia", role: "AC Technician", icon: <FaUserAlt size={32} /> },
];

export default function SirviceProvidersPage() {
  return (
    <div className="w-full h-screen">
      <div className='w-full'>

        <Component4 title="ALL sirvices Providers"
          showSearch={true}
          //  showFilter={true}
          theme='black' />
      </div>
      <div className="  p-4">



        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl p-4 flex flex-col items-center shadow"
            >
              <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white">{provider.icon}</span>
              </div>

              <h3 className="mt-2 text-sm font-semibold">
                {provider.name}
              </h3>
              <p className="text-xs text-gray-500">
                {provider.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
