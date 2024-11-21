import React from 'react';
import { customers } from '@/app/lib/placeholder-data';
import { inter } from '@/app/ui/fonts';

const CustomersList: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}></h1>
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium">Customer</th>
            <th scope="col" className="px-4 py-5 font-medium">Email</th>
            <th scope="col" className="px-4 py-5 font-medium">Telephone</th>
            <th scope="col" className="px-4 py-5 font-medium">Address</th>
            <th scope="col" className="px-4 py-5 font-medium">Detailed Information</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-900">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {customer.name}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {customer.email}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {/* Placeholder for telephone data */}
                123-456-7890
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {/* Placeholder for address data */}
                123 Main St, City, Country
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {/* Placeholder for detailed information */}
                Detailed info goes here.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;