const Testimonials = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="testimonial-card">
            <div className="card-header">
                <img className="user-avatar" src={card.image} alt={`${card.name} avatar`} />
                <div className="user-info">
                    <div className="user-name-row">
                        <p className="user-name">{card.name}</p>
                        <svg className="verified-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Verified account">
                            <title>Verified account</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                    <span className="user-handle">{card.handle}</span>
                </div>
            </div>
            <p className="testimonial-text">Radiant made undercutting all of our competitors an absolute breeze.</p>
            <div className="card-footer">
                <div className="posted-info">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="twitter-link">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="X (Twitter)">
                            <title>X (Twitter)</title>
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p className="post-date">{card.date}</p>
            </div>
        </div>
    );

    return (
        <section className="testimonials-section">
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .testimonials-section {
                padding: 4rem 2rem;
                background: linear-gradient(135deg, rgba(16, 17, 23, 0.9), rgba(26, 27, 33, 0.9));
                position: relative;
            }

            .testimonials-title {
                font-size: 3rem;
                font-weight: 700;
                background: linear-gradient(135deg, #ffffff, #3B82F6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 3rem;
                font-family: 'Fira Code', monospace;
                text-align: center;
            }

            .testimonials-title::before {
                content: '>';
                color: #3B82F6;
                margin-right: 1rem;
                font-weight: normal;
            }

            .marquee-row {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
            }

            .marquee-inner {
                display: flex;
                min-width: 200%;
                padding-top: 2.5rem;
                padding-bottom: 1.25rem;
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }

            .fade-left {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 5rem;
                z-index: 10;
                pointer-events: none;
                background: linear-gradient(to right, rgba(16, 17, 23, 0.9), transparent);
            }

            .fade-right {
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 5rem;
                z-index: 10;
                pointer-events: none;
                background: linear-gradient(to left, rgba(16, 17, 23, 0.9), transparent);
            }

            @media (min-width: 768px) {
                .fade-right {
                    width: 10rem;
                }
            }

            .testimonial-card {
                padding: 1.5rem;
                border-radius: 20px;
                margin: 0 1rem;
                width: 20rem;
                flex-shrink: 0;
                transition: all 0.3s ease;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(59, 130, 246, 0.2);
                backdrop-filter: blur(15px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }

            .testimonial-card:hover {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(59, 130, 246, 0.4);
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            }

            .card-header {
                display: flex;
                gap: 0.5rem;
            }

            .user-avatar {
                width: 2.75rem;
                height: 2.75rem;
                border-radius: 50%;
            }

            .user-info {
                display: flex;
                flex-direction: column;
            }

            .user-name-row {
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            .user-name {
                margin: 0;
                font-weight: 600;
                color: #ffffff;
                font-size: 1rem;
            }

            .verified-icon {
                margin-top: 0.125rem;
            }

            .user-handle {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.6);
                font-family: 'Fira Code', monospace;
            }

            .testimonial-text {
                font-size: 0.95rem;
                padding: 1.25rem 0;
                color: #e2e8f0;
                margin: 0;
                line-height: 1.6;
                font-weight: 400;
            }

            .card-footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.75rem;
            }

            .posted-info {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                font-family: 'Fira Code', monospace;
            }

            .twitter-link {
                color: inherit;
                text-decoration: none;
                transition: color 0.2s ease;
            }

            .twitter-link:hover {
                color: #3B82F6;
            }

            .post-date {
                margin: 0;
                font-family: 'Fira Code', monospace;
            }

            /* Mobile Responsiveness */
            @media (max-width: 768px) {
                .testimonials-section {
                    padding: 2rem 1rem;
                }

                .testimonials-title {
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }

                .testimonials-title::before {
                    margin-right: 0.5rem;
                }

                .testimonial-card {
                    width: 16rem;
                    padding: 1.25rem;
                }

                .testimonial-text {
                    font-size: 0.875rem;
                    padding: 1rem 0;
                }

                .fade-left, .fade-right {
                    width: 3rem;
                }
            }

            @media (max-width: 480px) {
                .testimonials-title {
                    font-size: 1.75rem;
                }

                .testimonial-card {
                    width: 14rem;
                    padding: 1rem;
                }

                .user-name {
                    font-size: 0.875rem;
                }

                .testimonial-text {
                    font-size: 0.8rem;
                }

                .fade-left, .fade-right {
                    width: 2rem;
                }
            }
        `}</style>

            <h2 className="testimonials-title">What People Say</h2>

            <div className="marquee-row">
                <div className="fade-left"></div>
                <div className="marquee-inner">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row1-${card.name}-${index}`} card={card} />
                    ))}
                </div>
                <div className="fade-right"></div>
            </div>

            <div className="marquee-row">
                <div className="fade-left"></div>
                <div className="marquee-inner marquee-reverse">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`row2-${card.name}-${index}`} card={card} />
                    ))}
                </div>
                <div className="fade-right"></div>
            </div>
        </section>
    )
}

export default Testimonials
