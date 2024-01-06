function Footer() {
    return (
        <footer className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
            <span>
                &copy; Copyright {new Date().getFullYear()}{" "}
                <span className="font-semibold">Mahmoud Mostafa</span>
            </span>
            <span>💥Saturday, January 06 2023💥</span>
        </footer>
    );
}

export default Footer;
