import Logo from '../assets/logonavbar.png';
import { APP_CONFIG } from '../constants';


export default function Footer() {
    return (
        <footer
            style={{ backgroundColor: "#1a0a08", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="w-full text-stone-300"
        >
            <div className="max-w-7xl mx-auto px-8 pt-16 pb-10">
                <div className="flex flex-col md:flex-row gap-12 mb-16">
                    <div className="md:w-1/4 flex-shrink-0">
                        <a href="/" className="inline-flex items-center gap-2.5 no-underline">
                            <img src={Logo} alt="Logo" style={{ width: 120, height: 55 }} />
                        </a>
                        <div>
                            <p
                                style={{ color: "#5c3d30", fontSize: "0.78rem", letterSpacing: "0.08em", fontStyle: "italic" }}
                            >
                                {APP_CONFIG.HOME_PAGE_TEXT.HERO_SUBTITLE}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(APP_CONFIG.FOOTER_LİNKS).map(([key, links]) => (
                            <div key={key}>
                                <p
                                    style={{ color: "#d4a017", letterSpacing: "0.2em", fontSize: "0.65rem" }}
                                    className="uppercase mb-5"
                                >
                                    {key === 'CORPORATE' ? 'KURUMSAL' : key === 'SERVICES' ? 'HİZMETLER' : 'YASAL'}
                                </p>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <a
                                                href={link.path}
                                                style={{ color: "#a8917a", fontSize: "0.95rem" }}
                                                className="transition-colors duration-200 hover:text-yellow-600"
                                            >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ borderColor: "#2d1410" }} className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p style={{ color: "#5c3d30", fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                        © {new Date().getFullYear()} {APP_CONFIG.FOOTER.RIGHTS}
                    </p>
                    <p
                        style={{ color: "#5c3d30", fontSize: "0.78rem", letterSpacing: "0.08em", fontStyle: "italic" }}
                    >
                        {APP_CONFIG.FOOTER.SLOGAN}
                    </p>
                </div>
            </div>
            <div
                style={{
                    height: "3px",
                    background: "linear-gradient(to right, #1a0a08, #b8860b, #d4a017, #b8860b, #1a0a08)",
                }}
            />
        </footer>
    );
}