import { createRoot } from 'react-dom/client';
import TailwindCSS from "./tailwindcss";
import './tailwind.css';
import LoginForm from './LoginForm';
import InputField from './components/InputField';
import HitungGajiForm from './HitungGajiForm';

createRoot(document.getElementById('root'))
.render(
<div>
    <TailwindCSS/>
    <LoginForm/>
    <InputField/>
    <HitungGajiForm/>
</div>
)
