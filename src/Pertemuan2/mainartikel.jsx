import { createRoot } from "react-dom/client";
import HelloWorld from "./ArtikelDetail";;
import Container from "./Container";
import './custom.css';
// Sesuaikan dengan nama file yang dibuat

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
             <HelloWorld/>
            </Container>
        </div>
    )