import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

   return (
     <div className="w-full">
       <div className="flex w-full items-center justify-between">
         <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
       </div>
       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
         <Search placeholder="Search invoices..." />
       </div>
      <Table query={query} />
     </div>
   );
 }
