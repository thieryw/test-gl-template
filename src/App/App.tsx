import { GlTemplate } from "gitlanding/GlTemplate";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRoute } from "../router";
import { Home } from "../pages/Home";
import { PageExample } from "../pages/PageExample";
import { FourOhFour } from "../pages/FourOFour";
import { ThemeProvider } from "../theme";
import { Page2Example } from "../pages/Page2Example";

export function App() {
	const route = useRoute();
	return (
		<ThemeProvider>
			<GlTemplate
				header={<Header />}
				headerOptions={{
					"position": "sticky",
					"isRetracted": "smart",
				}}
				footer={<Footer />}
				body={
					(()=>{
						switch(route.name){
							case "home": return <Home />;
							case "pageExample": return <PageExample />;
							case "page2Example": return <Page2Example />;
							default: return <FourOhFour />;
						}
					})()
				}
			/>
		</ThemeProvider>
	);
}