import InputField from "./components/InputField";

export default function LoginForm() {
    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2x1 font-semibold text-center mb-4">Tambah User</h2>
                <label className="block text-gray-700 font-medium">Nama</label>
                <InputField label="Nama" type="text" placeholder="Silahkan ketik Nama..."/>
		
        <InputField label="Email" type="email" placeholder="Silahkan ketik EMail..."/>

        <InputField label="Tanggal Lahir" type="date" />
                <button className="w-full bg-green-500 text-white p-2 rounded">
                    Simpan
                </button>
            </div>
        </div>
    );
}