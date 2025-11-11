import Image from "next/image";

const MOCK_STAFF = [
  { name: "Reception", ext: "x101", email: "info@firstcarefinancial.ca" },
  { name: "Bookkeeping", ext: "x102", email: "info@firstcarefinancial.ca" },
  { name: "Payroll", ext: "x103", email: "info@firstcarefinancial.ca" },
  { name: "Taxes", ext: "x104", email: "info@firstcarefinancial.ca" },
];

const MOCK_CLIENT = {
  legalName: "ACME Inc.",
  services: ["Bookkeeping", "Corporate Tax", "Payroll"],
  craNumber: "123456789RC0001",
  gstNumber: "123456789RT0001",
  notes: "Semi-monthly payroll; GST quarterly; remittance by FIRSTCARE.",
};

const MOCK_ADMIN_TASKS = [
  { name: "Annual Return Filing", due: "2025-12-15", price: 150, status: "In progress" },
];

const MOCK_RECURRING = [
  {
    name: "HST Filing – Q4 2025",
    abbr: "HST",
    periodStart: "2025-10-01",
    periodEnd: "2025-12-31",
    dueDate: "2026-01-31",
    status: "In progress",
    documentsStatus: "Not received",
    uploadLink: "#",
  },
];

const MOCK_REMITTANCE = [
  {
    name: "Payroll Remittance – Nov 2025",
    amount: "400.00",
    reason: "Monthly payroll",
    chequesRemaining: 2,
  },
];

const MOCK_INVOICES = [
  { number: "INV-2025-104", amount: "275.00", issued: "2025-11-01", paid: "", status: "Unpaid" },
];

export default function Home() {
  const hasRemittance = MOCK_REMITTANCE.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <header className="w-full bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-auto relative">
            <Image
              src="/firstcare-logo.png"
              alt="FIRSTCARE Financial"
              width={160}
              height={48}
              className="object-contain h-12 w-auto"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs text-slate-200">
              1087 Meyerside Dr Unit 4-5, Mississauga, ON L5T 1M5
            </p>
            <p className="text-xs text-slate-200">
              Tel: (905) 232-8041 · info@firstcarefinancial.ca
            </p>
            <p className="text-xs text-slate-300">
              Monday–Friday 9 a.m.–5 p.m. · Saturday & Sunday: Closed
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-right">
            <p className="text-sm font-semibold">{MOCK_CLIENT.legalName}</p>
            <p className="text-xs text-slate-200">
              Services: {MOCK_CLIENT.services.join(", ")}
            </p>
            <p className="text-xs text-slate-200">CRA: {MOCK_CLIENT.craNumber}</p>
          </div>
          <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-white">
            Feedback to FIRSTCARE
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 space-y-6">
          <div>
            <h2 className="text-sm font-semibold mb-3">Staff Directory</h2>
            <ul className="space-y-3">
              {MOCK_STAFF.map((staff) => (
                <li key={staff.name} className="text-sm">
                  <p className="font-medium">{staff.name}</p>
                  <p className="text-xs text-slate-500">{staff.email}</p>
                  <p className="text-xs text-slate-500">{staff.ext}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-2">Office Hours</h2>
            <p className="text-xs text-slate-600">Mon–Fri: 9 a.m.–5 p.m.</p>
            <p className="text-xs text-slate-600">Sat, Sun: Closed</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-100">
              <h2 className="text-base font-semibold mb-4">Client Details</h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Legal Name</dt>
                  <dd className="font-medium">{MOCK_CLIENT.legalName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">CRA Business No.</dt>
                  <dd className="font-medium">{MOCK_CLIENT.craNumber}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">GST/HST No.</dt>
                  <dd className="font-medium">{MOCK_CLIENT.gstNumber}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 mb-1">Important notes</dt>
                  <dd className="text-slate-700">{MOCK_CLIENT.notes}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-100">
              <h2 className="text-base font-semibold mb-4">Compliance / Accounts</h2>
              <p className="text-sm text-slate-600">Bookkeeping: Monthly</p>
              <p className="text-sm text-slate-600">Payroll: Semi-monthly</p>
              <p className="text-sm text-slate-600">GST/HST: Quarterly, Online</p>
            </div>
          </section>

          {/* Admin Tasks */}
          <section className="bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-base font-semibold">Admin Tasks</h2>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="py-2 px-5">Task</th>
                  <th className="py-2 px-5">Due Date</th>
                  <th className="py-2 px-5">Price</th>
                  <th className="py-2 px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_ADMIN_TASKS.map((task) => (
                  <tr key={task.name} className="border-t border-slate-100">
                    <td className="py-2 px-5">{task.name}</td>
                    <td className="py-2 px-5">{task.due}</td>
                    <td className="py-2 px-5">${task.price}</td>
                    <td className="py-2 px-5">{task.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Recurring Tasks */}
          <section className="bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-base font-semibold">Recurring Tasks</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[800px]">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="py-2 px-5">Task</th>
                    <th className="py-2 px-5">Abbr</th>
                    <th className="py-2 px-5">Period Start</th>
                    <th className="py-2 px-5">Period End</th>
                    <th className="py-2 px-5">Due Date</th>
                    <th className="py-2 px-5">Status</th>
                    <th className="py-2 px-5">Documents</th>
                    <th className="py-2 px-5">Upload</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_RECURRING.map((task) => (
                    <tr key={task.name} className="border-t border-slate-100">
                      <td className="py-2 px-5">{task.name}</td>
                      <td className="py-2 px-5">{task.abbr}</td>
                      <td className="py-2 px-5">{task.periodStart}</td>
                      <td className="py-2 px-5">{task.periodEnd}</td>
                      <td className="py-2 px-5">{task.dueDate}</td>
                      <td className="py-2 px-5">{task.status}</td>
                      <td className="py-2 px-5">{task.documentsStatus}</td>
                      <td className="py-2 px-5">
                        <a href={task.uploadLink} className="text-slate-900 underline">
                          Submit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Remittance */}
          {hasRemittance && (
            <section className="bg-white rounded-lg shadow-sm border border-slate-100">
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-base font-semibold">Remittance</h2>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="py-2 px-5">Remittance</th>
                    <th className="py-2 px-5">Amount</th>
                    <th className="py-2 px-5">Reason</th>
                    <th className="py-2 px-5">Cheques Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_REMITTANCE.map((rem) => (
                    <tr key={rem.name} className="border-t border-slate-100">
                      <td className="py-2 px-5">{rem.name}</td>
                      <td className="py-2 px-5">${rem.amount}</td>
                      <td className="py-2 px-5">{rem.reason}</td>
                      <td className="py-2 px-5">{rem.chequesRemaining}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {/* Invoices */}
          <section className="bg-white rounded-lg shadow-sm border border-slate-100 mb-10">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-base font-semibold">Invoices</h2>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="py-2 px-5">Invoice #</th>
                  <th className="py-2 px-5">Amount</th>
                  <th className="py-2 px-5">Issued</th>
                  <th className="py-2 px-5">Paid</th>
                  <th className="py-2 px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_INVOICES.map((inv) => (
                  <tr key={inv.number} className="border-t border-slate-100">
                    <td className="py-2 px-5">{inv.number}</td>
                    <td className="py-2 px-5">${inv.amount}</td>
                    <td className="py-2 px-5">{inv.issued}</td>
                    <td className="py-2 px-5">{inv.paid || "—"}</td>
                    <td className="py-2 px-5">{inv.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
