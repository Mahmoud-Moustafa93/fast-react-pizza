import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"; // "idle" or "loading" or "submitted"

    return (
        <div className="font grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />

            <main className=" overflow-auto">
                <div className="mx-auto max-w-3xl">
                    <Outlet />
                </div>
            </main>

            <CartOverview />

            <Footer />
        </div>
    );
}

export default AppLayout;
