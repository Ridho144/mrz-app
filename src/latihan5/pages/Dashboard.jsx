import ListMenu from "../components/ListMenu";
import PageHeader from "../components/PageHeader";
export default function Dashboard() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/4 min-h-screen bg-white shadow-lg p-10">
                <div id="sidebar-logo" className="flex flex-col">
                    <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                        Sedap <b className="text-hijau">.</b>
                    </span>
                    <span className="font-barlow text-gray-400">Modern Admin Dashboard</span>
                </div>
                <ListMenu />
                <div id="sidebar-footer" className="mt-auto">
                    <div className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                        <div className="text-white text-sm">
                            <span>Please organize your menus through button below!</span>
                            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                                <span className="text-gray-600 flex items-center">
                                    <AiFillPlusCircle />
                                    Add Menus
                                </span>
                            </div>
                        </div>
                        <img className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                    </div>
                    <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                    <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
                </div>
            </aside>

            <main className="w-3/4 p-6">
                <PageHeader
                    title="Dashboard"
                    breadcrumb={["Dashboard", "Order List"]}
                >
                    <button className="bg-hijau text-white px-4 py-2 rounded-lg">Add Button</button>
                </PageHeader>
            </main>
        </div>
    );
}
