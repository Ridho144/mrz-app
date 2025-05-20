export default function InputGaji({ Label, type, placeholder, onChange }) {
    return (
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">{Label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded"
                onChange={onChange} // Teruskan prop onChange ke input
            />
        </div>
    );
}