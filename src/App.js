import "./App.css";
import { ConfigProvider } from "antd";
import { LightTheme } from "./Theme/light";
import LayoutWrapper from "./LayoutWrapper";
function App() {
    return (
        <>
            <ConfigProvider theme={LightTheme}>
                <LayoutWrapper/>
            </ConfigProvider>
        </>
    );
}

export default App;
